package com.kastkode.mascii2.musicelements;

import com.kastkode.mascii2.util.MasciiUtil;

public class Note {
	int start;
	int end;
	
	public Spelling spelling;

	public Note(int start, Character degree) {
		this(start, new Spelling(degree));
	}

	public Note(int start, int duration, Character degree) {
		this(start, duration, new Spelling(degree));
	}
	
	public Note(int start, Spelling spelling) {
		this(start, 0, spelling);
	}

	public Note(int start, int duration, Spelling spelling) {
		this.spelling = spelling;
		this.start = start;
		this.end = start + duration;
	}
	
	public void setDuration(int duration) {
		end = start + duration;
	}
	
	public int getDuration() {
		return end - start;
	}
	
	public boolean isDurationComplete() {
		return end > start;
	}

	public int getPitch() {
		return spelling.getPitch();
	}
	
	//midi 60 (0x3c) is middle c, which we write as C4 or c4
	public int getMidiPitch() {
		return spelling.getMidiPitch();
	}
	
	/**
	 * 
	 * @param degree [a-g]
	 * @param sharpFlatAdjust -2, -1, 0, 1, or 2
	 * @param octaveRange the ocatave range in scientific pitch notation, [0-9]
	 * @return int representation of this pitch
	 * 
	 * 	both midi and scientific pitch start counting from C, so 0 is a C
	 */
	public static int absPitch(char degree, int octaveRange) {
		//jump table since semitone spacing is uneven
		int semitones = 0;
		switch(Character.toLowerCase(degree)) {
			case 'a': semitones = 9;  break;
			case 'b': semitones = 11; break;
			case 'c': semitones = 0;  break;
			case 'd': semitones = 2;  break;
			case 'e': semitones = 4;  break;
			case 'f': semitones = 5;  break;
			case 'g': semitones = 7;  break;
			default:  semitones = 0;  break;
		}
		return semitones + octaveRange * 12;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public static class Spelling {
		int grossPitchAdjust; // and any arbitrary transposing shifts
		Character degree;
		Accidental accidentals = Accidental.NATURAL;
		//int accidentalsAdjust; //-2, -2, 0, 1, or 2
		int octaveRangeBasis; //0-8
		int octaveAdjusts; // sum of up shifts (+1), down shifts (-1),		

		@Override
		public String toString() {
			return String.format("%s %s", degree, accidentals);
		}
		
		public Spelling(Character degree) {
			this.degree = degree;
		}
		
		public int getPitch() {
			return absPitch(degree, octaveRangeBasis + octaveAdjusts) + grossPitchAdjust + accidentals.adjust;
		}
		
		public int getMidiPitch() {
			int answer = getPitch() + 12;
			answer = Math.max(answer, 0);
			answer = Math.min(answer, 127);
			return answer;
		}
		
		public Character getDegree() {
			return degree;
		}
		public void setDegree(Character degree) {
			this.degree = degree;
		}
		public Accidental getAccidentals() {
			return accidentals;
		}
		//-2, -1, 0, 1, or 2
		public void setAccidentals(Accidental accidentals) {
			this.accidentals = accidentals;
		}
		
		public int getGrossPitchAdjust() {
			return grossPitchAdjust;
		}

		public void setGrossPitchAdjust(int grossPitchAdjust) {
			this.grossPitchAdjust = grossPitchAdjust;
		}
		public int getOctaveAdjusts() {
			return octaveAdjusts;
		}

		public void setOctaveAdjusts(int octaveAdjusts) {
			this.octaveAdjusts = octaveAdjusts;
		}

		public int getOctaveRangeBasis() {
			return octaveRangeBasis;
		}
		public void setOctaveRangeBasis(int octavebasis) {
			this.octaveRangeBasis = octavebasis;
		}
		public void setOctaveRangeBasis(String octaverange) {
			if(octaverange != null && octaverange.length() > 0)
				this.octaveRangeBasis = Integer.parseInt(octaverange);
			else
				this.octaveRangeBasis = 0;
			
		}
		
		public boolean isCapitalized() {
			return Character.isUpperCase(degree);
		}

		public Note.Spelling parseRelative(String note) {
			return MasciiUtil.parsePitch(note, KeySignature.C.alterationsMap(), this);
		}
		
		public Note.Spelling parseRelative(String note, KeySignature.AdHoc currentKey) {
			return MasciiUtil.parsePitch(note, currentKey, this);
		}
		
		public void inheritOctaveRangeFrom(Spelling from) {		
			inheritOctaveRangeFromSmart(from);
		}
		
		public void inheritOctaveRangeFromSimple(Spelling from) {
			int priorRange = from.getOctaveRangeBasis() + from.getOctaveAdjusts();
			if(this.getDegree().equals(from.getDegree()) ) {
				//exact same degree and capitalization and accidentals (explicit or implied) as prior, so this is a repeat note
				this.setOctaveRangeBasis(priorRange);
			} else {
				//calculate new basis range from prior one
				//each range spans from c to b
				//some cases and their corresponding range adjustments:
				//a -> b  0
				//a -> d  1
				//a -> g  1
				//a -> G  0
				//a -> B  -1
				//a -> A  -1
				
				//so its all about whether c lies between the source and destination
				//for upward motion, that means:
				//  is distance(source, dest) >= distance(source, 'c') ?

				
				//special case, same degree.  if degree direction matches accidental direction, then dont shift twice
				// scenarios:
										
				//alternate idea: "simple" rules only considers degree 
				// D- D= 1 semitones up
				// d- d= 1 semi up
				// D- D!= 11 semitones down
				// d- D= 11 semis down
				// D- d= 13 semi up 
				// d- d!= 13 semi up
				// d- D!= 23 semis down
				// D- d!= 25 semi up 
				
				
				if(this.isCapitalized()) {						
					if(MasciiUtil.crossesOctaveBoundary(from.getDegree(), this.getDegree(), PitchDirection.DOWN)) {
						//downward motion
						priorRange --;
					}
				} else {
					//upward motion
					if(MasciiUtil.crossesOctaveBoundary(from.getDegree(), this.getDegree(), PitchDirection.UP)) {
						priorRange ++;
					}
				}
				this.setOctaveRangeBasis(priorRange);
			}			
		}		

		public void inheritOctaveRangeFromSmart(Spelling from) {
			int priorRange = from.getOctaveRangeBasis() + from.getOctaveAdjusts();
			if(this.getDegree().equals(from.getDegree()) && (this.getAccidentals() == from.getAccidentals())) {
				//exact same degree and capitalization and accidentals (explicit or implied) as prior, so this is a repeat note
				this.setOctaveRangeBasis(priorRange);
			} else {
				if(Character.toLowerCase(from.getDegree()) == Character.toLowerCase(this.getDegree())) {
					//special case, same degree.  if degree direction matches accidental direction, then dont shift twice
					//this reduces scope of "exceptional" behavior for matching notes, so behavior is more like any other non matching pair of notes
					// scenarios:
											
					// "smart" fancy rules looking at degree + accidental
					// D- d= 1 semi up 
					// d- d= 1 semi up
					// d- D= 11 semis down
					// D- D= 11 semitones down
					// D- d!= 13 semi up 
					// d- d!= 13 semi up
					// D- D!= 23 semitones down
					// d- D!= 23 semis down

					if(this.isCapitalized()) {
						if(this.getAccidentals().adjust >= from.getAccidentals().adjust) {							
							priorRange --;
						}
					} else {
						if(this.getAccidentals().adjust <= from.getAccidentals().adjust) {							
							priorRange ++;
						}
					}
					
				} else if(this.isCapitalized()) {
					//downward motion
					if(MasciiUtil.crossesOctaveBoundary(from.getDegree(), this.getDegree(), PitchDirection.DOWN)) {
						priorRange --;
					}
				} else {
					//upward motion
					if(MasciiUtil.crossesOctaveBoundary(from.getDegree(), this.getDegree(), PitchDirection.UP)) {
						priorRange ++;
					}
				}
				this.setOctaveRangeBasis(priorRange);
			}			
		}		
		
	}
	
	
}
