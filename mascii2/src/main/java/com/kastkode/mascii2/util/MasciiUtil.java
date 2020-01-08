package com.kastkode.mascii2.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.kastkode.mascii2.musicelements.Accidental;
import com.kastkode.mascii2.musicelements.KeySignature;
import com.kastkode.mascii2.musicelements.MetaInfo;
import com.kastkode.mascii2.musicelements.Note;
import com.kastkode.mascii2.musicelements.PitchDirection;

public class MasciiUtil {
	final static int PATTERN_INDEX_DEGREE = 3;
	final static int PATTERN_INDEX_ACCIDENTALS = 4;
	final static int PATTERN_INDEX_ABS_PITCH_RANGE = 1;
	final static int PATTERN_INDEX_RANGE_AMPLIFIERS = 2;
	
	public static final String PATTERN_DEGREES = "[a-gA-G]";
	public static final String PATTERN_ACCIDENTALS = "[#@=]";
	public static final Pattern noteSyntax = Pattern.compile("(\\d?)(!*)("+PATTERN_DEGREES+")("+PATTERN_ACCIDENTALS+"*)");

	public static final char REST = '%';
	
	// use a bitmap instead of array to track alterations for each key
	// also needs to handle double sharps, double flats,
	// and even a combo of sharps and flats as it may occur in any measure which 
	// we want to remember for duration of measure
	// we therefore use an int, where:
	//byte 0 (lowest) tracks sharps
	//byte 1 tracks dbl sharps
	//byte 2 tracks flats
	//byte 3 tracks dbl flats

//	public static final Map<String, Integer> circle5thKeyToCode = new HashMap<>(15); 
//	public static final Map<Integer, String> circle5thCodeToKey = new HashMap<>(15); 	

	public static Accidental asAccidental(String accidental) {
		if(accidental == null) return Accidental.NATURAL;
		switch (accidental) {
			case "@@": return Accidental.DBLFLAT;
			case "@": case "=@": return Accidental.FLAT;
			case "#": case "=#": return Accidental.SHARP;
			case "##": return Accidental.DBLSHARP;
			case "=": 
			default: return Accidental.NATURAL;
		}
	}

	public static int magnitude(String shift) {
		if (shift == null) return 0;
		
		return shift.length();
	}

	public static Note.Spelling parsePitch(String pitch) {
		return parsePitch(pitch, KeySignature.C.alterationsMap());
	}

	public static Note.Spelling parsePitch(String pitch, KeySignature.AdHoc key) {
		return parsePitch(pitch, key, null);
	}

	public static Note.Spelling parsePitch(String pitch, Note.Spelling relativeTo) {
		return parsePitch(pitch, KeySignature.C.alterationsMap(),relativeTo);
	}
	
	public static Note.Spelling parsePitch(String pitch, KeySignature.AdHoc key, Note.Spelling relativeTo) {
			//System.out.println("resolving " + pitch + " relative to " + (relativeTo == null? "null" : relativeTo.getPitch()));
		
			Matcher m = MasciiUtil.noteSyntax.matcher(pitch);
			Note.Spelling spelling = null;
			if(m.matches()) {
				spelling = new Note.Spelling(m.group(PATTERN_INDEX_DEGREE).charAt(0));
				String accidentals = m.group(PATTERN_INDEX_ACCIDENTALS);
				String absOctave = m.group(PATTERN_INDEX_ABS_PITCH_RANGE);
				String amplifier = m.group(PATTERN_INDEX_RANGE_AMPLIFIERS);
				
				if(accidentals.length() ==0) {
					spelling.setAccidentals(key.getAccidental(spelling.getDegree()));
				} else {
					spelling.setAccidentals(asAccidental(accidentals));
				}
				if(spelling.isCapitalized()) {
					spelling.setOctaveAdjusts(magnitude(amplifier) * -1);				
				} else {
					spelling.setOctaveAdjusts(magnitude(amplifier));								
				}
	
				//at this point we know degree, up/down shifts, accidentals shift
				//all that remains is what is the basis octave range for this note (before shifts are applied)
				//unless it was specified in absolute terms, we must derive it from the range of the prior note
				//and then go up/down/same from there based on capitalization of this current note's degree
				//same degree and capitalization as previous = unchanged, cap = down, upcase = up
	
				if(absOctave.length() > 0) {  //absolute pitch 					
					spelling.setOctaveRangeBasis(Integer.parseInt(absOctave));
				} else { //relative pitch
					if(relativeTo == null) {
						//relative to nothing, so just assume a default range 
						spelling.setOctaveRangeBasis(
							spelling.isCapitalized()? 3 : 4
						);
					} else {
						spelling.inheritOctaveRangeFrom(relativeTo);
					}
				}
			} else {
				//System.out.println("no match!");
			}
			
			return spelling;			
	}
	
