function displaySquares(squares) {
  const squaresContainer = document.querySelector('.squaresContainer');
  squaresContainer.replaceChildren(squares);
}

function createSquares(input = 16) {
  const tempContainer = document.createDocumentFragment();

  // create enough squares for an input*input grid
  for (let i = 1; i <= input * input; i++) {
    const square = document.createElement('div');
    square.classList.toggle('square');

    square.addEventListener('mouseover', () => {
      const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
      square.style.setProperty('--background-color', randomColor);
    });

    tempContainer.appendChild(square);

    // break into new row every nth square in the row; n = input
    if (i % input === 0) {
      const breaker = document.createElement('div');
      breaker.classList.toggle('break');
      tempContainer.appendChild(breaker);
    }
  }

  displaySquares(tempContainer);
}

// capture value from grid creation prompt and validate it
function validateGridCreation(input) {
  cleanInput = parseInt(input);

  if (isNaN(cleanInput)) {
    return alert('Input must be a number!');
  } else if (cleanInput < 1 || cleanInput > 100) {
    return alert('Number of squares must be between (inclusively) 1 and 100.');
  }

  createSquares(cleanInput);
}

// grid creation prompt
const newGridBtn = document.querySelector('.newGridBtn');
newGridBtn.addEventListener('click', () => {
  const answer = prompt('How many squares per side do you want?', 16);
  validateGridCreation(answer);
});

createSquares();
