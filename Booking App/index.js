let submitBtn = document.getElementById('submit');
let ul = document.getElementById('lists');
let form = document.getElementById('form');

submitBtn.addEventListener('click', submit);

function submit(e) {
    e.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');

    if(name.value === '' || email.value === '' || phone.value === '') {
        alert("Fill out the values in the input field.");
    } else {
        // User Data to store
        let myUser = {
            'name': name.value,
            'email': email.value,
            'phone': phone.value
        }
        
        // Retriving already present data from local storage if any otherwise initializing empty array/list
        let users = JSON.parse(localStorage.getItem(email.value)) || [];

        // Pushing the new user into list/array
        users.push(myUser);
        
        // Converting object into string format
        var user_serialized = JSON.stringify(users);
        
        // Storing into local storage
        localStorage.setItem(email.value, user_serialized);

        // Creating a new 'li' element
        var li = document.createElement('li');

        // Text node for 'li' element to be displayed below the form
        let text = JSON.stringify(myUser.name) + " - " + JSON.stringify(myUser.email) + " - " + JSON.stringify(myUser.phone);
        li.appendChild(document.createTextNode(text));

        // Creating delete button
        let deleteBtn = document.createElement('button');

        // Add Text to the delete button
        deleteBtn.append(document.createTextNode("Delete"));

        li.appendChild(deleteBtn);

        // Created Edit Button
        let editBtn = document.createElement('button');

        // Adding text to edit button
        editBtn.append(document.createTextNode("Edit"));

        // Adding edit button to list
        li.appendChild(editBtn);
        
        // Displaying the new user in list
        ul.appendChild(li);

        form.reset();

        // Delete Button if clicked
        deleteBtn.addEventListener('click', function(e) {
            e.preventDefault();

            deleteTask(deleteBtn, li);
        })

        // Edit button if clicked
        editBtn.addEventListener('click', function(e) {
            e.preventDefault();

            name.value = myUser.name;
            email.value = myUser.email;
            phone.value = myUser.phone;

            deleteTask(myUser, li);
        })
    }
}

function deleteTask(myUser, li) {
    // For taking out the email or key of local storage
    let key = myUser.email;

    // removing it from local storage
    localStorage.removeItem(key);

    // removing the list displayed below the form
    ul.removeChild(li);
}