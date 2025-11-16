const emailSpan = document.getElementById("email");
const dateSpan = document.getElementById("date");
const timeSpan = document.getElementById("time");

const formatDate = (date) => {

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;

    return `${day}-${month}-${year}`;
}


const formatTime = (date) => {

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${hours}:${minutes}:${seconds}`;
}


const emailUser = (await cookieStore.get('user')).value;
const data = JSON.parse(localStorage.getItem('users'));

const lastLogin = new Date(Date.parse(data[emailUser].last_login));

emailSpan.textContent = emailUser;
dateSpan.textContent = formatDate(lastLogin);
timeSpan.textContent = formatTime(lastLogin);