package com.kastkode.mascii2.musicelements;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.kastkode.mascii2.Mascii2ApplicationTests;
import com.kastkode.mascii2.musicelements.MetaInfo.MetaInfoElement;
import com.kastkode.mascii2.util.MasciiUtil;

public class LyricTests {

	@Test
	public void lyricParse() {
		String minuet = "d c f g c\n"
				+ "\"you were the lucky one\"";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(1, parts.size());
		Part p = parts.get(0);
		assertTrue(p.getMetaInfoChanges().size() > 0);
		assertEquals(p.getMetaInfoChanges().get(0).getClass(), MetaInfo.Lyric.class);
		assertEquals("you", p.getMetaInfoChanges().get(0).getRawValue());
		assertTrue(p.getMetaInfoChanges().get(1).getStartingAt() > 0);
	}
	
	@Test
	public void shebang() {
		String minuet = "{tempo: 95} \n \n \n"
				+ "d d[G a] [b c] \n "
				+ "\" you havent \"";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(1, parts.size());
		List<Note> notes = parts.get(0).getNoteStream();
		assertEquals(notes.get(0).getDuration(), notes.get(1).getDuration());

	}

	@Test
	public void lyricMultipleParts() {
		String minuet = "d\n"
				+ "\"you were\" \n"
				+ "c\n"
				+ "\"I was\" \n"				
				;
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		Part p = parts.get(0);
		assertTrue(p.getMetaInfoChanges().size() > 0);
		assertEquals(p.getMetaInfoChanges().get(0).getClass(), MetaInfo.Lyric.class);
		assertEquals("you-were", p.getMetaInfoChanges().get(0).getRawValue());
		//assertTrue(p.getMetaInfoChanges().get(1).getStartingAt() > 0);
		
		Part p1 = parts.get(1);
		assertTrue(p1.getMetaInfoChanges().size() > 0);
		assertEquals(p1.getMetaInfoChanges().get(0).getClass(), MetaInfo.Lyric.class);
		assertEquals("I-was", p1.getMetaInfoChanges().get(0).getRawValue());
		//assertTrue(p1.getMetaInfoChanges().get(1).getStartingAt() > 0);
		
	}

	@Test
	public void lyricMultipleVerses() {
		String minuet = "d a\n"
				+ "\"you were\" \n"
				+ "\"my only\" \n"
				;
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(1, parts.size());
		Part p = parts.get(0);
		List<MetaInfoElement<?>> metas = p.getMetaInfoChanges();
		assertEquals(2, metas.size());
		assertTrue(metas.get(1).getStartingAt() > metas.get(0).getStartingAt());
		assertEquals("were\nonly", metas.get(1).getRawValue().toString());
		assertTrue(metas.get(0).getStartingAt() >= 0);
	}
	
	@Test
	public void lyricConversion() {
		List<Note> notes = new ArrayList<>();
		notes.add(new Note(0, 'c'));
		notes.add(new Note(50, 'd'));
		
		String[] lyrics = new String[] {"you", "were"};		
		List<MetaInfo.Lyric> answer = MasciiUtil.asLyrics(notes, lyrics, "");
		
		assertEquals(2, answer.size());
	}

	@Test
	public void lyricConversionUneven() {
		List<Note> notes = new ArrayList<>();
		notes.add(new Note(0, 'c'));
		notes.add(new Note(50, 'd'));
		
		String[] lyrics = new String[] {"you", "were", "my"};		
		List<MetaInfo.Lyric> answer = MasciiUtil.asLyrics(notes, lyrics, "");
		
		assertEquals(2, answer.size());
		assertEquals("you", answer.get(0).getRawValue());
		assertEquals("were-my", answer.get(1).getRawValue());
	}

	@Test
	public void lyricConversionWithGaps() {
		List<Note> notes = new ArrayList<>();
		notes.add(new Note(0, 'c'));
		notes.add(new Note(50, 'd'));
		notes.add(new Note(100, 'a'));
		
		String[] lyrics = new String[] {"you", "%", "my"};		
		List<MetaInfo.Lyric> answer = MasciiUtil.asLyrics(notes, lyrics, "");
		
		assertEquals(3, answer.size());
		assertEquals("you", answer.get(0).getRawValue());
		assertEquals(null, answer.get(1));
		assertEquals("my", answer.get(2).getRawValue());
		assertEquals(100, answer.get(2).getStartingAt());
	}
	
	@Test
	public void lyricMatchWithTuneRests() {
		String minuet = 
				" %   %   %   [c  d]\n" + 
				"\" well I \"\n" + 
				" %"
				;
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		Part p = parts.get(0);
		List<MetaInfoElement<?>> metas = p.getMetaInfoChanges();
		assertEquals(2, metas.size());
		assertTrue(metas.get(0).getStartingAt() > 0);
		assertEquals(metas.get(0).getStartingAt(), p.getNoteStream().get(0).getStart());
		assertEquals(metas.get(1).getStartingAt(), p.getNoteStream().get(1).getStart());
	}

	@Test
	public void lyricWithBarLines() {
		String minuet = 
				" %  c | d \n" + 
				"\" well | I \"\n" + 
				" %"
				;
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		Part p = parts.get(0);
		List<MetaInfoElement<?>> metas = p.getMetaInfoChanges();
		assertEquals(2, metas.size());
		assertTrue(metas.get(0).getStartingAt() > 0);
		assertEquals(metas.get(0).getStartingAt(), p.getNoteStream().get(0).getStart());
		assertEquals(metas.get(1).getStartingAt(), p.getNoteStream().get(1).getStart());
	}

	@Test
	public void optionalTrailingQuote() {
		String minuet = 
				" %  c   | d \n" + 
				"\" well | I \n" + 
				" %"
				;
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		Part p = parts.get(0);
		List<MetaInfoElement<?>> metas = p.getMetaInfoChanges();
		assertEquals(2, metas.size());
		assertTrue(metas.get(0).getStartingAt() > 0);
		assertEquals(metas.get(0).getStartingAt(), p.getNoteStream().get(0).getStart());
		assertEquals(metas.get(1).getStartingAt(), p.getNoteStream().get(1).getStart());
	}

	@Test
	public void lyricsLast() {
		String minuet = 
				" %  c   | d \n" + 
				"\" well | I \n \n\n "  
				;
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(1, parts.size());
		Part p = parts.get(0);
		List<MetaInfoElement<?>> metas = p.getMetaInfoChanges();
		assertEquals(2, metas.size());
		assertTrue(metas.get(0).getStartingAt() > 0);
		assertEquals(metas.get(0).getStartingAt(), p.getNoteStream().get(0).getStart());
		assertEquals(metas.get(1).getStartingAt(), p.getNoteStream().get(1).getStart());
	}
	
}