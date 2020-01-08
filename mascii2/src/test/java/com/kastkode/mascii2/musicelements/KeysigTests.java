package com.kastkode.mascii2.musicelements;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;

import com.kastkode.mascii2.Mascii2ApplicationTests;
import com.kastkode.mascii2.ParseResult;
import com.kastkode.mascii2.musicelements.KeySignature.AdHoc;
import com.kastkode.mascii2.util.MasciiUtil;

public class KeysigTests {

	@Test
	public void keysigencoding() {
		AdHoc key = KeySignature.B_FLAT.alterationsMap();
		int origBitMap = key.asBitmap();
		
		assertEquals(key.getAccidental('b').adjust, -1);
		assertEquals(key.getAccidental('e').adjust, -1);
		assertEquals(key.getAccidental('c').adjust, 0);
		
		assertTrue(KeySignature.E_FLAT.alterationsMap().asBitmap() != key.asBitmap());
		
		key.setAccidental('a', Accidental.FLAT);
		assertEquals(KeySignature.E_FLAT.alterationsMap().asBitmap(), key.asBitmap());
		
		//make sure original unaffected
		assertTrue(origBitMap == KeySignature.B_FLAT.alterationsMap().asBitmap());
	}

	@Test
	public void relativeMajor() {
		assertEquals('c', MasciiUtil.relativeMajorDegree('a'));
		assertEquals('d', MasciiUtil.relativeMajorDegree('b'));
		assertEquals('b', MasciiUtil.relativeMajorDegree('g'));
		assertEquals('g', MasciiUtil.relativeMajorDegree('e'));
		assertEquals('a', MasciiUtil.relativeMajorDegree('f'));
	}
	
	@Test
	public void keysigLookup() {
		assertEquals(KeySignature.C, KeySignature.getByDegree('c', Accidental.NATURAL, false));
		assertEquals(KeySignature.D_FLAT, KeySignature.getByDegree('d', Accidental.FLAT, false));
		assertEquals(KeySignature.F_SHARP, KeySignature.getByDegree('f', Accidental.SHARP, false));
		assertEquals(KeySignature.C_SHARP, KeySignature.getByDegree('a', Accidental.SHARP, true));
		assertEquals(KeySignature.B_FLAT, KeySignature.getByDegree('g', Accidental.NATURAL, true));
		assertEquals(KeySignature.E, KeySignature.getByDegree('c', Accidental.SHARP, true));
	}

	@Test
	public void alterationMemory() {
		String minuet = "{key: gm}\n\n"
				+ "g [b A] G b= A@ G a b | c B A G";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> treb = parts.get(0).getNoteStream();
			
		assertEquals(0, treb.get(3).getPitch() - treb.get(0).getPitch());
		assertEquals(1, treb.get(4).getPitch() - treb.get(1).getPitch());		
	}	

	@Test
	public void alterationMemory2() {
		String minuet = "{key: fm}\n"
				+ "a F | E= f E";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> treb = parts.get(0).getNoteStream();
			
		assertEquals(treb.get(2).getPitch(), treb.get(4).getPitch());
	}	
	
	@Test
	public void alterationMemory3() {
		String minuet = "{key: gm}\n"
				+ "g [b A] G b= A@ G a b | c B A G";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> treb = parts.get(0).getNoteStream();
			
		assertEquals(0, treb.get(3).getPitch() - treb.get(0).getPitch());
		assertEquals(1, treb.get(11).getPitch() - treb.get(7).getPitch());
		
	}	

	@Test
	public void accidentalKey() {
		String minuet = "{key: d@}\n"
				+ "f e d g";
		ParseResult result = Mascii2ApplicationTests.parse(minuet);
		assertEquals(
				KeySignature.D_FLAT.alterationsMap().asBitmap(), 
				result.getParts().get(0).getCurrentKey().asBitmap());		
	}	
}