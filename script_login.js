const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "") {
        //show error
        setErrorFor(email, "Email cannot be block");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        //add succes class
        setSuccesFor(email);
    }
    if (passwordValue === "") {
        //show error
        setErrorFor(password, "Password cannot be block");
    } else {
        //add succes class
        setSuccesFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //add Error message inside small
    small.innerText = message;
    //add Error class
    formControl.className = "form-control error";
}

function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        email
    );
    // regex ifadeleri algılamsı için // arasına koymayı unutma!!!
}