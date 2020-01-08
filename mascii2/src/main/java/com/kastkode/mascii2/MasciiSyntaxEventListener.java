package com.kastkode.mascii2;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

import org.antlr.v4.runtime.tree.ParseTree;

import com.kastkode.mascii2.antlrgenerated.MasciiParser;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.BarsContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Concurrent_blockContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Empty_staffContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.HeaderContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Lyrics_rowContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Note_end_allContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Note_end_oneContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Note_startContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.NotesContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Notes_startContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Scoped_groupContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.StaffContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Staves_n_lyricsrowContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.StavesrowContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Timed_elementContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParser.Timed_elementsContext;
import com.kastkode.mascii2.antlrgenerated.MasciiParserBaseListener;
import com.kastkode.mascii2.musicelements.MetaInfo;
import com.kastkode.mascii2.musicelements.MetaInfo.MetaInfoElement;
import com.kastkode.mascii2.musicelements.Note;
import com.kastkode.mascii2.musicelements.Part;
import com.kastkode.mascii2.musicelements.TimeSlot;
import com.kastkode.mascii2.util.MasciiUtil;

public class MasciiSyntaxEventListener extends MasciiParserBaseListener {
	public static final int TICKS_PER_BEAT = 480; //0x01e0
	private int currentPart = 0;
	//public int tempo = 120;

	private List<Part> parts = null;
	
	//this can change during course of piece
	//every time new metainfo instrux encountered
	private MetaInfo defaultMeta;
	
	private List<MetaInfoElement<?>> globalMetaInfoChanges = new LinkedList<>();

	//private int currentBlockStartingBar = 0;
	private int lyricVerse = 0;
	private List<MetaInfo.Lyric> currentPartCollectedLyrics = null;
	
	public MasciiSyntaxEventListener() {
		defaultMeta = new MetaInfo();
		defaultMeta.setInstrument("piano");
		defaultMeta.setClef("treble");
		defaultMeta.setTimeSig(new MetaInfo.TimeSig());
			defaultMeta.getTimeSig().setRawValue("4/4");
		defaultMeta.setKeySig(new MetaInfo.KeySig());
			defaultMeta.getKeySig().setRawValue("c");
		defaultMeta.setTempo(new MetaInfo.Tempo());
			defaultMeta.getTempo().setTempo(120);
				
	}

	public List<MetaInfoElement<?>> getGlobalMetaInfoChanges() {
		return globalMetaInfoChanges;
	}

	public void setGlobalMetaInfoChanges(List<MetaInfoElement<?>> globalMetaInfoChanges) {
		this.globalMetaInfoChanges = globalMetaInfoChanges;
	}

	public int partCount() {
		if(parts == null) return 0;
		
		return parts.size();
	}
	public List<Part> getParts() {
		return parts;
	}
	
	
	Part curPart() {
		return parts.get(currentPart);
	}

	MetaInfo curMeta() {
		return defaultMeta;		
	}

	public int barTime() {
		return curMeta().getTimeSig().getTimeNumerator() * MasciiSyntaxEventListener.TICKS_PER_BEAT; 
	}
					
	@Override
	public void enterHeader(HeaderContext ctx) {
		String headerName = ctx.getChild(MasciiParser.Header_nameContext.class,0).getText().toLowerCase();
		String headerContent = ctx.getChild(MasciiParser.Header_valuesContext.class,0).getText();
		String[] headerVals = MasciiUtil.splitHeaderValues(headerContent);
				
		int currentTime = 0; //TODO: make start time dynamic, set to end of current time block
		
		switch(headerName) {
			case "tempo":
				MetaInfo.Tempo tem = new MetaInfo.Tempo();
				tem.setRawValue(headerVals[0]);
				tem.setStartingAt(currentTime);				
				globalMetaInfoChanges.add(tem);
				defaultMeta.setTempo(tem);
				break;
			case "time": 
				MetaInfo.TimeSig ts = new MetaInfo.TimeSig();
				ts.setRawValue(headerVals[0]);
				ts.setStartingAt(currentTime); 
				globalMetaInfoChanges.add(ts);
				defaultMeta.setTimeSig(ts);
				break;
			case "key": 
				MetaInfo.KeySig ks = new MetaInfo.KeySig();
				ks.setRawValue(headerVals[0]);
				ks.setStartingAt(currentTime);
				globalMetaInfoChanges.add(ks);
				defaultMeta.setKeySig(ks);
				break;
			case "title":
				MetaInfo.Title title = new MetaInfo.Title();
				title.setRawValue(headerContent);
				title.setStartingAt(currentTime);				
				globalMetaInfoChanges.add(title);
				defaultMeta.setTitle(title);
				break;
			case "copyright":
				MetaInfo.Copyright cop = new MetaInfo.Copyright();
				cop.setRawValue(headerContent);
				cop.setStartingAt(currentTime);				
				globalMetaInfoChanges.add(cop);
				defaultMeta.setCopyright(cop);
				break;
			case "composer":												
				break;
			case "instrument": 
				break;
			case "version": 
				break;
			case "patch": 
				if(partCount() == 0) {
					initParts(headerVals.length);
				}
				int vindex = 0;
				for(Part p:parts) {
					String rv = getValueAtIndex(headerVals, vindex);
					MetaInfo.Patch pat = null;
					if(rv != null) {
						pat = new MetaInfo.Patch();
						pat.setRawValue(rv);
						pat.setStartingAt(currentTime);
					} else {
						pat = defaultMeta.getPatch();
					}
					p.getMetaInfoChanges().add(pat);						
					defaultMeta.setPatch(pat);//last one wins as default going forward					
					vindex ++;
				}
				break;
			case "channel": 
				if(partCount() == 0) {
					initParts(headerVals.length);
				}
				for(vindex = 0; vindex < headerVals.length && vindex < parts.size(); vindex++) {					
					String s = headerVals[vindex];
					if(s.length() == 0) {
						continue;
					}
					int ch = Integer.parseInt(headerVals[vindex]) - 1; //midi channels are 1-based in parlance but 0-based on disk
					parts.get(vindex).setChannel(ch);
				}
				break;
			default: break;
		}
	}
	
