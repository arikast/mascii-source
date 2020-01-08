package com.kastkode.mascii2.musicelements;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;

import com.kastkode.mascii2.Mascii2ApplicationTests;
import com.kastkode.mascii2.ParseResult;
import com.kastkode.mascii2.util.MasciiUtil;

public class PitchTests {
	

	@Test
	public void middleC() {
		//System.out.println(Note.absPitch('c', 0));
		assertEquals(0, Note.absPitch('c', 0) );
		assertEquals(9, Note.absPitch('a', 0) );
		assertEquals(21, Note.absPitch('a', 1) );
		assertEquals(12, Note.absPitch('c', 1) );
		assertEquals(48, Note.absPitch('c', 4) );

		//assertTrue(Note.absPitchAsMidiInt("c", 4) == 60);
	}

	@Test
	public void enforceMinMaxPitchBoundaries() {
		String minuet = "!!!!!!!!!!G | !!!!!!!!!!g \n"
				+ "a | a";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> bass = parts.get(0).getNoteStream();
		List<Note> treb = parts.get(1).getNoteStream();
			
		assertTrue(bass.get(0).getMidiPitch() >= 0 && bass.get(0).getMidiPitch() <= 127);
		assertTrue(treb.get(0).getMidiPitch() >= 0 && treb.get(0).getMidiPitch() <= 127);
		
	}
	
	@Test
	public void multimeasurePitch() {
		String minuet = "G | a \n"
				+ "g | a";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> bass = parts.get(0).getNoteStream();
		List<Note> treb = parts.get(1).getNoteStream();
			
		assertEquals(bass.get(1).getPitch() - bass.get(0).getPitch(), 2);
		assertEquals(treb.get(1).getPitch() - treb.get(0).getPitch(), 2);
		
	}

	@Test
	public void multimeasurePitch2() {
		String minuet = " g [a b] \n\n"
				+ " g ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> treb = parts.get(0).getNoteStream();
			
		assertEquals(treb.get(3).getPitch() - treb.get(0).getPitch(), 12);
		
	}
	
	@Test
	public void multimeasurePitch3() {
		String minuet = " [!Gbd]__ a | b G b  \n"
				+ "  d [G a] [b c] | d [% G] [% G] ";
		ParseResult result = Mascii2ApplicationTests.parse(minuet); 
		List<Part> parts = result.getParts();
		List<Note> treb = parts.get(1).getNoteStream();
			
		assertEquals(treb.get(5).getPitch(), treb.get(0).getPitch());	
	}

	@Test
	public void multimeasurePitch4() {
		String minuet = "d G c d ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> treb = parts.get(0).getNoteStream();
			
//		assertTrue(treb.get(2).getPitch() < treb.get(0).getPitch());		
		assertEquals(treb.get(3).getPitch(), treb.get(0).getPitch());		
	}

	@Test
	public void multimeasurePitch6() {
		String minuet = "d C d ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> treb = parts.get(0).getNoteStream();
			
//		assertTrue(treb.get(2).getPitch() < treb.get(0).getPitch());		
		assertEquals(treb.get(2).getPitch(), treb.get(0).getPitch());		
	}

	@Test
	public void scopedGroup() {
		String minuet = "d (C !C) d e ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> treb = parts.get(0).getNoteStream();
			
		assertEquals(-2, treb.get(1).getPitch() - treb.get(0).getPitch());		
		assertEquals(-12, treb.get(2).getPitch() - treb.get(1).getPitch());		
		assertEquals(treb.get(3).getPitch(), treb.get(0).getPitch());		
	}

	@Test
	public void unscopedGroup() {
		String minuet = "d [C !C] d e ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> treb = parts.get(0).getNoteStream();
			
		assertEquals(-2, treb.get(1).getPitch() - treb.get(0).getPitch());		
		assertEquals(-12, treb.get(2).getPitch() - treb.get(1).getPitch());		
		assertEquals(2, treb.get(3).getPitch() - treb.get(2).getPitch());		
		assertEquals(-12, treb.get(3).getPitch() - treb.get(0).getPitch());		
	}
	
