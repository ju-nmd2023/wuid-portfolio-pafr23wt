const headingElement = document.getElementById("heading")
const inputElement = document.getElementById("input-name")
const buttonElement = document.getElementById("enter-button")


buttonElement.addEventListener("click", function (event) {
    let enteredName = inputElement.value;
    headingElement.innerText = "Welcome " + enteredName + ", please write your e-mail if you want me to contact you";

    if (enteredName !== "") {
        headingElement.innerText = "Welcome " + enteredName + ", please write your E-mail if you want me to contact you";
    }

    else{
        headingElement.innerText = "Enter your contact-info here!"
    }
});