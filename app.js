const firstNameInput = document.querySelector('.form__first-name');
const lastNameInput = document.querySelector('.form__last-name');
const passwordInput = document.querySelector(".form__password");
const passwordConfirmationInput = document.querySelector(".form__password-confirm");
const message = document.querySelector(".form__message");

document.querySelector(".form").addEventListener("submit", (e) => {
    message.innerHTML = "";

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let password = passwordInput.value;
    let passwordConfirm = passwordConfirmationInput.value;

    if (password !== passwordConfirm) {
        e.preventDefault();
        message.innerHTML = "Пароли не совпадают";
    }

    if (password === firstName || password === lastName) {
        e.preventDefault();
        message.innerHTML = "Пароль не должен равняться имени/фамилии";
    }

    if (password.length < 8) {
        e.preventDefault();
        message.innerHTML = "Длина пароля должна быть не менее 8 символов";
    }
})