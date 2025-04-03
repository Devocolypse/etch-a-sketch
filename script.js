function displaySquares(squares) {
  const squaresContainer = document.querySelector('.squaresContainer');
  squaresContainer.replaceChildren(squares);
}

function createSquares(input = 16) {
  const container = document.createDocumentFragment();

  // create enough squares for an input*input grid
  for (let i = 1; i <= input * input; i++) {
    console.log(i, input);
    const square = document.createElement('div');
    square.classList.toggle('square');

    square.addEventListener('mouseover', () => {
      const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
      square.style.setProperty('--background-color', randomColor);
    });

    container.appendChild(square);

    // break into new row every nth square in the row; n = input
    if (i % input === 0) {
      const breaker = document.createElement('div');
      breaker.classList.toggle('break');
      container.appendChild(breaker);
    }
  }

  displaySquares(container);
}

// capture value from grid creation prompt and validate it
function validateGridCreation(input) {
  input = parseInt(input);

  if (isNaN(input)) {
    return alert('Input must be a number!');
  } else if (input < 1 || input > 100) {
    return alert('Number of squares must be between (inclusively) 1 and 100.');
  }

  createSquares(input);
}

// grid creation prompt
const newGridBtn = document.querySelector('.newGridBtn');
newGridBtn.addEventListener('click', () => {
  const answer = prompt('How many squares per side do you want?', 16);
  validateGridCreation(answer);
});

createSquares();
