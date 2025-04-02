// obj: create a function that displays a number of squares
function displaySquares(squares) {
  const squaresContainer = document.querySelector('.squaresContainer');
  squaresContainer.appendChild(squares);
}

// obj: create a function that creates number of squares < 100
function createSquares(input = 16) {
  if (input < 1 || input > 100) {
    return alert('Number of squares must be between (inclusively) 1 and 100.');
  }

  // temporary container for generated squares
  const container = document.createDocumentFragment();

  for (let i = 0; i < input; i++) {
    const square = document.createElement('div');
    square.classList.toggle('square');

    container.appendChild(square);
  }

  displaySquares(container);
}

createSquares();
