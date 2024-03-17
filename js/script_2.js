const btns = document.querySelectorAll('.btn');

let queue = 0;

let christWins = 0;
let roundWins = 0;

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
      console.log('Christ win');
      break
    } else if (checkWinRound(line)) {
      roundWins++;
      console.log('Round win');
      break
    }
  }
}

btns.forEach(btn => { // і звичайно сам інпут, не подобається ізза свг коду, потрібно буде перевести в однин рядок, добавивши в папку свг з цим значенням, аля лінк
  btn.addEventListener('click', () => {
    console.log('Pressed');
    if (queue == 0) { // перевірка хто ходить, водночас вставка свг, для відображення ходу на сторінці
      btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="10"/>
      <line x1="10" y1="90" x2="90" y2="10" stroke="black" stroke-width="10"/>
      </svg>
      `;

      btn.classList.add('christ'); // добавляння класу хрестик на дів
      checkWin(); // перевірка після ходу
      queue++; // передача ходу ноликам, вони само собою одиниця
    } else {
      btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="10" fill="none"/>
      </svg>
      `;

      btn.classList.add('round');
      checkWin();
      queue--; // передача ходу хрестикам, вони відповідно нулик
    };
    
  
  }, { once: true }); // ще один корисний атребут, а саме той котрий не дозволяє взаємодіяти з елементом, після того як його вже раз натиснули
});



