package com.kastkode.mascii2.musicelements;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.antlr.v4.runtime.tree.ParseTreeWalker;
import org.junit.jupiter.api.Test;

import com.kastkode.mascii2.Mascii2Application;
import com.kastkode.mascii2.MasciiSyntaxEventListener;
import com.kastkode.mascii2.ParseResult;
import com.kastkode.mascii2.SourceParser;
import com.kastkode.mascii2.musicelements.KeySignature.AdHoc;
import com.kastkode.mascii2.util.MasciiUtil;
import com.kastkode.mascii2.Mascii2ApplicationTests;

public class MeasureAndBarTests {

	@Test
	public void measureCount() {
		String minuet = "a b | c d \n a f | \n c c |";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(3, parts.size());
		assertEquals(2, parts.get(0).getBarCount());
		assertEquals(2, parts.get(1).getBarCount());
	}	

	@Test
	public void unevenMeasureCount() {
		String minuet = "a b | c d \n a f  \n c c ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(3, parts.size());
		assertEquals(2, parts.get(0).getBarCount());
		assertEquals(2, parts.get(1).getBarCount());
	}	

	@Test
	public void leadingEmptyMeasure() {
		String minuet = " | c d \n a b | c c ";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(2, parts.size());
		assertEquals(2, parts.get(0).getBarCount());
		assertEquals(2, parts.get(1).getBarCount());
		assertEquals(
				parts.get(0).getNoteStream().get(0).getStart(),
				parts.get(1).getNoteStream().get(2).getStart()
				);
	}	

}