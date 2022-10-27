const generateField = () => {
    const tableEl = document.createElement('table');
  
    tableEl.className = 'table-bordered';
    for (let i = 0; i < 3; i += 1) {
      const row = tableEl.insertRow();
      for (let j = 0; j < 3; j += 1) {
        const cell = row.insertCell();
        cell.className = 'py-2 px-3';
        cell.innerHTML = '<span class="invisible">s</span>';
      }
    }
    return tableEl;
  };
  const check = () => {
    let result = '';
    const arrWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  const boxes = document.getElementsByTagName('td');
    for (const varWin of arrWin) {
      for (const box of varWin) {
        if (boxes[arrWin[box]].innerHTML == 'x') {
        result ='крестики';
        prepearingResult(result);
        } else if (boxes[arrWin[box]].innerHTML == 'o') {
        result ='нолики';
        prepearingResult(result);
        }
      }
    }
    return result;
  };
  
  const prepearingResult = (winner) => {
    const winnerBox = document.querySelector('.winner');
    winnerBox.textContent = `Победили${winner}`;
  }

export default () => {
  const tableEl = generateField();
  let currentSymbol = 'x';
  const switchPlayer = () => {
  currentSymbol = currentSymbol === 'x' ? 'o' : 'x';
  };
  
  tableEl.addEventListener('click', (e) => {
    if (e.target.textContent === 's') {
      e.target.textContent = currentSymbol;
    }
    switchPlayer();
  });
  
  const root = document.querySelector('.root');
  root.append(tableEl);
  check();
};
