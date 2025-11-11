const main = document.getElementById('main');
const welcome = document.getElementById('welcome');

const welcomeTimeout = setTimeout(() => {
    welcome.style.display = "none";
    window.removeEventListener('keydown', onKeyDownWelcomeCallback);
}, 5000);

const onKeyDownWelcomeCallback = (e) => {

    if (e.key === 'F11' && e.ctrlKey){
        welcome.style.display = "none";
        clearTimeout(welcomeTimeout);
        window.removeEventListener('keydown', onKeyDownWelcomeCallback);
    }

}

window.addEventListener('keydown', onKeyDownWelcomeCallback);
