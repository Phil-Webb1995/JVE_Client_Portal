console.log("validation.js loaded...");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("name-error").innerText = "Name is Required";
        return false;
    }

    var email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("email-error").innerText = "Email is Required";
        return false;
    }

    if (!email.match("^[^\s@]+@[^\s@]+\.[^\s@]+$"))
        document.getElementById("email-error").innerText = "Invalid Email";
    return false;
});