// Getting submit button through its id
let submit = document.getElementById("submit");
// Getting list of products button through its id
let list = document.getElementById("products");
// Getting total amount button through its id
let total = document.getElementById("total");

// URL for crudcrud api operation or netwrok calling
let url = "https://crudcrud.com/api/2f35c1679a8b4eda9b69c5800d9bd13a/products/";

// Getting elements of form from the value filled
let price = document.getElementById("price");
let productName = document.getElementById("name");
let myProduct = {};
let sumOfPrice = 0;

// Adding event listener if any new product is added
submit.addEventListener("click", submitProduct);

// Retreiving data from the crudcrud storage which are already stored
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(url)
    .then((response) => {
      response.data.forEach((element) => {
        sumOfPrice += Number(element.price); // Total price for data already in the storage
        showProducts(element);
      });
    })
    .catch((err) => {
      document.body.innerHTML += "<h4>Something went wrong!";
      console.error(err);
    });
});

// Function for adding new product after clicking submit
function submitProduct(e) {
  e.preventDefault();

  if(price.value === '' || productName.value === '')
    alert('Please out the values in the fields.');

  // New Product
  myProduct = {
    price: price.value,
    name: productName.value,
  };

  // POST Request for adding new products
  axios
    .post(url, myProduct)
    .then((response) => showProducts(response.data))
    .catch((err) => {
      document.body.innerHTML += "<h4>Something went wrong!";
      console.error(err);
    });

  // Updating total price for all products
  sumOfPrice += Number(price.value);
}

function showProducts(myProduct) {
  // Creating new list element
  let li = document.createElement("li");

  // Text node for the list element from the form values
  let text = `${myProduct.price} - ${myProduct.name}`;

  li.appendChild(document.createTextNode(text));

  // Creating new button element
  let deleteBtn = document.createElement("button");

  // Adding button id and text into it.
  deleteBtn.id = "delete";
  deleteBtn.appendChild(document.createTextNode("Delete Product"));

  li.appendChild(deleteBtn);

  // Adding event listener on delete button if clicked
  deleteBtn.addEventListener("click", () => deleteProduct(myProduct, li));

  // Updating innerHTML of total price or sum of product
  total.innerHTML = `Total Value Worth of Products: Rs. ${sumOfPrice}`;

  list.appendChild(li);

  form.reset();
}

function deleteProduct(myProduct, li) {
  let id = myProduct._id;

  // Updating total price
  sumOfPrice -= myProduct.price;

  total.innerHTML = `Total Value Worth of Products: Rs. ${sumOfPrice}`;

  // Deleting item from the crudcrud storage using its id.
  axios.delete(`${url}${id}`).catch((err) => {
    document.body.innerHTML += "<h4>Something went wrong!";
    console.error(err);
  });

  // Removing product from the list
  list.removeChild(li);
}
