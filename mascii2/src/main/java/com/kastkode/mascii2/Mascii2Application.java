package com.kastkode.mascii2;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.sound.midi.InvalidMidiDataException;

import com.beust.jcommander.JCommander;

//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kastkode.mascii2.musicelements.Part;
import com.kastkode.mascii2.util.CmdLineArgs;

//@SpringBootApplication
public class Mascii2Application {
	CmdLineArgs masciiArgs;
	
	public static void main(String[] args) throws IOException, InvalidMidiDataException {
		//SpringApplication.run(Mascii2Application.class, args);

		Mascii2Application app = new Mascii2Application();
		app.masciiArgs = new CmdLineArgs();
        JCommander.newBuilder()
            .addObject(app.masciiArgs)
            .build()
            .parse(args);
        
        app.processMasciiFiles(asFiles(app.masciiArgs.getFilesOrDirs()));
        
		System.out.println("done");
	}
	
	public static List<File> asFiles(List<String> filenames) {
		return filenames.stream().map(s -> new File(s)).collect(Collectors.toList());
	}

	public void processMasciiFiles(List<File> files) throws IOException, InvalidMidiDataException {
		if(files == null || files.isEmpty()) return;
		
		String extension = "." + masciiArgs.getExtension();
		for(File file:files) {
	        if(file.isDirectory()) {
	        	if(masciiArgs.isRecurse()) {
	        		processMasciiFiles(
	        			Arrays.asList(file.listFiles())
	        		);
	        	}
	        } else {
	        	if(file.getName().toLowerCase().endsWith(extension)) {
		        	processMasciiFile(file);	        		
	        	}
	        }
		}		
	}

	public void processMasciiFile(File sourceFile) throws IOException, InvalidMidiDataException {
		System.out.println("generating from file " +  sourceFile.getAbsolutePath());
		SourceParser parser = new SourceParser();
		ParseResult result = parser.generateFromFile(sourceFile);
		if(! wasSuccess(result)) return;

		MidiGenerator gen = new MidiGenerator();
		String outputPath = changeFileExtension(basename(sourceFile.getName()), "mid");
		if(masciiArgs.isColocate()) {
			outputPath = sourceFile.getParent() + File.separator + outputPath;
		} 
		String msg = gen.save(result, outputPath);		
		System.out.println("saved to " + msg);							
	}
		
	private static boolean wasSuccess(ParseResult result) {
		for(String s:result.getErrors().getMsgs() ) {
			System.err.println(s);
		};
		
		return result.getErrors().getMsgs().isEmpty();
	}
	
	public static String basename(String s) {
		int indx = s.lastIndexOf(File.separator);
		if(indx <0) return s;
		return s.substring(indx + 1, s.length());
	}
	
	public static String changeFileExtension(String s, String ext) {
		int indx = s.lastIndexOf(".");
		if(indx <0) return s + "." + ext;
		return s.substring(0, indx) + "." + ext;		
	}
}
