const array1 = [1, 2, 3, 4];
interface item {
  id: string;
  nr: number;
}

const itemArray = [
  { id: "1", nr: 1 },
  { id: "1", nr: 2 },
  { id: "1", nr: 3 },
  { id: "1", nr: 4 },
  { id: "1", nr: 5 }
];
const red = (acc: number, val: item) => {
  console.log("acc: " + acc);
  //   console.log("val" + val);

  return acc + val.nr;
};

console.log(itemArray.reduce(red, 0));
