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
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[0]);

// items[2].style.backgroundColor = "green";

// for(let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = "bold"; 
// }

// 3. getElementByTagName
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[0]);

// li[2].style.backgroundColor = "green";

// for(let i = 0; i < li.length; ++i) {
//     li[i].style.fontWeight = "bold";
// }

// 4. querySelector
// var header = document.querySelector("#main-header");
// header.style.border = "solid 3px black";

// var input = document.querySelector("input");
// input.value = "Hello, World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "green";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

var thirdItem = document.querySelector(".list-group-item:nth-child(3");
thirdItem.style.display = "none";

// 5. querySelectorAll
var items = document.querySelectorAll(".list-group-item");
// console.log(items);
items[1].style.color = "green";

var odd = document.querySelectorAll("li:nth-child(odd)");
// console.log(odd);

for(let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "green";
}