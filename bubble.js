

let gameScreen = document.querySelector('#game-screen');
let btn = document.querySelector('#btn');
let timer = 60;
let rn;
let score = 0;
let num;

btn.addEventListener('click', function () {
  document.querySelector('#page1').style.display = 'none';
  document.querySelector('#page2').style.display = 'flex';

  makeBubble();
  hitRefresh();
  timerRun();
});

function hitRefresh() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector('#hitval').textContent = rn;
}

let interval;

function timerRun() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector('#pnltimer').textContent = timer;
    }
    else {
      clearInterval(interval);
      document.querySelector('#hitval').textContent = "0";
      gameScreen.innerHTML = `<h2>GAME OVER <br>Your Score ${score}!</h2>`
    }
  }, 1000)
}

function makeBubble() {
  let clutter = "";
  for (var i = 0; i <= 111; i++) {
    let rand = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rand}</div>`;
  }
  gameScreen.innerHTML = clutter;
}

function scoreIncrease() {
  score += 10;
  document.querySelector('#scoreval').textContent = score;
}

gameScreen.addEventListener("click", function (dets) {
  num = (Number(dets.target.textContent));

  if (num === rn) {
    scoreIncrease();
    makeBubble();
    hitRefresh();
  }
});
