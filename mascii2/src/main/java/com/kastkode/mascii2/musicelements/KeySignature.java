package com.kastkode.mascii2.musicelements;

import com.kastkode.mascii2.util.MasciiUtil;

public enum KeySignature {
	C_FLAT('c', Accidental.FLAT, setFlats('b', 'e', 'a', 'd', 'g', 'c', 'f'), -7),
	G_FLAT('g', Accidental.FLAT, setFlats('b', 'e', 'a', 'd', 'g', 'c'), -6),
	D_FLAT('d', Accidental.FLAT, setFlats('b', 'e', 'a', 'd', 'g'), -5),
	A_FLAT('a', Accidental.FLAT, setFlats('b', 'e', 'a', 'd'), -4),
	E_FLAT('e', Accidental.FLAT, setFlats('b', 'e', 'a'), -3),
	B_FLAT('b', Accidental.FLAT, setFlats('b', 'e'), -2),
	F('f', Accidental.FLAT, setFlats('b'), -1),
	C('c', Accidental.NATURAL, new AdHoc(), 0),
	G('g', Accidental.SHARP, setSharps('f'), 1),
	D('d', Accidental.SHARP, setSharps('f', 'c'), 2),
	A('a', Accidental.SHARP, setSharps('f', 'c', 'g'), 3),
	E('e', Accidental.SHARP, setSharps('f', 'c', 'g', 'd'), 4),
	B('b', Accidental.SHARP, setSharps('f', 'c', 'g', 'd', 'a'), 5),
	F_SHARP('f', Accidental.SHARP, setSharps('f', 'c', 'g', 'd', 'a', 'e'), 6),
	C_SHARP('c', Accidental.SHARP, setSharps('f', 'c', 'g', 'd', 'a', 'e', 'b'), 7);

	//TODO: calculate relative minor.  what abt A# minor?
	
	private static KeySignature[] flatSignatures = new KeySignature[] {
			A_FLAT, B_FLAT, null, D_FLAT, E_FLAT, null, G_FLAT
	};
	private static KeySignature[] naturalSignatures = new KeySignature[] {
			A, B, C, D, E, F, G
	};
	private static KeySignature[] sharpSignatures = new KeySignature[] {
			null, null, C_SHARP, null, null, F_SHARP, null
	};
	
	private char degree;
	private Accidental accidental;
	private int code;
	private AdHoc alterations;
	
	KeySignature(char degree, Accidental accidental, AdHoc alterations, int code) {
		this.degree = degree;
		this.accidental = accidental;
		this.alterations = alterations;
		this.code = code;
	}
	
	public static KeySignature getByCode(int code) {
		for(KeySignature k:values()) {
			if(k.code == code) return k;
		}
		return null;
	}

	public static KeySignature getByDegree(char degree, Accidental accidental, boolean isMinor) {
		degree = Character.toLowerCase(degree);
		
		
		if(! isMinor) {
			KeySignature[] keys;
			if(accidental == Accidental.FLAT) {
				keys = flatSignatures;
			} else if(accidental == Accidental.SHARP) {
				keys = sharpSignatures;
			} else {
				keys = naturalSignatures;
			}
			
			int majindex = (degree - 'a') % keys.length;
			KeySignature maj = keys[majindex];
			return maj;
		} else {
			//TODO: there must be a better way... but meanwhile this works
			
			//1. figure out the 6th note in this scale
			int relMaj = (MasciiUtil.relativeMajorDegree(degree) - 'a') % naturalSignatures.length;
			
			if(naturalSignatures[relMaj].alterations.getAccidental(degree) == accidental) {
				return naturalSignatures[relMaj];
			} else if(sharpSignatures[relMaj] != null && sharpSignatures[relMaj].alterations.getAccidental(degree) == accidental) {
				return sharpSignatures[relMaj];
			} else {
				return flatSignatures[relMaj];
			}
		}
				
	}
	
	public char getDegree() {
		return degree;
	}

	public Accidental getAccidental() {
		return accidental;
	}

	//always returns defensive copy, not original
	public AdHoc alterationsMap() {
		return alterations.copy();
	}
	
	public int getCode() {
		return code;
	}

	private static final AdHoc setFlats(char... degrees) {
		AdHoc answer = new AdHoc();
		for(char ch:degrees) {
			answer.setAccidental(ch, Accidental.FLAT);
		}
		return answer;
	}
	
	private static final AdHoc setSharps(char... degrees) {
		AdHoc answer = new AdHoc();
		for(char c:degrees) {
			answer.setAccidental(c, Accidental.SHARP);
		}
		return answer;
	}
	
	
	public static class AdHoc {
		private static final int SHARPS_BYTE = 0 * 8; //last byte, byte 0
		private static final int DBLSHARPS_BYTE = 1 * 8; //byte 1
		private static final int FLATS_BYTE = 2 * 8; //byte 2
		private static final int DBLFLATS_BYTE = 3 * 8; //byte 3
		
		private int accidentalsBitmap;

		public AdHoc() {
			this(0);
		}
		
		public AdHoc(int accidentalsBitmap) {
			this.accidentalsBitmap = accidentalsBitmap;
		}
		
		public AdHoc copy() {
			return new AdHoc(this.accidentalsBitmap);
		}
		
		public int asBitmap() {
			return accidentalsBitmap;
		}

		public Accidental getAccidental(char c) {
			c = Character.toLowerCase(c);
			int offset = c - 'a';
			
			if ((accidentalsBitmap & (1 << offset + DBLSHARPS_BYTE)) != 0)
			{
				return Accidental.DBLSHARP;
			} else if ((accidentalsBitmap & (1 << offset + DBLFLATS_BYTE)) != 0)
			{
				return Accidental.DBLFLAT;
			} else if((accidentalsBitmap & (1 << offset + SHARPS_BYTE)) != 0)
			{
				return Accidental.SHARP;
			} else if((accidentalsBitmap & (1 << offset + FLATS_BYTE)) != 0)
			{
				return Accidental.FLAT;
			} else {
				return Accidental.NATURAL;
			}
		}
		
		public int setAccidental(char c, Accidental acc) {
			c = Character.toLowerCase(c);
			int offset = c - 'a';

			if(acc == Accidental.DBLFLAT) {
				accidentalsBitmap |= 1 << (offset + DBLFLATS_BYTE);			
			} else {
				accidentalsBitmap &= ~(1 << (offset + DBLFLATS_BYTE));					
			}

			if(acc == Accidental.DBLSHARP) {
				accidentalsBitmap |= 1 << (offset + DBLSHARPS_BYTE);			
			} else {
				accidentalsBitmap &= ~(1 << (offset + DBLSHARPS_BYTE));					
			}

			if(acc == Accidental.FLAT) {
				accidentalsBitmap |= 1 << (offset + FLATS_BYTE);			
			} else {
				accidentalsBitmap &= ~(1 << (offset + FLATS_BYTE));					
			}

			if(acc == Accidental.SHARP) {
				accidentalsBitmap |= 1 << (offset + SHARPS_BYTE);			
			} else {
				accidentalsBitmap &= ~(1 << (offset + SHARPS_BYTE));					
			}
			return accidentalsBitmap;
		}

	}
	
	@Override
	public String toString() {
		return code + "";
	}
}
