const form = document.getElementById('form-questions');
const inputQuestion = document.getElementById('question');
const inputTrue = document.getElementById('true');
const inputFalse = document.getElementById('false');
const inputPoints = document.getElementById('points');
const questionsTbody = document.getElementById('questions');
const goBackButton = document.getElementById('go-back-button');

const spanMessage = document.getElementById('loading-question-message');
const table = document.getElementById('table-questions');

var questionsSaving = 0;

const loadQuestion = () => {

    setTimeout(async () => {
        table.style.display = 'block';
        spanMessage.style.display = 'none';

        const data = JSON.parse(localStorage.getItem('users'));

        if (data == null){
            redirect('/index.html');
            return;
        }

        const email = (await cookieStore.get('user')).value;
        const userData = data[email];

        if (userData.questions == undefined) return;

        for (const question of userData.questions) {
            setHtmlQuestion(question.question, question.isCorrect, question.points, 'OK');
        }

    }, 5000);
}

const findAndRemove = (text, subText) => {
    const index = text.lastIndexOf(subText);

    if (index !== -1) {
        return text.slice(0, index);
    }

    return text;
}

const redirect = (file) => {
    window.location.href = findAndRemove(window.location.href, '/') + file;
}

const onSavingQuestionExit = () => {
    questionsSaving -= 1;
    goBackButton.disabled = questionsSaving !== 0;
}

const checkData = (question, inputTrueValue, inputFalseValue, points) => {

    if (question == null || question.trim() == '') return false;
    if (inputTrueValue == null || inputFalseValue == null || inputTrueValue == inputFalseValue) return false;
    if (points < 0 || points > 9) return false;

    return true;
}

const setHtmlQuestion = (question, isCorrect, points, status = 'guardando...') => {

    const tr = document.createElement('tr');

    const questionTd = document.createElement('td');
    questionTd.textContent = question;

    const isCorrectTd = document.createElement('td');
    isCorrectTd.textContent = isCorrect;

    const pointsTd = document.createElement('td');
    pointsTd.textContent = points;

    const statusTd = document.createElement('td');
    statusTd.textContent = status;    

    tr.appendChild(questionTd);
    tr.appendChild(isCorrectTd);
    tr.appendChild(pointsTd);
    tr.appendChild(statusTd);

    questionsTbody.appendChild(tr);

    return statusTd;
}

const saveQuestion = (question, isCorrect, points) => {

    return new Promise((resolve, reject) => {
        questionsSaving += 1;
        
        setTimeout(async () => {

            const data = JSON.parse(localStorage.getItem('users'));

            if (data == null) {
                reject();
                return;
            }
            
            const email = (await cookieStore.get('user')).value;
            const userData = data[email];

            if (userData.questions == undefined) userData.questions = [];

            userData.questions.push({
                question: question,
                isCorrect: isCorrect,
                points: points
            });

            data[email] = userData;
            localStorage.setItem('users', JSON.stringify(data));

            resolve();
        }, 5000);

    });

}

const onSubmit = (e) => {
    e.preventDefault();

    const question = inputQuestion.value;
    const inputTrueValue = inputTrue.checked;
    const inputFalseValue = inputFalse.checked;
    const points = parseInt(inputPoints.value);

    if (!checkData(question, inputTrueValue, inputFalseValue, points)) redirect('/index.html'); 

    goBackButton.disabled = true;
    const statusTd = setHtmlQuestion(question, inputTrueValue, points);

    saveQuestion(question, inputTrueValue, points)
        .then(() => {
            onSavingQuestionExit();
            statusTd.textContent = 'OK';
        })
        .catch(() => {
            onSavingQuestionExit();
            statusTd.textContent = 'ERROR';
        })

}

const onClickButtonGoBack = (e) => {
    e.preventDefault();
    redirect('/home.html');    
}

form.addEventListener('submit', onSubmit);
goBackButton.addEventListener('click', onClickButtonGoBack);

loadQuestion();