package com.kastkode.mascii2.musicelements;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Stack;

import com.kastkode.mascii2.MasciiSyntaxEventListener;
import com.kastkode.mascii2.musicelements.MetaInfo.MetaInfoElement;
import com.kastkode.mascii2.util.MasciiUtil;

public class Part {
	int barCount = 0;
	int channel = -1;
	int patch;
	
	//measures are organized into blocks, which are a few measures on the same horizontal row
	//this index refers to the index of the starting measure of the current block
	int currentMeasureBlockIndex = 0; 
	
	KeySignature.AdHoc currentKey = KeySignature.C.alterationsMap();

	List<Note> noteStream = new LinkedList<>();
	List<MetaInfoElement<?>> metaInfoChanges = new LinkedList<>();

	
	Stack<TimeSlot> timingStack = new Stack<>();
	Stack<Note.Spelling> pitchBase = new Stack<>();		
	Map<Integer, Note> openNotes = new HashMap<>(); //notes that have started but not yet finished

	
	
	public int getCurrentMeasureBlockIndex() {
		return currentMeasureBlockIndex;
	}

	public void setCurrentMeasureBlockIndex(int currentMeasureBlockIndex) {
		this.currentMeasureBlockIndex = currentMeasureBlockIndex;
	}
	
	//refers to the next element, ie it wont exist until new notes are added in this measure block
	public void resetCurrentMeasureBlockIndex() {
		this.currentMeasureBlockIndex = noteStream.size();
	}
	
	public List<Note> getNotesInThisMeasureBlock() {
		if(noteStream.size() == 0 || currentMeasureBlockIndex >= noteStream.size()) noteStream.subList(0, 0);
		
		return noteStream.subList(currentMeasureBlockIndex, noteStream.size());
	}

	public int getBarCount() {
		return barCount;
	}

	public void setBarCount(int barCount) {
		this.barCount = barCount;
	}
	
	public void bumpBarCount() {
		barCount++;
	}

	public List<MetaInfoElement<?>> getMetaInfoChanges() {
		return metaInfoChanges;
	}

	public void setMetaInfoChanges(List<MetaInfoElement<?>> metaInfoChanges) {
		this.metaInfoChanges = metaInfoChanges;
	}

	public int getChannel() {
		return channel;
	}

	public void setChannel(int channel) {
		this.channel = channel;
	}

	public int getPatch() {
		return patch;
	}

	public void setPatch(int patch) {
		this.patch = patch;
	}

	public List<Note> getNoteStream() {
		return noteStream;
	}

	public void startAndFinishNoteHere(String pitch) {
		Note note = new Note(
				timingStack.peek().getOffset(), 
				timingStack.peek().getDuration(), 
				resolvePitch(pitch)
		);
		addNote(note);
	}

	public void startNoteHere(String pitch) {
		Note note = new Note(
				timingStack.peek().getOffset(), 
				resolvePitch(pitch)
		);

		//TODO: what if note already exists in there?  then terminate that one and start a new one
		openNotes.put(note.getPitch(), note);
		addNote(note);
	}

	private void addNote(Note note) {
		changePitchBase(note.spelling);
		currentKey.setAccidental(note.spelling.degree, note.spelling.accidentals);
		noteStream.add(note);			
	}
	
	public void changePitchBase(Note.Spelling sp) {
		if(! pitchBase.empty()) 
			pitchBase.pop();
		pitchBase.push(sp);		
	}
	
	public void finishNoteHere(String pitch) {
		Note.Spelling finish = resolvePitch(pitch);
		
		Note start = openNotes.remove(finish.getPitch());
		if(start == null) {
			System.err.println(String.format("note end %s with pitch %s had no matching start", finish.toString(), finish.getPitch()));
		} else {
			start.setEnd(timingStack.peek().endTime());
		}
	}

	public void finishAllOpenNotesHere() {
		int finishTime = timingStack.peek().endTime();

		for(Note start: openNotes.values()) {				
			start.setEnd(finishTime);
		}
		
		openNotes.clear();
	}
	
	public Note.Spelling resolvePitch(String pitch) {
		if(pitchBase.isEmpty()) {
			return MasciiUtil.parsePitch(pitch, currentKey);
		} else {
			return MasciiUtil.parsePitch(pitch, currentKey, pitchBase.peek());
		}
	}

	public KeySignature.AdHoc getCurrentKey() {
		return currentKey;
	}

	public void setCurrentKey(KeySignature.AdHoc currentKey) {
		this.currentKey = currentKey;
	}

	public Stack<TimeSlot> getTimingStack() {
		return timingStack;
	}

	public void setTimingStack(Stack<TimeSlot> timingStack) {
		this.timingStack = timingStack;
	}

	public Stack<Note.Spelling> getPitchBase() {
		return pitchBase;
	}

	public void setPitchBase(Stack<Note.Spelling> pitchBase) {
		this.pitchBase = pitchBase;
	}

	public Map<Integer, Note> getOpenNotes() {
		return openNotes;
	}

	public void setOpenNotes(Map<Integer, Note> openNotes) {
		this.openNotes = openNotes;
	}
	
	
}