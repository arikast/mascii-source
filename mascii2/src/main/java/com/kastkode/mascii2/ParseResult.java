package com.kastkode.mascii2;

import java.util.List;

import com.kastkode.mascii2.musicelements.MetaInfo;
import com.kastkode.mascii2.musicelements.Part;

public class ParseResult {
	String msg;
	
	List<MetaInfo.MetaInfoElement<?>> globalMetas;
	List<Part> parts;
	MasciiParseErrorListener errors = new MasciiParseErrorListener();
	MasciiSyntaxEventListener syntaxListener;

//	public ParseResult(List<? extends MetaInfo.MetaInfoElement> metas, List<Part> parts) {
//		this("", metas, parts);
//	};
	
	public ParseResult(MasciiSyntaxEventListener listener) {
		this.syntaxListener = listener;
	};
	
	
	
	public MasciiSyntaxEventListener getSyntaxListener() {
		return syntaxListener;
	}

	public void setSyntaxListener(MasciiSyntaxEventListener syntaxListener) {
		this.syntaxListener = syntaxListener;
	}

	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public List<MetaInfo.MetaInfoElement<?>> getGlobalMetas() {
		return syntaxListener.getGlobalMetaInfoChanges();
	}
//	public void setGlobalMetas(List<? extends MetaInfo.MetaInfoElement> metas) {
//		this.globalMetas = metas;
//	}
	public List<Part> getParts() {
		return syntaxListener.getParts();
	}
//	public void setParts(List<Part> parts) {
//		this.parts = parts;
//	}

	public MasciiParseErrorListener getErrors() {
		return errors;
	}

	public void setErrors(MasciiParseErrorListener errors) {
		this.errors = errors;
	}
	
	
}
