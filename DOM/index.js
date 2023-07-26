// Checking
// alert("Hi");

// Examine the document object
// console.log(document);

// SELECTORS

// 1. getElementById
// console.log(document.getElementById("header-title"));
// var headerTilte = document.getElementById("header-title");
// console.log(header);

// var header = document.getElementById("main-header");

// header.style.border = "solid 3px black";

// var addItem = document.querySelector(".title");
// console.log(addItem);
// addItem.style.fontWeight = "bold";
// addItem.style.color = "green";

// 2. getElementsByClassName
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[0]);

items[2].style.backgroundColor = "green";

for(let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = "bold"; 
}

