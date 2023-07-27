let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.getElementById("username");
    const email = document .getElementById("email");
    const phone = document.getElementById("phone");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    

    console.log(`Name: ${userName.value} \nEmail: ${email.value} \nPhone Number: ${phone.value} \nDate: ${date.value} \nTime: ${time.value}`);

    let myUser = {
        'name': userName.value,
        'email': email.value,
        'phone': phone.value,
        'date': date.value,
        'time': time.value,
    };

    let myUser_serialized = JSON.stringify(myUser);

    localStorage.setItem('myUser', myUser_serialized);

    let myUser_deserialized = JSON.parse(localStorage.getItem('myUser'));

    console.log(myUser_serialized);
    console.log(myUser_deserialized);

    alert("Form Submitted!");
});