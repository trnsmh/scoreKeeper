const player1But = document.querySelector('#player1but');
const player2But = document.querySelector('#player2but');
const resetBut = document.querySelector('#resetbut');
const player1S = document.querySelector('#player1Score');
const player2S = document.querySelector('#player2Score');
const maxScore = document.querySelector('#scoreEntry');
console.log(player1But);
let counter1 = 0;
let counter2 = 0;
let limit = 0;
maxScore.addEventListener('input', function (e) {
    limit = parseInt(maxScore.value);
    buttonsEnable();
    scoreColor(counter1, counter2);
});
player1But.addEventListener('click', function (e) {
    counter1++;
    player1S.innerText = `${counter1}`;
    scoreColor(counter1, counter2);
    buttonFunc(counter1, counter2, limit);

});
player2But.addEventListener('click', function (e) {
    counter2++;
    player2S.innerText = `${counter2}`;
    scoreColor(counter1, counter2);
    buttonFunc(counter1, counter2, limit);
});
resetBut.addEventListener('click', function (e) {
    counter1 = 0;
    counter2 = 0;
    maxScore.value = '';
    scoreColor();
    buttonsEnable();
    player1S.innerText = `${counter1}`;
    player2S.innerText = `${counter2}`;

});
function buttonFunc(counter1, counter2, limit) {
    if (counter1 === limit || counter2 === limit) {
        buttonsDisable();
    } else {
        buttonsEnable();
    }
}
function buttonsDisable() {
    player1But.disabled = true;
    player2But.disabled = true;
}
function buttonsEnable() {
    player1But.disabled = false;
    player2But.disabled = false;
}
function scoreColor(c1, c2) {
    if (c1 > c2) {
        player1S.style.color = 'green';
        player2S.style.color = 'red'
    } else if (c2 > c1) {
        player2S.style.color = 'green';
        player1S.style.color = 'red'
    } else if (c1 === c2) {
        player1S.style.color = 'black';
        player2S.style.color = 'black'
    }
}
