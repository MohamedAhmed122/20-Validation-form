const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


function ShowError(input, message) {
    const fromControl = input.parentElement;
    fromControl.className = 'form-container error ';
    const small = fromControl.querySelector('small')
    small.innerText = message

}
const showSuccess = input => {
    const fromControl = input.parentElement;
    fromControl.className = " form-container success"
}

function IsEmailValid  (email)  {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// from Event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(username.value);
    if (username.value === '' || username.value.length < 4) {
        ShowError(username, 'Username is required!');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        ShowError(email, 'Email is required!');
    } else if (!IsEmailValid(email.value)) {
        ShowError(email, 'Email is not vaild!');
    } else {
        showSuccess(email);
    }
    
    if (password.value === '' || password.value.length < 8) {
        ShowError(password, 'Password is required!');
    } else {
        showSuccess(username);
    }
    if (password2.value === '' || password2.value.length < 8) {
        ShowError(password2, 'Password is required!');
    } else {
        showSuccess(username);
    }
    if (password2.value !== password.value) {
        ShowError(password2, 'Passwords do not match!');
    }
})