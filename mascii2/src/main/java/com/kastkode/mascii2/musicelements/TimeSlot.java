package com.kastkode.mascii2.musicelements;

import java.util.ArrayList;
import java.util.List;

public class TimeSlot {
	int offset;
	int duration;
	
	public int endTime() {
		return offset + duration;
	}
	
	public static TimeSlot init(int offset, int duration) {
		TimeSlot answer = new TimeSlot();
		answer.offset = offset;
		answer.duration = duration;
		return answer;
	}

	public TimeSlot nextSlot() {
		return nextSlot(this.duration);
	}

	public TimeSlot priorSlot() {
		return priorSlot(this.duration);
	}
	
	public TimeSlot nextSlot(int duration) {
		return TimeSlot.init(this.offset + this.duration, duration);
	}

	public TimeSlot priorSlot(int duration) {
		return TimeSlot.init(this.offset - this.duration, duration);
	}

	//children should be 1 for normal child, 2 for doubled child
	public List<TimeSlot> divvy(List<Boolean> children) {
		List<TimeSlot> answer = new ArrayList<>(children.size());
		if(children == null || children.isEmpty()) {
			return answer;
		}
		
		int divisor = 0;
		
		for(Boolean b:children) {
			if(b != null && b.booleanValue()) {
				divisor += 2;
			} else {
				divisor += 1;
			}
		}
		
		int slotSize = duration / divisor;
		int dblSlot = slotSize * 2;
		int currentOffset = this.offset;
		
		for(Boolean b:children) {
			int curSlotSize = slotSize;
			if(b != null && b.booleanValue()) {
				curSlotSize = dblSlot;
			}
			answer.add(TimeSlot.init(currentOffset, curSlotSize));
			currentOffset += curSlotSize;
		}
		
		//add remainder to last element
		answer.get(answer.size() - 1).duration += duration % divisor;
		return answer;
	}
	
	
	@Override
	public String toString() {
		return String.format("TimeSlot offset %s duration %s", offset, duration);
	}

	public int getOffset() {
		return offset;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}
}
