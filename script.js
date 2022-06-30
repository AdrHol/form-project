
// Checking if passwords are the same.
const button = document.getElementById('button');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#conf-password');

function check(e){

    if (password.value !== passwordConfirmation.value) {
        button.disabled = true;
        password.setAttribute('class', 'invalid');
        passwordConfirmation.setAttribute('class', 'invalid');
        information.setAttribute('id', 'warning');
        information.textContent = 'Password must be the same';  
    } else {
        button.disabled = false;
        password.removeAttribute('class');
        passwordConfirmation.removeAttribute('class');
        information.textContent = '';
    }


}
const lastRow = document.querySelector('#last-row');
const information = document.createElement('p');
const login = document.getElementById('login');
lastRow.appendChild(information);


passwordConfirmation.addEventListener('input', check);
password.addEventListener('input', check);
