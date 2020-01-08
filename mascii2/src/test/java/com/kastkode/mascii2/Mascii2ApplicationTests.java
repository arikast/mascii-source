package com.kastkode.mascii2;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;

import com.kastkode.mascii2.musicelements.Part;

//@SpringBootTest
public class Mascii2ApplicationTests {
	public static ParseResult parse(String minuet) {
		ParseResult result = new SourceParser().generateFromString(minuet);
		for(String msg:result.getErrors().getMsgs()) {
			System.err.println(msg);
		}
		assertEquals(true, result.getErrors().getMsgs().isEmpty());
		return result;
	}

	public static void parseShouldFail(String minuet) {
		ParseResult result = new SourceParser().generateFromString(minuet);
		assertEquals(false, result.getErrors().getMsgs().isEmpty());
	}


	@Test
	public void parseMinuet() {
		String minuet = "[3Gbd_ _* a b G b][5d d(G a) (b c)] \n\n "
				+ "(d G G)(B__ B)(d d d) ";
		parse(minuet);
	}

	@Test
	public void parseMinuetMultipart() {
		String minuet = " 3Gbd_ _* a b G b | 5d d(G a) (b c) \n\n "
				+ "(d G G) | (B__ B)(d d d) ";
		parse(minuet);
	}

	@Test
	public void changeFileExt() {
		String f = Mascii2Application.basename("/somewhere/somefile.mascii");
		assertEquals("somefile.mascii", f);
		assertEquals("somefile.mid", Mascii2Application.changeFileExtension(f, "mid"));
	}
	
	@Test
	public void assignChannels() {
		String minuet = " G \n 5d \n c \n ";
		ParseResult result = parse(minuet);
		List<Part> parts = result.getParts();
		MidiGenerator.assignChannels(parts);
		int size = parts.size() -1;
		int partIndex = 0;
		assertEquals(parts.get(partIndex).getChannel(), partIndex++);
		assertEquals(parts.get(partIndex).getChannel(), partIndex++);
		assertEquals(parts.get(partIndex).getChannel(), partIndex++);
	}

	@Test
	public void assignChannelsWithReservations() {
		String minuet = " G \n d \n c \n ";
		ParseResult result = parse(minuet);
		List<Part> parts = result.getParts();
		parts.get(1).setChannel(5);
		MidiGenerator.assignChannels(parts);
		assertEquals(0, parts.get(0).getChannel());
		assertEquals(5, parts.get(1).getChannel());
		assertEquals(1, parts.get(2).getChannel());
	}

	@Test
	public void allowExplicitDrumChannel() {
		String minuet = " G \n d \n c \n c \n e \n f \n F \n C \n G \n A \n b \n B \n ";
		ParseResult result = parse(minuet);
		List<Part> parts = result.getParts();
		parts.get(3).setChannel(MidiGenerator.DRUM_TRACK_CHANNEL);
		MidiGenerator.assignChannels(parts);
		for(Part p:parts) {
			assertTrue(p.getChannel() >= 0);
		}
		
		assertTrue(parts.stream().filter(p -> p.getChannel() == 0).findFirst().isPresent());
		assertTrue(parts.stream().filter(p -> p.getChannel() == MidiGenerator.DRUM_TRACK_CHANNEL).findFirst().isPresent());
		assertEquals(1, parts.stream().filter(p -> p.getChannel() == MidiGenerator.DRUM_TRACK_CHANNEL).count());
	}

	@Test
	public void avoidDrumChannel() {
		String minuet = " G \n d \n c \n c \n e \n f \n F \n C \n G \n A \n b \n B \n ";
		ParseResult result = parse(minuet);
		List<Part> parts = result.getParts();
		MidiGenerator.assignChannels(parts);
		for(Part p:parts) {
			assertTrue(p.getChannel() != MidiGenerator.DRUM_TRACK_CHANNEL);
			assertTrue(p.getChannel() >= 0);
		}
		
		assertTrue(parts.stream().filter(p -> p.getChannel() == 0).findFirst().isPresent());
	}

	@Test
	public void assignChannelsWithAllReservations() {
		String minuet = "{channel: 1, 5, 2 }" 
		+ " G \n d \n c \n ";
		ParseResult result = parse(minuet);
		List<Part> parts = result.getParts();
		assertEquals(3, parts.size());
		MidiGenerator.assignChannels(parts);
		assertEquals(0, parts.get(0).getChannel());
		assertEquals(4, parts.get(1).getChannel()); //MIDI channel 0-based
		assertEquals(1, parts.get(2).getChannel());
	}

	@Test
	public void assignChannelsWithSomeReservationsAndSomeBlanks() {
		String minuet = "{channel: , 5 , }" 
		+ " G \n d \n c \n ";
		ParseResult result = parse(minuet);
		List<Part> parts = result.getParts();
		assertEquals(3, parts.size());
		MidiGenerator.assignChannels(parts);
		assertEquals(0, parts.get(0).getChannel());
		assertEquals(4, parts.get(1).getChannel()); //MIDI channel 0-based
		assertEquals(1, parts.get(2).getChannel());
	}
	
}
