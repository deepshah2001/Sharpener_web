// Checking
// alert("Hi");

// Examine the document object
// console.log(document);

// SELECTORS

// 1. getElementById
// console.log(document.getElementById("header-title"));
// var headerTilte = document.getElementById("header-title");
// console.log(header);

var header = document.getElementById("main-header");

header.style.border = "solid 3px black";

var addItem = document.querySelector(".title");
// console.log(addItem);
addItem.style.fontWeight = "bold";
addItem.style.color = "green";