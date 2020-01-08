package com.kastkode.mascii2;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

import javax.sound.midi.InvalidMidiDataException;
import javax.sound.midi.MetaMessage;
import javax.sound.midi.MidiEvent;
import javax.sound.midi.MidiSystem;
import javax.sound.midi.Sequence;
import javax.sound.midi.ShortMessage;
import javax.sound.midi.Track;

import com.kastkode.mascii2.musicelements.MetaInfo;
import com.kastkode.mascii2.musicelements.Note;
import com.kastkode.mascii2.musicelements.Part;
import com.kastkode.mascii2.util.MidiUtil;

public class MidiGenerator {
	public static final int META_MSG_TEMPO = 0x51; 
	public static final int META_MSG_KEYSIG = 0x59;
	public static final int META_MSG_TIMESIG = 0x58;
	public static final int META_MSG_PATCH = 0x58;
	public static final int META_MSG_TITLE = 0x03;
	public static final int META_MSG_COPYRIGHT = 0x02;
	public static final int META_MSG_LYRIC = 0x05;
	public static final int META_MSG_TEXT = 0x01;
	public static final int DRUM_TRACK_CHANNEL = 9; //10th channel if 1-based
	
	Map<String, MidiGenerator.MetaEventAdder<?>> dynamicDispatch;
	
	public MidiGenerator() {
		super();
		dynamicDispatch = new HashMap<>();
		dynamicDispatch.put(MetaInfo.KeySig.class.getName(), new MetaKeySigAdder());
		dynamicDispatch.put(MetaInfo.TimeSig.class.getName(), new MetaTimeSigAdder());
		dynamicDispatch.put(MetaInfo.Tempo.class.getName(), new MetaTempoAdder());
		dynamicDispatch.put(MetaInfo.Patch.class.getName(), new MetaPatchChanger());		
		dynamicDispatch.put(MetaInfo.Copyright.class.getName(), new MetaCopyrightAdder());		
		dynamicDispatch.put(MetaInfo.Lyric.class.getName(), new MetaLyricAdder());		
		dynamicDispatch.put(MetaInfo.FreeText.class.getName(), new MetaFreeTextAdder());		
	}
	
	public String save(ParseResult result, String filename) throws InvalidMidiDataException, IOException {
		if(result.getParts() == null || result.getParts().isEmpty() ) {
			return null;
		}
		Sequence seq = generate(result);
		File f = new File(filename);
//		if(filename.contains("/")) {
//			f.getParentFile().mkdirs(); 			
//		}
		MidiSystem.write(seq, 1, f);
		return f.getAbsolutePath();
	}


	public void addMetaEvent(Track track, MetaInfo.MetaInfoElement metaInfo, Part part) {
		MetaEventAdder adder = dynamicDispatch.get(metaInfo.getClass().getName());
		if(adder == null) {
			System.err.println("unrecognized meta event " + metaInfo);
		} else {
			adder.addMetaEvent(track, metaInfo, part);
		}
	}
	
	public Sequence generate(ParseResult result) throws InvalidMidiDataException {
		
		Sequence sequence = new Sequence(
				Sequence.PPQ, 
				MasciiSyntaxEventListener.TICKS_PER_BEAT
		);

		assignChannels(result.getParts());
		
		int partCount = 0;
		//reverse the order of parts
//		Stack<Part> partsRev = new Stack<>();
//		partsRev.addAll(result.getParts());
//		while(! partsRev.empty()) {
//			Part part = partsRev.pop();
		
		// ############### lyric test
/*		
		Part p0 = result.getParts().get(0);
		MetaInfo.Lyric lyric = new MetaInfo.Lyric();
		lyric.setStartingAt(p0.getNoteStream().get(0).getStart());
		lyric.setRawValue("Part 0 v 1");
		p0.getMetaInfoChanges().add(lyric);

		lyric = new MetaInfo.Lyric();
		lyric.setStartingAt(p0.getNoteStream().get(0).getStart());
		lyric.setRawValue("\nPart 0 verse two");
		p0.getMetaInfoChanges().add(lyric);
		
		Part p1 = result.getParts().get(1);
		lyric = new MetaInfo.Lyric();
		lyric.setStartingAt(p1.getNoteStream().get(0).getStart());
		lyric.setRawValue("Part one verse one\nP 1 v 2");
		p1.getMetaInfoChanges().add(lyric);
*/
		// ############### end lyric test
		
		for(Part part:result.getParts()) {
			Track track = sequence.createTrack();
			
			//no need for separate track, just add to the first track
			//works better for MuseScore this way
			if(partCount == 0) {
				for(MetaInfo.MetaInfoElement me:result.getGlobalMetas()) {
					addMetaEvent(track, me, part);
				}
			} 

			//track level metachanges, eg program change
			for(MetaInfo.MetaInfoElement me:part.getMetaInfoChanges()) {
				addMetaEvent(track, me, part);
			}
			
			
			for(Note note:part.getNoteStream()) {
				track.add(startNote(part.getChannel(), note));
				track.add(endNote(part.getChannel(), note));
			}
			partCount ++;
		}
		return sequence;
	}
	
	public static void assignChannels(List<Part> parts) {
		Set<Integer> reservedChannels = new HashSet<>(parts.size());
		reservedChannels.add(DRUM_TRACK_CHANNEL); //only way to get drum track is to explicitly specify it
		for(Part p:parts) {
			if(p.getChannel() >= 0) {
				reservedChannels.add(p.getChannel());
			}
		}		
		
		//ListIterator<Part> partIterator = parts.listIterator(parts.size());
		ListIterator<Part> partIterator = parts.listIterator();
		int channel = 0;
		//while (partIterator.hasPrevious()) {
		while (partIterator.hasNext()) {
		    //Part p = partIterator.previous();
		    Part p = partIterator.next();
			if(p.getChannel() < 0) {
				channel = claimNextFreeChannel(channel, reservedChannels);
				p.setChannel(channel);
				channel ++;
			}
		}		
	}
	
