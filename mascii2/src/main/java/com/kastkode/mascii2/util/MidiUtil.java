package com.kastkode.mascii2.util;

public class MidiUtil {

	public static byte[] last3Bytes(int i) {
	    return new byte[] { 
	        (byte)(i >> 16),
	        (byte)(i >> 8),
	        (byte)i };
	}

	public static byte lastByte(int i) {
	    return (byte)i;
	}

	public static byte[] asBytes(int... vals) {
		byte[] answer = new byte[vals.length];
		for(int i=0; i<vals.length; i++) {
			answer[i] = (byte)vals[i];
		}
		return answer;
	}

	//converts beats per minute to microseconds per quarter note
	public static int bpm2mspq(int bpm) {
		return 60000000 / bpm;
	}
		
	public static byte[] keySig(int i, boolean isMinor) {
		byte m = isMinor? (byte)1:(byte)0;
		
		byte[] answer = new byte[] {
			MidiUtil.lastByte(i),
			m
		};
		return answer;
	}

	public static int asMidiTimeSigDenominator(int n) {
		int answer = logBase2(n);
		if(answer < 0) answer = 2; //default to quarter notes which is 2^2
		return answer;
	}
	
	public static int logBase2(int n) {
	    if(n <= 0) return -1;
	    return 31 - Integer.numberOfLeadingZeros(n);	
	}
}
