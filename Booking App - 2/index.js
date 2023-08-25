let submitBtn = document.getElementById("submit");
let ul = document.getElementById("lists");
let form = document.getElementById("form");

submitBtn.addEventListener("click", submit);

let userName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

let editing = null;
let editTaskList

let url = "https://crudcrud.com/api/66f58142723f4a75a933d1481a6b35c1/appointments/";

// Retreiving already present data in the databse (cloud) using array of objects (JSON)
window.addEventListener("DOMContentLoaded", () => displayUser());

function displayUser() {
    axios
    .get(
      url
    )
    .then((response) => {
      response.data.forEach((element) => {
        showUsers(element);
      });
    })
    .catch((err) => {
      document.body.innerHTML += "<h4>Something went wrong!<h4>";
      console.error(err);
    });
}

function submit(e) {
  e.preventDefault();

  if (userName.value === "" || email.value === "" || phone.value === "") {
    alert("Fill out the values in the input field.");
  } else {
    // User Data to store
    let myUser = {
      name: userName.value,
      email: email.value,
      phone: phone.value,
    };

    if (editing) {
      let id = editing._id;
      axios
        .put(
          `${url}${id}`,
          myUser
        )
        .then(() => showUsers(myUser))
        .catch((err) => {
          document.body.innerHTML += "<h4>Something went wrong!</h4>";
          console.error(err);
        });
        // After updating the user, again updating the editing value to previous value
      editing = null;
    } else {
      //  Adding new appointment of the user into the database (backend)
      axios
        .post(
          url,
          myUser
        )
        .then((response) => showUsers(response.data))
        .catch((err) => {
          document.body.innerHTML += "<h4>Something went wrong!<h4>";
          console.error(err);
        });
    }
  }
}

function deleteTask(myUser, li) {
  // For taking out the email or key of local storage
  let id = myUser._id;

  // removing it from crudcrud storage
  axios
    .delete(
      `${url}${id}`
    )
    .catch((err) => {
      document.body.innerHTML += "<h4>Something went wrong!</h4";
      console.error(err);
    });

  // removing the list displayed below the form
  ul.removeChild(li);
}

function editTask(myUser, li) {
  editing = myUser;
  editTaskList = li;

  userName.value = myUser.name;
  email.value = myUser.email;
  phone.value = myUser.phone;

  // removing the list displayed below the form
  ul.removeChild(li);
}

function showUsers(myUser) {
  // Creating a new 'li' element
  var li = document.createElement("li");

  // Text node for 'li' element to be displayed below the form
  let text =
    JSON.stringify(myUser.name) +
    " - " +
    JSON.stringify(myUser.email) +
    " - " +
    JSON.stringify(myUser.phone);
  li.appendChild(document.createTextNode(text));

  // Creating delete button
  let deleteBtn = document.createElement("button");

  // Add Text to the delete button
  deleteBtn.append(document.createTextNode("Delete"));

  li.appendChild(deleteBtn);

  // Created Edit Button
  let editBtn = document.createElement("button");

  // Adding text to edit button
  editBtn.append(document.createTextNode("Edit"));

  // Adding edit button to list
  li.appendChild(editBtn);

  // Displaying the new user in list
  ul.appendChild(li);

  form.reset();

  // Delete Button if clicked
  deleteBtn.addEventListener("click", function (e) {
    e.preventDefault();

    deleteTask(myUser, li);
  });

  // Edit button if clicked
  editBtn.addEventListener("click", function (e) {
    e.preventDefault();

    editTask(myUser, li);
  });
}
