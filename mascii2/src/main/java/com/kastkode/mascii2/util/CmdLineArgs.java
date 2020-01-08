package com.kastkode.mascii2.util;

import java.util.ArrayList;
import java.util.List;

import com.beust.jcommander.Parameter;

public class CmdLineArgs {
	
	@Parameter(description = "Files or dirs")
	private List<String> filesOrDirs = new ArrayList<>();

	@Parameter(names = {"-c", "--colocate"}, description = "Colocate generated files with source file")
	private boolean colocate = false;

	@Parameter(names = {"-r", "--recurse"}, description = "Recurse through subdirs in search of mascii files to process")
	private boolean recurse = false;

	@Parameter(names={"-e", "--extension"})
    String extension = "mascii";	
	
	public List<String> getFilesOrDirs() {
		return filesOrDirs;
	}

	public void setFilesOrDirs(List<String> filesOrDirs) {
		this.filesOrDirs = filesOrDirs;
	}

	public boolean isColocate() {
		return colocate;
	}

	public void setColocate(boolean colocate) {
		this.colocate = colocate;
	}

	public boolean isRecurse() {
		return recurse;
	}

	public void setRecurse(boolean recurse) {
		this.recurse = recurse;
	}

	public String getExtension() {
		return extension;
	}

	public void setExtension(String extension) {
		this.extension = extension;
	}
	
	
}
