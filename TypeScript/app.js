"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const btnElement = document.querySelector("button");
const numArray = [];
function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
function printObj(resultObj) {
    console.log(resultObj.val);
}
btnElement === null || btnElement === void 0 ? void 0 : btnElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numArray.push(result);
    printObj({ val: result, timeStamp: new Date() });
    console.log(numArray);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split("r"));
});