	//the octave boundary is between b and c
	//direction true means upward motion
	//direction false means downward motion
	//same note is considered an octave shift, thus always crosses boundary
	public static boolean crossesOctaveBoundary(char from, char to, PitchDirection direction) {
		from = Character.toLowerCase(from);
		to = Character.toLowerCase(to);

		if(from == to) return direction != PitchDirection.SAME;
		if(direction != PitchDirection.UP) {
			return ! crossesOctaveBoundary(from, to, PitchDirection.UP);
		}
		
		//c to anything cant cross a boundary
		//special case needed because Note.diatonicInterval considers c, c to be unison not octave
		//so math gets skewed
		if(from == 'c') {
			return false;
		}
		
		//calculate upward motion
		return MasciiUtil.diatonicInterval(from, to)
			>=
			MasciiUtil.diatonicInterval(from, 'c');		
	}

	//returns size of diatonic interval.  eg c, e would be 3 (ie its a 3rd)
	//remember that interval math in music counts from 1 not 0, so everything's off by 1
	//a,c should return 3 while c,a should return 6
	public static int diatonicInterval(char A, char B) {
		
		int a = Character.toLowerCase(A) - 'a';
		int b = Character.toLowerCase(B) - 'a';
		
		//java's modulo (%) is incorrect for neg numbers
		//so use this func instead
		return Math.floorMod((b - a), 7) +1 ;		
	}
	
	public static char relativeMajorDegree(char degree) {
		degree = Character.toLowerCase(degree);
		return (char)((((degree - 'a') + 2) % 7) + 'a');
	}
	
	
	public static String[] splitHeaderValues(String content) {
		boolean appendSilentToken = content.matches(".*\\,\\s*$");
		if(appendSilentToken) {
			content += "silentToken";
		}
		String[] headerVals = content.split("\\s*\\,\\s*");
		if(appendSilentToken) {
			headerVals[headerVals.length - 1] = "";
		}
		return headerVals;
	}
	
	public static String times(int howMany, String s) {
		if(howMany <=0) return "";
		if(howMany == 1) return s;
		
		StringBuilder answer = new StringBuilder();
		for(int i=0; i<howMany; i++) {
			answer.append(s);
		}
		return answer.toString();
	}
	
	public static boolean isRest(String s) {
		return s.length() == 1 && s.charAt(0) == REST;
	}
	
	public static List<MetaInfo.Lyric> asLyrics(List<Note> notes, String[] lyrics, String prefix) {
		List<MetaInfo.Lyric> answer = new ArrayList<>(lyrics.length);
		if(lyrics.length == 0) return answer;
		
		int gap = lyrics.length - notes.size(); 
		
		if(gap > 0) {
			//we have too many lyrics, so stuff them into last element
			StringBuilder bldr = new StringBuilder();
			for(int i=lyrics.length - gap - 1; i < lyrics.length; i++) {
				String lyr = lyrics[i];
				if(! isRest(lyr)) {					
					bldr.append(lyr);
					if(i + 1<lyrics.length) {
						bldr.append("-");
					}
				}
			}
			lyrics[lyrics.length - gap - 1] = bldr.toString();
		}
		
		int lind = 0;			
		for(Iterator<Note> it = notes.iterator(); it.hasNext() && lind < lyrics.length; lind++) {
			Note n = it.next();
			String lyr = lyrics[lind];
			if(isRest(lyr)) {
				answer.add(null);
				continue;
			}
			MetaInfo.Lyric lyric = new MetaInfo.Lyric();
			lyric.setStartingAt(n.getStart());
			lyric.setRawValue(prefix + lyr);
			answer.add(lyric);
		}
		return answer;
	}
	
	//assumes ArrayLists
	public static void mergeBIntoA(List<MetaInfo.Lyric> a, List<MetaInfo.Lyric> b ) {		
		for(int ai=0, bi=0; ai < a.size() && bi < b.size(); ai++, bi++) {
			MetaInfo.Lyric la = a.get(ai);
			MetaInfo.Lyric lb = b.get(bi);			
			
			if(la == null) {
				a.set(ai, lb);
			} else if(lb == null) {
				
			} else {
				la.setRawValue(la.getRawValue() + lb.getRawValue());
			}
		}
		
		int sizeDiff = b.size() - a.size();
		if(sizeDiff > 0) {
			a.addAll(b.subList(b.size() - sizeDiff - 1, b.size()));
		}
	}
}
