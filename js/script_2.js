let btns = document.querySelectorAll('.btn');

let queue = 0;
let step = 0;

let christWins = 0;
let roundWins = 0;

let scoreDisplayChrist = document.getElementById('christScore');
let scoreValueChrist = document.getElementById('christValue');

let scoreDisplayRound = document.getElementById('roundScore');
let scoreValueRound = document.getElementById('roundValue');

function updateScoreDisplay() {
  scoreValueChrist.textContent = christWins;
  scoreValueRound.textContent = roundWins;
}

function checkWin() {
  const checkWinChrist = (cells) => { // це для перевірки хрестиків, щоб саме хрестикам в майбутньому начислювався виграш
    return cells.every(cell => cell.classList.contains('christ'));
  };

  const checkWinRound = (cells) => { // це для перевірки ноликів відповідно
    return cells.every(cell => cell.classList.contains('round'));
  };

  const rows = [ // ну тут само собою записуємо правила
    [document.getElementById('a1'), document.getElementById('a2'), document.getElementById('a3')],
    [document.getElementById('b1'), document.getElementById('b2'), document.getElementById('b3')],
    [document.getElementById('c1'), document.getElementById('c2'), document.getElementById('c3')]
  ];

  const columns = [
    [document.getElementById('a1'), document.getElementById('b1'), document.getElementById('c1')],
    [document.getElementById('a2'), document.getElementById('b2'), document.getElementById('c2')],
    [document.getElementById('a3'), document.getElementById('b3'), document.getElementById('c3')]
  ];

  const horizontal = [
    [document.getElementById('a1'), document.getElementById('b2'), document.getElementById('c3')],
    [document.getElementById('a3'), document.getElementById('b2'), document.getElementById('c1')]
  ];

  const allLines = [...rows, ...columns, ...horizontal]; // це для мене відкриття, а саме навіщо записувати через ʼ...ʼ масиви, довгенько гуглив чому не виходило, а це все ці крапки

  for (let line of allLines) { // Це вже починається перевірка ліній, на хрестики і нолики відповідно))
    if (checkWinChrist(line)) {
      christWins++;
      updateScoreDisplay()
      console.log('Christ win');
      disableButtons();
      copyToHistory();
      break;
    } else if (checkWinRound(line)) {
      roundWins++;
      updateScoreDisplay();
      console.log('Round win');
      disableButtons();
      copyToHistory();
      break;
    } else if (step == 9) {
      copyToHistory();
    }
  }
}

function disableButtons() {
  btns.forEach(btn => {
    btn.removeEventListener('click', handleClick);
  });
}

function enableButtons() {
  let btns = document.querySelectorAll('.btn');
  btns.forEach(btn => {
    btn.addEventListener('click', handleClick, { once: true });
  });
}

function handleClick() {
  console.log('Pressed');
  step++;
  console.log(step);

  if (queue == 0) {
      this.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <line x1="10" y1="10" x2="90" y2="90" stroke="#ffc400" stroke-width="10"/>
      <line x1="10" y1="90" x2="90" y2="10" stroke="#ffc400" stroke-width="10"/>
      </svg>
      `;
      this.classList.add('christ');
      checkWin();
      queue++;
  } else if (queue == 1){
      this.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="#CAFF33" stroke-width="10" fill="none"/>
      </svg>
      `;
      this.classList.add('round');
      checkWin();
      queue--;
  };
}

enableButtons();

const gameBackup = document.getElementById('game').innerHTML;

function copyToHistory() {
  let actualMatch = document.getElementById('game');

  let lastMatch = actualMatch.cloneNode(true);

  let clonedRows = lastMatch.querySelectorAll('.row .btn');

  clonedRows.forEach(function(row) {
    row.classList.remove('btn');
    row.classList.add('border');
  });

  let historySection = document.getElementById('matchHistory');
  historySection.appendChild(lastMatch);

  reset();
}

function reset() {
  step = 0;
  document.getElementById('game').innerHTML = gameBackup;
  enableButtons();
}





var darkThemeContainer = document.getElementById("dark-theme-container");


var darkThemeImg = document.getElementById("dark-theme-svg");
var colorChangeButton = document.getElementById("colorChangeButton");

colorChangeButton.addEventListener("click", function() {
  var currentSrc = darkThemeImg.src;
    

    if (currentSrc.endsWith("dark-theme.svg")) {
      darkThemeImg.src = "img/_2/dark-theme-v2.svg";
    } else {
      darkThemeImg.src = "img/_2/dark-theme.svg";
    }
});

darkThemeContainer.addEventListener("click", function() {
  var currentColor = getComputedStyle(document.documentElement).getPropertyValue('--1-color');
  var rootStyles = document.documentElement.style;
  if (currentColor === '#F8F6E3') {
    document.documentElement.style.setProperty('--1-color', '#191919');
    document.documentElement.style.setProperty('--2-color', '#1C1C1C');
    document.documentElement.style.setProperty('--3-color', '#333333');
    document.documentElement.style.setProperty('--4-color', '#D1FF4C');
    document.documentElement.style.setProperty('--5-color', '#CAFF33');
  } else {
    document.documentElement.style.setProperty('--1-color', '#F8F6E3');
    document.documentElement.style.setProperty('--2-color', '#97E7E1');
    document.documentElement.style.setProperty('--3-color', '#6AD4DD');
    document.documentElement.style.setProperty('--4-color', '#89b5fc');
    document.documentElement.style.setProperty('--5-color', '#4f72aa');
  }
});
