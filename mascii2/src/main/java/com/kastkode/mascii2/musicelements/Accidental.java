package com.kastkode.mascii2.musicelements;

public enum Accidental {
	NATURAL(0), SHARP(1), FLAT(-1), DBLSHARP(2), DBLFLAT(-2);
	
	public final int adjust;

	Accidental(int adjust) {
		this.adjust = adjust;
	}
	
}
