let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.getElementById("username");
    const email = document .getElementById("email");
    const phone = document.getElementById("phone");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    

    console.log(`Name: ${userName.value} \nEmail: ${email.value} \nPhone Number: ${phone.value} \nDate: ${date.value} \nTime: ${time.value}`);

    localStorage.setItem('name', userName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('date', date.value);
    localStorage.setItem('time', time.value);

    alert("Form Submitted!");
});