	@Test
	public void multimeasurePitch5() {
		String minuet = "d [G c] \n\n"
				+ " d [% G] ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		List<Note> treb = parts.get(0).getNoteStream();
			
		assertEquals(treb.get(3).getPitch(), treb.get(0).getPitch());		
	}

	@Test
	public void parseShouldFail() {
		String minuet = "c5 b4" ;
		Mascii2ApplicationTests.parseShouldFail(minuet);
	}
	
	@Test
	public void relativePitch2() {
		Note.Spelling base = MasciiUtil.parsePitch("4d");
		assertEquals(base.getPitch(), base.parseRelative("C").parseRelative("d").getPitch());		
	}

	@Test
	public void badAbsPitch() {
		Note.Spelling base = MasciiUtil.parsePitch("c5"); //erroneous syntax, should be 4c
		assertEquals(null, base);		
	}

	@Test
	public void relativeAdjustedPitch() {
		Note.Spelling base = MasciiUtil.parsePitch("4d");
		assertEquals(base.getPitch(), base.parseRelative("!C").parseRelative("d").parseRelative("!d").getPitch());		
	}

	@Test
	public void relativeAdjustedPitch2() {
		Note.Spelling base = MasciiUtil.parsePitch("d");
		assertEquals(base.getPitch(), base.parseRelative("C@").parseRelative("c").parseRelative("d").getPitch());		
	}

	@Test
	public void relativeAdjustedPitch4() {
		Note.Spelling base = MasciiUtil.parsePitch("e");
		assertEquals(base.getPitch(), base.parseRelative("E@").parseRelative("e").getPitch());		
	}

	@Test
	public void relativeAdjustedPitch5() {
		Note.Spelling base = MasciiUtil.parsePitch("d@");
		assertEquals(base.getPitch(), base.parseRelative("d@").getPitch());		
	}

	@Test
	public void relativeAdjustedPitch6() {
		Note.Spelling base = MasciiUtil.parsePitch("d@");
		assertEquals(12, base.getPitch() - base.parseRelative("D@").getPitch());		
	}

	@Test
	public void relativeAdjustedPitch7() {
		Note.Spelling base = MasciiUtil.parsePitch("d@");
		assertEquals(24, base.getPitch() - base.parseRelative("!D@").getPitch());		
	}

	@Test
	public void relativeAdjustedPitch8() {
		Note.Spelling base = MasciiUtil.parsePitch("d@");
		assertEquals(-12, base.getPitch() - base.parseRelative("!d@").getPitch());		
	}

	@Test
	public void relativeAdjustedPitch3() {
		Note.Spelling base = MasciiUtil.parsePitch("f##");
		assertEquals(1, base.getPitch() - base.parseRelative("g@").getPitch());		
	}
	
	@Test
	public void adjustedPitch() {
		assertEquals(1, MasciiUtil.parsePitch("f##").getPitch() - MasciiUtil.parsePitch("g@").getPitch());		
	}

	//this appears to be special case when it touches c which is a boundary
	@Test
	public void relativePitch3() {
		Note.Spelling base = MasciiUtil.parsePitch("4d");
		assertEquals(2, base.getPitch() - base.parseRelative("C").getPitch());		
	}

	@Test
	public void relativePitch9() {
		Note.Spelling base = MasciiUtil.parsePitch("c");
		assertEquals(-2, base.getPitch() - base.parseRelative("d").getPitch());		
	}

	@Test
	public void relativePitch6() {
		Note.Spelling base = MasciiUtil.parsePitch("C");
		assertEquals(-2, base.getPitch() - base.parseRelative("d").getPitch());		
	}

	@Test
	public void relativePitch8() {
		Note.Spelling base = MasciiUtil.parsePitch("d");
		assertEquals(2, base.getPitch() - base.parseRelative("C").getPitch());		
	}