	public static int claimNextFreeChannel(int proposedChannel, Set<Integer> claimedChannels) {
		proposedChannel = proposedChannel % 16;
		while(proposedChannel < 16 && claimedChannels.contains(proposedChannel)) {
			proposedChannel++;
		}
		proposedChannel = proposedChannel % 16;
		claimedChannels.add(proposedChannel);
		return proposedChannel;
	}
	
	public MidiEvent startNote(int channel, Note note) {
		//System.out.println("starting note "+note.getMidiPitch()+" at " + note.start);
		return asMidiNoteEvent(ShortMessage.NOTE_ON, channel, note.getMidiPitch(), 100, note.getStart());
	}

	public MidiEvent endNote(int channel, Note note) {
		//System.out.println("ending note "+note.getMidiPitch()+" at " + note.end);
		return asMidiNoteEvent(ShortMessage.NOTE_OFF, channel, note.getMidiPitch(), 100, note.getEnd());
	}
		
	public MidiEvent asMidiNoteEvent(int command, int channel, 
            int note, int velocity, int tick) 
	{ 	
		MidiEvent event = null; 		
		try { 		
			ShortMessage a = new ShortMessage(); 
			a.setMessage(command, channel, note, velocity); 			
			event = new MidiEvent(a, tick); 
		} 
		catch (Exception ex) { 		
			ex.printStackTrace(); 
		} 
		return event; 
	} 

	public static MidiEvent asMidiEvent(int status, int data, int tick) {
		
		MidiEvent event = null; 		
		try { 		
			ShortMessage a = new ShortMessage(); 
			a.setMessage(status, data, 0);  //last arg will (hopefully) be ignored according to javadoc 		
			event = new MidiEvent(a, tick); 
		} 
		catch (Exception ex) { 		
			ex.printStackTrace(); 
		} 
		return event; 
	}

	public static abstract class MetaEventAdder<T extends MetaInfo.MetaInfoElement> {
		public MetaMessage asMetaMessage(int type, byte[] bytes, int length) {
			
			MetaMessage mm = new MetaMessage();
			try {
				mm.setMessage(type, bytes, length);
			} catch (InvalidMidiDataException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return mm;
		}
		
		abstract public void addMetaEvent(Track track, T metaInfo, Part part);
	}
	
	public static class MetaTimeSigAdder extends MetaEventAdder<MetaInfo.TimeSig> {
		@Override
		public void addMetaEvent(Track track, MetaInfo.TimeSig metaInfo, Part part) {			
			track.add(new MidiEvent(asMetaMessage(META_MSG_TIMESIG, MidiUtil.asBytes(metaInfo.getTimeNumerator(), MidiUtil.asMidiTimeSigDenominator(metaInfo.getTimeDenominator()), MasciiSyntaxEventListener.TICKS_PER_BEAT, 8), 4), metaInfo.getStartingAt()));
		}
	}
	public static class MetaKeySigAdder extends MetaEventAdder<MetaInfo.KeySig> {
		@Override
		public void addMetaEvent(Track track, MetaInfo.KeySig metaInfo, Part part) {			
			track.add(new MidiEvent(asMetaMessage(META_MSG_KEYSIG, MidiUtil.keySig(metaInfo.getKeySignature().getCode(), metaInfo.isMinor()), 2), metaInfo.getStartingAt()));		
		}
	}
	public static class MetaTempoAdder extends MetaEventAdder<MetaInfo.Tempo> {
		@Override
		public void addMetaEvent(Track track, MetaInfo.Tempo metaInfo, Part part) {			
			track.add(new MidiEvent(asMetaMessage(META_MSG_TEMPO, MidiUtil.last3Bytes(MidiUtil.bpm2mspq(metaInfo.getTempo())), 3), metaInfo.getStartingAt()));			
		}
	}
	public static class MetaCopyrightAdder extends MetaEventAdder<MetaInfo.Copyright> {
		@Override
		public void addMetaEvent(Track track, MetaInfo.Copyright metaInfo, Part part) {			
			byte[] b = metaInfo.getRawValue().getBytes();
			track.add(new MidiEvent(asMetaMessage(META_MSG_COPYRIGHT, b, b.length), metaInfo.getStartingAt()));			
		}
	}
	public static class MetaLyricAdder extends MetaEventAdder<MetaInfo.Lyric> {
		@Override
		public void addMetaEvent(Track track, MetaInfo.Lyric metaInfo, Part part) {			
			byte[] b = metaInfo.getRawValue().getBytes();
			track.add(new MidiEvent(asMetaMessage(META_MSG_LYRIC, b, b.length), metaInfo.getStartingAt()));			
		}
	}
	public static class MetaFreeTextAdder extends MetaEventAdder<MetaInfo.FreeText> {
		@Override
		public void addMetaEvent(Track track, MetaInfo.FreeText metaInfo, Part part) {			
			byte[] b = metaInfo.getRawValue().getBytes();
			track.add(new MidiEvent(asMetaMessage(META_MSG_TEXT, b, b.length), metaInfo.getStartingAt()));			
		}
	}
	public static class MetaPatchChanger extends MetaEventAdder<MetaInfo.Patch> {
		@Override
		public void addMetaEvent(Track track, MetaInfo.Patch metaInfo, Part part) {	
				int patch = Math.max(0, metaInfo.getPatch() - 1);
				track.add(MidiGenerator.asMidiEvent(
					ShortMessage.PROGRAM_CHANGE | part.getChannel(), 
					patch,
					metaInfo.getStartingAt()
				));				
		}
	}
}

