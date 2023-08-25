const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const btnElement = document.querySelector("button")!;

const numArray: number[] = [];

type Num = number;
type Obj = { val: Num; timeStamp: Date };

interface resultObj {
  val: Num;
  timeStamp: Date;
}

function add(num1: Num, num2: Num) {
  console.log(num1 + num2);
  return num1 + num2;
}

function printObj(resultObj: Obj) {
  console.log(resultObj.val);
}

btnElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;

  const result = add(+num1, +num2);
  numArray.push(result);

  printObj({ val: result, timeStamp: new Date() });

  console.log(numArray);
});

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise");
    }, 1000);
});

myPromise.then((result) => {
    console.log(result.split("r"));
})