package com.kastkode.mascii2.musicelements;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.kastkode.mascii2.Mascii2ApplicationTests;
import com.kastkode.mascii2.MasciiSyntaxEventListener;

public class TimingTests {

	@Test
	public void timing() {
		String minuet = "{tempo: 95} \n \n \n"
				+ "d d[G a] [b c] \n\n "
				+ "[B__ B][d d d] ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(1, parts.size());
		List<Note> notes = parts.get(0).getNoteStream();
		assertEquals(notes.get(0).getDuration(), notes.get(1).getDuration());
		assertEquals(notes.get(1).getDuration(), notes.get(2).getDuration() + notes.get(3).getDuration());

		// test & doubler
		assertEquals(notes.get(6).getDuration() + notes.get(7).getDuration(), 
				notes.get(8).getDuration() + notes.get(9).getDuration() + notes.get(10).getDuration()
				);
		
	}

	@Test
	public void divvyNormalTime() {
		TimeSlot ts = TimeSlot.init(100, 24);
		List<TimeSlot> subs = ts.divvy(makeList(false, false));
		assertEquals(2, subs.size());
		assertEquals(subs.get(0).getDuration(), subs.get(1).getDuration());
		assertEquals(100, subs.get(0).getOffset());
		assertEquals(112, subs.get(1).getOffset());
		
	}

	@Test
	public void divvyUnevenTime() {
		TimeSlot ts = TimeSlot.init(100, 24);
		List<TimeSlot> subs = ts.divvy(makeList(true, false));
		assertEquals(2, subs.size());
		assertEquals(16, subs.get(0).getDuration());
		assertEquals(8, subs.get(1).getDuration());
		assertEquals(100, subs.get(0).getOffset());
		assertEquals(116, subs.get(1).getOffset());

		
//		TimeSlot ts = TimeSlot.init(100, 24);
//		List<TimeSlot> subs = ts.divvy(makeList(false, false));
//		assertEquals(2, subs.size());
//		assertEquals(subs.get(0).duration, subs.get(1).duration);
		
	}

	//for some reasons Arrays.asList seems to have a casting issue atm
	private List<Boolean> makeList(boolean... vals) {
		ArrayList<Boolean> answer = new ArrayList<>(vals.length);
		for(int i=0; i<vals.length; i++) {
			answer.add(vals[i]);
		}
		return answer;
	}
	
	@Test
	public void partsTiming() {
		String minuet = "{tempo: 95}"
				+ "G__ a \n d [G a] [b c] ";

		MasciiSyntaxEventListener listener = Mascii2ApplicationTests.parse(minuet).getSyntaxListener();
			
		assertEquals(1, listener.getParts().get(0).barCount);
		assertEquals(2, listener.partCount());
		
	}
	
	@Test
	public void partsTiming4() {
		String minuet = "G__ G \n g g g";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		List<Note> p0 = parts.get(0).getNoteStream();
		List<Note> p1 = parts.get(1).getNoteStream();
		assertEquals(p0.get(0).getStart(), p1.get(0).getStart());		
	}
	
	@Test
	public void partsTiming5() {
		String minuet = "G [G G] \n g g";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		List<Note> p0 = parts.get(0).getNoteStream();
		List<Note> p1 = parts.get(1).getNoteStream();
		assertEquals(p0.get(0).getStart(), p1.get(0).getStart());		
		assertEquals(p0.get(1).getStart(), p1.get(1).getStart());		
		assertEquals(p0.get(2).getEnd(), p1.get(1).getEnd());
		assertTrue(p0.get(2).getStart() > p1.get(1).getStart());
	}
	

	@Test
	public void partsTiming3() {
		String minuet = "G | A \n"
				+ "g | a";
		MasciiSyntaxEventListener listener = Mascii2ApplicationTests.parse(minuet).getSyntaxListener();
			
		assertEquals(2, listener.getParts().get(0).barCount);
		assertEquals(2, listener.partCount());
		
	}

	@Test
	public void partsTiming2() {
		String minuet = "{tempo: 95}"
				+ "G__ a \n d [G a] [b c] ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		List<Note> p0 = parts.get(0).getNoteStream();
		List<Note> p1 = parts.get(1).getNoteStream();
		assertEquals(p0.get(0).getStart(), p1.get(0).getStart());
		assertEquals(p0.get(1).getStart(), p1.get(3).getStart());		
	}

	@Test
	public void partsTiming6() {
		String minuet = "{tempo: 95}"
				+ "G a \n d a [b c] \n\n b \n c";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		List<Note> p0 = parts.get(0).getNoteStream();
		List<Note> p1 = parts.get(1).getNoteStream();
		assertEquals(p0.get(2).getStart(), p1.get(4).getStart());
	}

	@Test
	public void restsTiming() {
		String minuet = "{tempo: 95}"
				+ "G__ a \n d [% a] [b c] ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		List<Note> p0 = parts.get(0).getNoteStream();
		List<Note> p1 = parts.get(1).getNoteStream();
		assertEquals(p0.get(0).getStart(), p1.get(0).getStart());
		assertEquals(p0.get(1).getStart(), p1.get(2).getStart());		
	}

	@Test
	public void explicitRests() {
		String minuet = " % \n d a \n % \n\n" +
						"a \n   %  \n b \n\n" +
						"d \n e   \n f";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(3, parts.size());
		List<Note> p0 = parts.get(0).getNoteStream();
		List<Note> p1 = parts.get(1).getNoteStream();
		List<Note> p2 = parts.get(2).getNoteStream();
		
		assertEquals(2, p0.size());
		assertEquals(3, p1.size());
		assertEquals(2, p2.size());
		assertEquals(p0.get(1).getStart(), p1.get(2).getStart());
		assertEquals(p0.get(1).getStart(), p2.get(1).getStart());		
	}

	@Test
	public void defaultPart() {
		String minuet = " \n \n d a \n  \n ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(1, parts.size());
	}
	
	@Test
	public void dottedTiming() {
		String minuet = "{tempo: 95}"
				+ "G. F# a \n d [% a] [b c] ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		List<Note> p0 = parts.get(0).getNoteStream();
		List<Note> p1 = parts.get(1).getNoteStream();
		assertEquals(p0.get(0).getStart(), p1.get(0).getStart());
		assertEquals(p0.get(1).getStart(), p1.get(1).getStart());
		assertEquals(p0.get(1).getDuration(), p1.get(1).getDuration());
		
	}

	@Test
	public void inverseDottedTiming() {
		String minuet = "{tempo: 95}"
				+ ".G F# a \n [d a_] _a [b c] ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		List<Note> p0 = parts.get(0).getNoteStream();
		List<Note> p1 = parts.get(1).getNoteStream();
		assertEquals(p0.get(0).getStart(), p1.get(0).getStart());
		assertEquals(p0.get(1).getStart(), p1.get(1).getStart());
		assertEquals(p0.get(1).getDuration(), p1.get(1).getDuration());
		
	}
	
	
	@Test
	public void timeMeta() {
		MetaInfo.TimeSig m = new MetaInfo.TimeSig().setRawValue(" 9/12 ");
		assertEquals(9, m.getTimeNumerator());
		assertEquals(12, m.getTimeDenominator());
	}	
}