	String getValueAtIndex(String[] headerVals, int index) {
		if(headerVals.length == 0 || index < 0 || index >= headerVals.length) {
			return null;
		}
		
		return headerVals[index];
	}
	
	@Override
	public void enterBars(BarsContext ctx) {
	}
	
	public void initParts(int partCount) {
		parts = new ArrayList<>(partCount);
		for(int i=0; i<partCount; i++) {
			parts.add(new Part());
		}
		//System.out.println("counted parts " + partCount);		
	}
	
	@Override
	public void enterConcurrent_block(Concurrent_blockContext ctx) {
		currentPart = 0;
		if(partCount() == 0) {
			int partCount = 0;
			for(ParseTree child:ctx.children) {
				if(child instanceof MasciiParser.Staves_n_lyricsrowContext) {
					partCount ++;
				}
			}
			initParts(partCount);
		}
	}	
	
	@Override
	public void exitConcurrent_block(Concurrent_blockContext ctx) {
		//in case a concurrent block doesnt have enough stavesrows, pad with empty measures to fill it out
		//add empty rows to each part to even it out
		//in other words, make sure we're all at the same bar

		int maxBar = 0;
		for(Part p:parts) {
			maxBar = Math.max(maxBar, p.getBarCount());
		}

		for(Part p:parts) {
			p.setBarCount(maxBar);
			p.resetCurrentMeasureBlockIndex();
		}
	}
	
	@Override
	public void enterStaves_n_lyricsrow(Staves_n_lyricsrowContext ctx) {
	}

	@Override
	public void exitStaves_n_lyricsrow(Staves_n_lyricsrowContext ctx) {
		if(currentPartCollectedLyrics != null) {
			for(MetaInfo.Lyric lyric:currentPartCollectedLyrics) {
				if(lyric != null) {
					curPart().getMetaInfoChanges().add(lyric);					
				}
			}
			currentPartCollectedLyrics = null;
		}
		lyricVerse = 0;
		currentPart ++;
		currentPart %= partCount();
	}

	@Override
	public void exitLyrics_row(Lyrics_rowContext ctx) {
		String lyricLine = ctx.LYRICS().getText();
		String[] lyrics = lyricLine.split("[\\s|]+");
		Part p = curPart();
		List<Note> notes = p.getNotesInThisMeasureBlock();
		String prefix = MasciiUtil.times(lyricVerse, "\n");

		List<MetaInfo.Lyric> lyricList = MasciiUtil.asLyrics(notes, lyrics, prefix);
		if(currentPartCollectedLyrics == null) {
			currentPartCollectedLyrics = lyricList;
		} else {
			MasciiUtil.mergeBIntoA(currentPartCollectedLyrics, lyricList);
		}
		lyricVerse++;
	}
	
	@Override
	public void enterStaff(StaffContext ctx) {
		Part p = curPart();
		p.getTimingStack().push(TimeSlot.init((p.getBarCount()) * barTime(), barTime()));
		p.setCurrentKey(curMeta().getKeySig().getKeySignature().alterationsMap());
	}

	@Override
	public void exitStaff(StaffContext ctx) {
		curPart().getTimingStack().pop();
		curPart().bumpBarCount();
	}

	@Override
	public void exitEmpty_staff(Empty_staffContext ctx) {
		curPart().bumpBarCount();
	}

	@Override
	public void enterScoped_group(Scoped_groupContext ctx) {
		Stack<Note.Spelling> pbase = curPart().getPitchBase();
		
		if(! pbase.empty()) {
			pbase.push(pbase.peek());
		}
	}
	
	@Override
	public void exitScoped_group(Scoped_groupContext ctx) {
		if(! curPart().getPitchBase().empty()) {
			curPart().getPitchBase().pop();
		}
	}

