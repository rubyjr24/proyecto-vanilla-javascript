const main = document.getElementById('main');
const welcome = document.getElementById('welcome');
const login = document.getElementById('login');
const inputEmail = document.getElementById('email');
const spanError = document.getElementById('login-error');
const inputSubmit = document.getElementById('login-submit');

const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');


// Welcome

const onWelcomeClose = () => {
    welcome.style.display = 'none';
    window.removeEventListener('keydown', onKeyDownWelcomeCallback);
    login.style.display = 'block';
    onLogin();
}


const onKeyDownWelcomeCallback = (e) => {

    if (e.key === 'F11' && e.ctrlKey){
        clearTimeout(welcomeTimeout);
        onWelcomeClose();
    }

}


const welcomeTimeout = setTimeout(() => {
    onWelcomeClose();
}, 5000);

window.addEventListener('keydown', onKeyDownWelcomeCallback);

//Login

const validEmail = (email) => emailRegex.test(email);

const onBlurEmail = (e) => {
    const valid = validEmail(e.target.value);
    spanError.style.visibility = valid ? 'hidden' : 'initial';
    inputSubmit.disabled = !valid;

    if (!valid){
        inputEmail.select();
    }
}

const onSubmitForm = (e) => {
    const email = inputEmail.value;

    if (!validEmail(email)) return;

    const stored = localStorage.getItem('users');
    const data = stored != null ? JSON.parse(stored) : {};

    const userData = {};

    userData.last_login = new Date();

    data[email] = userData;
    localStorage.setItem('users', JSON.stringify(data));
    
}

const onLogin = () => {

    login.addEventListener('submit', onSubmitForm);
    inputEmail.addEventListener('blur', onBlurEmail);

}

