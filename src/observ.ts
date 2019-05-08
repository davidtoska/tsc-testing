import { Observable, from, Subject, timer, interval } from "rxjs";
import { delay, tap, map, filter } from "rxjs/operators";

interface Slide {
  t: string;
  s: number;
}
const nrSrc = new Subject<number>();
const nr$ = nrSrc.asObservable();

const arr1 = [1, 2, 3, 5, 7, 9];
const arr2 = [
  { t: "one", s: 4 },
  { t: "two", s: 8 },
  { t: "three", s: 10 },
  { t: "four", s: 14 }
];

let currentSlide = 0;
const nextSlide = () => {
  currentSlide += 1;
  console.log("push next");
};
const inter = interval(1000).pipe(
  tap(a => console.log("tap: " + a)),
  map(n => n * 1),
  filter(n => n === arr2[currentSlide].s),
  tap(n => {
    nextSlide();
    console.log("running nextslide");
  })
);

inter.subscribe(a => {
  console.log("sub: " + a);
});
function* generator() {
  const bar = yield "foo"; // bar may be *any* type
  console.log(bar); // bar!
}

const iterator = generator();
// Start execution till we get first yield value
const foo = iterator.next();
console.log(foo.value); // foo
// Resume execution injecting bar
const nextThing = iterator.next("bar");
