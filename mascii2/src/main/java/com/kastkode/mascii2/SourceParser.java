package com.kastkode.mascii2;


import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.ParseTreeWalker;

import com.kastkode.mascii2.antlrgenerated.MasciiLexer;
import com.kastkode.mascii2.antlrgenerated.MasciiParser;

public class SourceParser {
	public ParseResult generateFromString(String mascii) {
		MasciiParseErrorListener errListener = new MasciiParseErrorListener();
		ParseResult answer = generate(parseFromString(mascii, errListener));
		answer.setErrors(errListener);
		return answer;
	}
	
//	public ParseResult generateFromFilename(String mascii) throws IOException {
//		MasciiParseErrorListener errListener = new MasciiParseErrorListener();
//		ParseResult answer = generate(parseFromFilename(mascii, errListener));
//		answer.setErrors(errListener);
//		return answer;
//	}

	public ParseResult generateFromFile(File mascii) throws IOException {
		MasciiParseErrorListener errListener = new MasciiParseErrorListener();
		ParseResult answer = generate(parseFromFile(mascii, errListener));
		answer.setErrors(errListener);
		return answer;
	}
	
	private ParseResult generate(ParseTree tree) {
		ParseTreeWalker walker = new ParseTreeWalker();
		MasciiSyntaxEventListener listener = new MasciiSyntaxEventListener();		
		walker.walk(listener, tree);
		return new ParseResult(listener);
	}
	
	public ParseTree parseFromString(String masciiText, MasciiParseErrorListener errListener) {
		return parseFromStream( CharStreams.fromString(masciiText), errListener);
	}
	
	public ParseTree parseFromFilename(String filename, MasciiParseErrorListener errListener) throws IOException {
		return parseFromStream( CharStreams.fromFileName(filename), errListener);
	}

	public ParseTree parseFromFile(File file, MasciiParseErrorListener errListener) throws IOException {
		try(FileInputStream fis = new FileInputStream(file)) {
			return parseFromStream( CharStreams.fromStream(fis), errListener);			
		}
	}
	
	private ParseTree parseFromStream(CharStream stream, MasciiParseErrorListener errListener) {
		MasciiLexer lexer = new MasciiLexer(stream);
		lexer.addErrorListener(errListener);
		CommonTokenStream tokens = new CommonTokenStream(lexer);
		MasciiParser parser = new MasciiParser(tokens);
		parser.removeErrorListeners();
		parser.addErrorListener(errListener);
		ParseTree tree = parser.music();
		return tree;		
	}
}
