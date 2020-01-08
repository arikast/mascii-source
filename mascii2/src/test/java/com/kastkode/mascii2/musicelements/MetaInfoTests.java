package com.kastkode.mascii2.musicelements;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;

import com.kastkode.mascii2.Mascii2ApplicationTests;

public class MetaInfoTests {

	@Test
	public void patchAssignment() {
		String minuet = "{patch: 5,7,9}\n\n"
				+ "g \n c \n a";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(3, parts.size());
		assertEquals(5 + "", parts.get(0).getMetaInfoChanges().get(0).rawValue);
		assertEquals(7 + "", parts.get(1).getMetaInfoChanges().get(0).rawValue);
		assertEquals(9 + "", parts.get(2).getMetaInfoChanges().get(0).rawValue);
	}	

	@Test
	public void commentsNBlankLines() {
		String minuet = "{\n -- comment here \n \n patch: 5,7,9}\n\n"
				+ " ------ another comment here ------ \n"
				+ "g \n c \n a";
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
		assertEquals(3, parts.size());
		assertEquals(5 + "", parts.get(0).getMetaInfoChanges().get(0).rawValue);
		assertEquals(7 + "", parts.get(1).getMetaInfoChanges().get(0).rawValue);
		assertEquals(9 + "", parts.get(2).getMetaInfoChanges().get(0).rawValue);
	}	
	
	@Test
	public void patchCountDoesntMatchPartCount() {

		String minuet = "{\n" + 
				"    tempo: 90\n" + 
				"    time:  4/4\n" + 
				"    key:   0\n" + 
				"    patch: 103\n" + 
				"}\n" + 
				"g \n" + 
				"C \n" + 
				"";
		
		List<Part> parts = Mascii2ApplicationTests.parse(minuet).getParts();
	}
}