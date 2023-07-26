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

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";

// var thirdItem = document.querySelector(".list-group-item:nth-child(3");
// thirdItem.style.display = "none";

// 5. querySelectorAll
// var items = document.querySelectorAll(".list-group-item");
// console.log(items);
// items[1].style.color = "green";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// console.log(odd);

// for(let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "green";
// }

// ********** Traversing the DOM **********

// 1. parentNode
var itemList = document.querySelector("#items");
itemList.parentNode.style.backgroundColor = "grey"; 
// console.log(itemList.parentNode);

// 2. parentElement - does same as parentNode in most of the cases but in document.documentElement will return null
itemList.parentElement.style.backgroundColor = "red";

// 3. childNodes - Returns nodelist and also contains spaces, breaks etc.
console.log(itemList.childNodes);

// 4. children - Returns html collection and doest not displays the spaces, breaks etc.
console.log(itemList.children[1]);

// 5. firstChild - returns the first child if it is break or space then also that's why we use firstElementChild
console.log(itemList.firstChild);

// 6. firstElementChild
// console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

// 7. lastChild - returns the last child if it is break or space then also that's why we use lastElementChild
console.log(itemList.lastChild);

// 8. lastElementChild
// console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 2";

// 9. nextSibling - returns the next sibling if it is break or space then also that's why we use nextElementSibling
console.log(itemList.nextSibling);

// 10. nextElementSibling
console.log(itemList.nextElementSibling);

// 11. previousSibling - returns the previous sibling if it is break or space then also that's why we use previousElementSibling
console.log(itemList.previousSibling);

// 12. previousElementSibling
// console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

// 13. createChild - using createElement and appendChild.

// 14. createElement
var newDiv = document.createElement("div");
    // Add class or id
    newDiv.class = "hello";
    newDiv.id = "hello1";

// 15. setAttribute
newDiv.setAttribute('title', 'Hello World');

// 16. createTextNode
var textNode1 = document.createTextNode("Hello");

// 17. appendChild
newDiv.appendChild(textNode1);

var container1 = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container1.insertBefore(newDiv, h1);

newDiv.style.fontSize = "30px";

// console.log(newDiv);

// Adding hello before item 1
var li = document.createElement("li");

var textNode2 = document.createTextNode("Hello");
li.appendChild(textNode2);

var container2 = document.querySelector("#items");
var listItem = document.querySelector(".list-group-item");

container2.insertBefore(li, listItem);