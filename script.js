const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


const ShowError = (input, message) => {
    const fromControl = input.parentElement;
    fromControl.className = 'form-container error ';
    const small = fromControl.querySelector('small')
    small.innerText = message

}
const showSuccess = input => {
    const fromControl = input.parentElement;
    fromControl.className = " form-container success"
}


const ckeckRequired = arrayOfInputs => {
    arrayOfInputs.forEach(function (input) {
        if (input.value.trim() === '') {
            ShowError(input, `${input.className} is required`)
        } else {
            showSuccess(input);
        }
    });
}

const checkPassword = () => {
    if (password2.value !== password.value) {
        ShowError(password2, 'Passwords do not match')
        ShowError(password, 'Passwords do not match')
    } else {
        showSuccess(password2);
    }
}

const CheckLength = (input, min, mix) => {
    if (input.value.length < min || input.value.length > mix) {
        ShowError(input, `${input.className} must be beteen ${min} to ${mix} characters`)
    } else {
        showSuccess(input);
    }
}
// from Event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    ckeckRequired([username, email, password2, password])
    CheckLength(username, 4, 8);
    CheckLength(password, 8, 28);
    checkPassword();
})