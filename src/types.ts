type Url = string;
type DisplayText = string;
type Seconds = number;

interface SlideDTO {
  text: DisplayText;
  start: number;
  duration: Seconds;
}

const slides = [
  { text: "one", start: 0, duration: 3 },
  { text: "two", start: 3, duration: 3 },
  { text: "three", start: 6, duration: 5 },
  { text: "four", start: 11, duration: 8 }
];

const slideShow = {
  slides,
  current: 0
};

interface SlideShowDTO {
  current: number;
  slides: SlideDTO[];
}

class SlideShow {
  private state: SlideShowDTO;

  constructor(state: SlideShowDTO) {
    this.state = state;
  }

  printNext(): void {
    let cur = this.state.slides[this.state.current];
    setTimeout(() => {
      this.state.current += 1;
      console.log("current: ", this.state.current);
    }, cur.duration * 1000);
    console.log(this.state.slides[this.state.current]);
  }

  schedule(t: number): any {
    setTimeout(() => {
      console.log("Setting timeout");
      this.schedule(t);
    }, t);
  }

  play(): void {
    this.printNext();
  }
}

const s = new SlideShow(slideShow);

s.play();