	@Override
	public void enterTimed_elements(Timed_elementsContext ctx) {
		if(ctx.getChildCount() == 0) {
			return;
		}

		TimeSlot parentSlot = curPart().getTimingStack().peek();

		
		//List<MasciiParser.Timed_elementContext> timedKids = new ArrayList<>(ctx.getChildCount());
		
		//normally each child simply gets an equal share of the time
		//but DURATION_DOUBLE is tricky.  it in effect creates an additional child and immediately steals all that child's time.
		//so if you originally had 24 to distribute to (a b) then a would = 12 and b = 12
		//but if you instead distribute 24 to (a__ b) where __ denotes the time doubler, then you effectively get:
		//(a_ _a b) which distributes as 8 8 8.  so the first two a's sum to 16, and you finally get a = 16 and b = 8
		//this is very handy for writing gigues and waltes
		//Question: what does this mean: a__ b__ c
		//Answer: it is effectively split 5 ways, so if time was 100 then you'd have a=40, b=40, c=20
		List<Boolean> childSizes = new ArrayList<>(ctx.getChildCount());
		for(ParseTree child:ctx.children) {
			if(child instanceof MasciiParser.Timed_elementContext) {
				MasciiParser.Timed_elementContext tc = (MasciiParser.Timed_elementContext)child;				
				if(tc.getChild(MasciiParser.Duration_doubledContext.class, 0) != null) {
					childSizes.add(true);
				} else {
					childSizes.add(false);
				}
			}
		}

		List<TimeSlot> slotSizes = parentSlot.divvy(childSizes);
		
		//put onto stack in reverse order since stack is LIFO
		for(int i=slotSizes.size() -1; i>=0; i--) {
			curPart().getTimingStack().push(slotSizes.get(i));	
		}
	}
	
	@Override
	public void enterTimed_element(Timed_elementContext ctx) {
		if(ctx.normal_dot != null) {
			if(ctx.DBL_DOTTED() != null && ! ctx.DBL_DOTTED().isEmpty()) {
				TimeSlot mytime = curPart().getTimingStack().pop();
				TimeSlot nexttime = curPart().getTimingStack().pop();
				int lucre = nexttime.getDuration() / 2;
				lucre += lucre / 2;
				stealNextNeighborsTime(mytime, nexttime, lucre);
				curPart().getTimingStack().push(nexttime);
				curPart().getTimingStack().push(mytime);			
			} else if(ctx.DOTTED() != null && ! ctx.DOTTED().isEmpty()) {
				TimeSlot mytime = curPart().getTimingStack().pop();
				TimeSlot nexttime = curPart().getTimingStack().pop();
				int lucre = nexttime.getDuration() / 2;
				stealNextNeighborsTime(mytime, nexttime, lucre);
				curPart().getTimingStack().push(nexttime);
				curPart().getTimingStack().push(mytime);
			} 			
		} else if(ctx.inverse_dot != null) {			
			if(ctx.DBL_DOTTED() != null && ! ctx.DBL_DOTTED().isEmpty()) {
				TimeSlot mytime = curPart().getTimingStack().pop();
				TimeSlot nexttime = curPart().getTimingStack().pop();
				int lucre = mytime.getDuration() / -2; //negative lucre means give to neighbor
				lucre += lucre / 2;
				stealNextNeighborsTime(mytime, nexttime, lucre);
				curPart().getTimingStack().push(nexttime);
				curPart().getTimingStack().push(mytime);			
			} else if(ctx.DOTTED() != null && ! ctx.DOTTED().isEmpty()) {
				TimeSlot mytime = curPart().getTimingStack().pop();
				TimeSlot nexttime = curPart().getTimingStack().pop();
				int lucre = mytime.getDuration() / -2; //negative lucre means give to neighbor
				stealNextNeighborsTime(mytime, nexttime, lucre);
				curPart().getTimingStack().push(nexttime);
				curPart().getTimingStack().push(mytime);
			}
		}
	}
	
	//note that lucre can also be negative in which case you are actually donating to, not stealing from, next neighbor's time
	private static void stealNextNeighborsTime(TimeSlot first, TimeSlot nextNeighbor, int lucre) {
		first.setDuration(first.getDuration() + lucre);
		nextNeighbor.setDuration(nextNeighbor.getDuration() - lucre);
		nextNeighbor.setOffset(nextNeighbor.getOffset() + lucre);		
	}
	
	@Override
	public void exitTimed_element(Timed_elementContext ctx) {
		curPart().getTimingStack().pop();
	}
	
	@Override
	public void enterNote_end_all(Note_end_allContext ctx) {
		curPart().finishAllOpenNotesHere();
	}
	
	@Override
	public void enterNote_end_one(Note_end_oneContext ctx) {
		curPart().finishNoteHere(ctx.PITCH().getText());
	}
		
	@Override
	public void enterNote_start(Note_startContext ctx) {
		//System.out.println("note "+ctx.getText()+" has " + curPart().timingStack.peek() + " time" +
		//		" pitch " + ctx.PITCH() );
		
		if(ctx.getChild(MasciiParser.Note_tieContext.class, 0) == null) {
			//regular note, occupies only current timeslot
			curPart().startAndFinishNoteHere(ctx.PITCH().getText());
		} else {
			//note starts here but ends in another timeslot
			curPart().startNoteHere(ctx.PITCH().getText());			
		}
	}
	
}
