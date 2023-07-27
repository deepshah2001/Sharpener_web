let form = document.getElementById('submit');

form.addEventListener('click', submit);

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

        var container = document.getElementById('container');
        var h2 = document.getElementById('h2');

        // Displaying the new user in list
        container.insertBefore(li, h2);
    }
}