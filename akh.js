const HideNum = document.querySelector('.HideNum');
const form = document.querySelector('form');
const restart = document.querySelector('.RestartBTN');

let random;
form.addEventListener('submit', subForm);
function subForm(e) {
    random = Math.floor(Math.random() * 3) + 1;
    const input = document.getElementById('InputV');
    const inputS = document.getElementById('InputS').type = 's'
    if (input.value == random) {
        const HideSection = document.querySelector('.Hidden');
        HideSection.classList.remove('error');
        HideSection.classList.add('correct');
        const HideNum = document.querySelector('.HideNum');
        HideNum.innerHTML = random;
        const sharh = document.querySelector('.Sharh').innerHTML = "Qoyil, Men Bilar edim, Sizni yutishingizni";
    } else {
        const HideSection = document.querySelector('.Hidden');
        HideSection.classList.add('error');
        HideSection.classList.remove('correct');
        const HideNum = document.querySelector('.HideNum');
        HideNum.innerHTML = random;
        const sharh = document.querySelector('.Sharh').innerHTML = "Afsus, topa olmadingiz";
    };
    e.preventDefault();
};
restart.addEventListener('click', restartA);
function restartA() {
    const HideSection = document.querySelector('.Hidden');
    const HideNum = document.querySelector('.HideNum');
    HideSection.classList.remove('correct');
    HideSection.classList.remove('error');
    HideNum.innerHTML = '*';
    const sharh = document.querySelector('.Sharh').innerHTML = "";
    const input = document.getElementById('InputV').value = '';
    const inputS = document.getElementById('InputS').type = 'submit'
};