package com.kastkode.mascii2.musicelements;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.kastkode.mascii2.util.MasciiUtil;

public class MetaInfo {
	int transpose;
	String instrument = "Piano";
	String clef = "treble";
	//int channel;
	Patch patch;
	
	TimeSig timeSig;
	KeySig keySig;
	Tempo tempo;
	Title title;
	Copyright copyright;
	
	
	public Title getTitle() {
		return title;
	}
	public void setTitle(Title title) {
		this.title = title;
	}
	public Copyright getCopyright() {
		return copyright;
	}
	public void setCopyright(Copyright copyright) {
		this.copyright = copyright;
	}
	public Patch getPatch() {
		return patch;
	}
	public void setPatch(Patch patch) {
		this.patch = patch;
	}
	public Tempo getTempo() {
		return tempo;
	}
	public void setTempo(Tempo tempo) {
		this.tempo = tempo;
	}
	public TimeSig getTimeSig() {
		return timeSig;
	}
	public void setTimeSig(TimeSig timeSig) {
		this.timeSig = timeSig;
	}
	public KeySig getKeySig() {
		return keySig;
	}
	public void setKeySig(KeySig keySig) {
		this.keySig = keySig;
	}
	public String getClef() {
		return clef;
	}
	public void setClef(String clef) {
		this.clef = clef;
	}
	public int getTranspose() {
		return transpose;
	}
	public void setTranspose(int transpose) {
		this.transpose = transpose;
	}
	public String getInstrument() {
		return instrument;
	}
	public void setInstrument(String instrument) {
		this.instrument = instrument;
	}
	
//	public MetaInfo copy() {
//		MetaInfo copy = new MetaInfo();
//		copy.time = time;
//		copy.timeNumerator = timeNumerator;
//		copy.timeDenominator = timeDenominator;
//		copy.key = key;
//		copy.keyAdjusts = new int[keyAdjusts.length];
//		System.arraycopy(keyAdjusts, 0, copy.keyAdjusts, 0, keyAdjusts.length);
//		copy.transpose = transpose;
//		copy.instrument = instrument;
//		copy.patch = patch;
//		return copy;
//	}
	
	public static class MetaInfoElement<U> {
		protected U rawValue;
		int startingAt;
				
		public U getRawValue() {
			return rawValue;
		}
		public <T extends MetaInfoElement<U>> T setRawValue(U rawValue) {
			this.rawValue = rawValue;
			return (T)this;
		}
		public int getStartingAt() {
			return startingAt;
		}
		public <T extends MetaInfoElement<U>> T  setStartingAt(int startingAt) {
			this.startingAt = startingAt;
			return (T)this;
		}
		
		public <T extends MetaInfoElement<U>> T copy() {
			try {
				MetaInfoElement<U> answer = this.getClass().newInstance();
				answer.setRawValue(this.rawValue);
				answer.setStartingAt(this.startingAt);
				return (T)answer;
			} catch(Exception e) {
				return null;
			}
		}
				
		@Override
		public String toString() {
			return "metaevent: " + rawValue;
		}
		
		public static String trim(String s) {
			if(s == null) return s;
			return s.trim();
		}
	}
	
	public static class GlobalMeta extends MetaInfoElement<String> {
		@Override
		public <T extends MetaInfoElement<String>> T setRawValue(String s) {
			//if(s != null) s = s.trim();
			return super.setRawValue(s);
		}		
	}
	public static class TrackLevelMeta extends MetaInfoElement<String> {
		@Override
		public <T extends MetaInfoElement<String>> T setRawValue(String s) {
			//if(s != null) s = s.trim();
			return super.setRawValue(s);
		}		
	}
	
	public static class TimeSig extends GlobalMeta {
		Pattern timeSigPattern = Pattern.compile("(\\d+)/?(\\d+)?");
		int timeNumerator = 4;
		int timeDenominator = 4;
		
		@Override
		public TimeSig setRawValue(String time) {
			time = trim(time);
			super.setRawValue(time);
			if(time == null) return this;
			Matcher m = timeSigPattern.matcher(time);
			if(m.matches()) {
				timeNumerator = Integer.parseInt(m.group(1));
				if(m.group(2) != null) {
					timeDenominator = Integer.parseInt(m.group(2));
				}
			}
			return this;
		}
		
		public int getTimeNumerator() {
			return timeNumerator;
		}
		public void setTimeNumerator(int timeNumerator) {
			this.timeNumerator = timeNumerator;
		}
		public int getTimeDenominator() {
			return timeDenominator;
		}
		public void setTimeDenominator(int timeDenominator) {
			this.timeDenominator = timeDenominator;
		}
		
	}
	
	public static class Tempo extends GlobalMeta {
		int tempo;

		public int getTempo() {
			return tempo;
		}

		public void setTempo(int tempo) {
			this.tempo = tempo;
		}
		
		@Override
		public Tempo setRawValue(String tempo) {
			tempo = trim(tempo);
			super.setRawValue(tempo);
			if(tempo == null) return this;
			this.tempo = Integer.parseInt(tempo);
			return this;
		}
	}	

	public static class Title extends GlobalMeta {
	}	

	public static class Copyright extends GlobalMeta {
	}	

	public static class Lyric extends GlobalMeta {
	}
	public static class FreeText extends GlobalMeta {
	}
	
	public static class KeySig extends GlobalMeta {
		static final Pattern keySigPat = Pattern.compile("("+MasciiUtil.PATTERN_DEGREES+")("+MasciiUtil.PATTERN_ACCIDENTALS+"?)([Mm]?)");
		boolean isMinor = false;
		KeySignature keySignature;
		
		public KeySig() {
			this.rawValue = "c";
		}
		
		public boolean isMinor() {
			return isMinor;
		}
		
		public KeySignature getKeySignature() {
			return keySignature;
		}

		public void setKeySignature(KeySignature keySignature) {
			this.keySignature = keySignature;
		}

		@Override
		public KeySig setRawValue(String key) {			
			key = trim(key);
			super.setRawValue(key);
			if(key == null) {
				keySignature = KeySignature.C;
				return this;
			}
			try {
				int accidentalNumber = Integer.parseInt(key);
				keySignature = KeySignature.getByCode(accidentalNumber);
			} catch(Exception e) {
				Matcher m = keySigPat.matcher(key);
				if(m.matches()) {
					char degree = Character.toLowerCase(m.group(1).charAt(0));
					Accidental accidental = MasciiUtil.asAccidental(m.group(2));
					isMinor = m.group(3).length() > 0;
					keySignature = KeySignature.getByDegree(degree, accidental, isMinor);
				}
			}
			if(keySignature == null) keySignature = KeySignature.C;
			return this;
		}
	}
	
	public static class Patch extends TrackLevelMeta {
		int patch;
		
		public int getPatch() {
			return patch;
		}
		
		public void setPatch(int patch) {
			this.patch = patch;
		}
		
		@Override
		public Patch setRawValue(String patch) {
			patch = trim(patch);
			super.setRawValue(patch);
			if(patch == null) return this;
			this.patch = Integer.parseInt(patch);
			return this;
		}
		
	}
		
}