export class TimeSlot {
    offset: number;
    duration: number;

    constructor(offset = 0, duration = 0) {
        this.offset = offset;
        this.duration = duration;
    }

    endTime(): number {
        return this.offset + this.duration;
    }

    static init(offset: number, duration: number): TimeSlot {
        return new TimeSlot(offset, duration);
    }

    // children: true = doubled slot, false = normal slot
    divvy(children: boolean[]): TimeSlot[] {
        const answer: TimeSlot[] = [];
        if (!children || children.length === 0) return answer;

        let divisor = 0;
        for (const b of children) divisor += b ? 2 : 1;

        const slotSize = Math.floor(this.duration / divisor);
        const dblSlot = slotSize * 2;
        let currentOffset = this.offset;

        for (const b of children) {
            const size = b ? dblSlot : slotSize;
            answer.push(TimeSlot.init(currentOffset, size));
            currentOffset += size;
        }

        // add remainder to last element
        if (answer.length > 0) {
            answer[answer.length - 1]!.duration += this.duration % divisor;
        }

        return answer;
    }

    toString(): string {
        return `TimeSlot offset ${this.offset} duration ${this.duration}`;
    }
}
