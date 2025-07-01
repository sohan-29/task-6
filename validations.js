function handleValidations() {
    const button = document.getElementById("Submit");
    button.onclick = (e) => {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var toastMessage = document.getElementById("toast");
        if (validateName(name) && validateEmail(email) && validateMessage(message)) {
            toastMessage.innerText = "Message recieved!";
            toastMessage.style.color = "#82ff1f"
        }
        console.log(name, email, message);
    }
}
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var toastMessage = document.getElementById("toast");
    toastMessage.style.color = "#dd183b";
    if (!emailRegex.test(email)) {
        toastMessage.innerText = "Try again with a valid email";
    }
    return emailRegex.test(email);
}

const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    var toastMessage = document.getElementById("toast");
    toastMessage.style.color = "#dd183b";
    if (!nameRegex.test(name)) {
        toastMessage.innerText = "Name should not conatin any special characters or numbers";
    }
    return nameRegex.test(name);
}

const validateMessage = (message) => {
    const messageRegex = /^.{2,500}$/;
    var toastMessage = document.getElementById("toast");
    toastMessage.style.color = "#dd183b";
    if (!messageRegex.test(message)) {
        toastMessage.innerText = "Message should contain 2-500 characters";
    }
    return messageRegex.test(message);
}

window.onload = handleValidations;