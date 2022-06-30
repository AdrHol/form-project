
// Checking if passwords are the same.
const button = document.getElementById('button');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#conf-password');

function check(e){

    if (password.value !== passwordConfirmation.value) {
        button.disabled = true;
        password.setAttribute('class', 'invalid');
        passwordConfirmation.setAttribute('class', 'invalid');

    } else {
        button.disabled = false;
        password.removeAttribute('class');
        passwordConfirmation.removeAttribute('class');
    }


}


passwordConfirmation.addEventListener('input', check);