	@Test
	public void relativePitch10() {
		Note.Spelling base = MasciiUtil.parsePitch("B");
		assertEquals(-3, base.getPitch() - base.parseRelative("d").getPitch());		
	}

	@Test
	public void relativePitch7() {
		Note.Spelling base = MasciiUtil.parsePitch("d");
		assertEquals(3, base.getPitch() - base.parseRelative("B").getPitch());		
	}

	@Test
	public void relativePitch4() {
		Note.Spelling base = MasciiUtil.parsePitch("e");
		assertEquals(2, base.getPitch() - base.parseRelative("D").getPitch());		
	}

	@Test
	public void relativePitch5() {
		Note.Spelling base = MasciiUtil.parsePitch("c");
		assertEquals(1, base.getPitch() - base.parseRelative("B").getPitch());		
	}
	
	@Test
	public void relativePitch() {
		Note.Spelling base = MasciiUtil.parsePitch("4c");
		assertEquals(4, base.octaveRangeBasis);
		int basepitch = 48;
		assertEquals(basepitch, base.getPitch());
		
		base = MasciiUtil.parsePitch("B", base);
		basepitch -= 1;
		assertEquals(3, base.octaveRangeBasis);
		assertEquals(basepitch, base.getPitch());
		
		base = MasciiUtil.parsePitch("G", base);
		basepitch -= 4;
		assertEquals(3, base.octaveRangeBasis);
		assertEquals(basepitch, base.getPitch());
		
		base = MasciiUtil.parsePitch("G", base);
		assertEquals(3, base.octaveRangeBasis);
		assertEquals(basepitch, base.getPitch());
		
		base = MasciiUtil.parsePitch("c", base);
		basepitch += 5;
		assertEquals(4, base.octaveRangeBasis);
		assertEquals(basepitch, base.getPitch());
		
		base = MasciiUtil.parsePitch("c", base);
		assertEquals(4, base.octaveRangeBasis);
		assertEquals(basepitch, base.getPitch());
		
		base = MasciiUtil.parsePitch("!c", base);
		basepitch += 12;
		assertEquals(basepitch, base.getPitch());

		base = MasciiUtil.parsePitch("!!B", base);
		basepitch -= 25;
		assertEquals(basepitch, base.getPitch());
	
	}	

	@Test
	public void pitchMath() {
		assertEquals(3, MasciiUtil.diatonicInterval('a', 'c'));
		assertEquals(6, MasciiUtil.diatonicInterval('c', 'a'));
		assertEquals(1, MasciiUtil.diatonicInterval('a', 'a'));
		assertEquals(7, MasciiUtil.diatonicInterval('c', 'b'));
		assertEquals(2, MasciiUtil.diatonicInterval('b', 'c'));
		assertEquals(1, MasciiUtil.diatonicInterval('b', 'b'));
		assertEquals(2, MasciiUtil.diatonicInterval('c', 'd'));
		assertEquals(7, MasciiUtil.diatonicInterval('d', 'c'));
		assertEquals(1, MasciiUtil.diatonicInterval('c', 'c'));
		
		assertEquals(true, MasciiUtil.crossesOctaveBoundary('b', 'c', PitchDirection.UP));
		assertEquals(false, MasciiUtil.crossesOctaveBoundary('b', 'c', PitchDirection.DOWN));
		assertEquals(true, MasciiUtil.crossesOctaveBoundary('c', 'b', PitchDirection.DOWN));
		assertEquals(false, MasciiUtil.crossesOctaveBoundary('c', 'b', PitchDirection.UP));
		assertEquals(false, MasciiUtil.crossesOctaveBoundary('c', 'd', PitchDirection.UP));
		assertEquals(true, MasciiUtil.crossesOctaveBoundary('c', 'd', PitchDirection.DOWN));
		assertEquals(true, MasciiUtil.crossesOctaveBoundary('d', 'c', PitchDirection.UP));
		assertEquals(false, MasciiUtil.crossesOctaveBoundary('d', 'c', PitchDirection.DOWN));
	}
	
}