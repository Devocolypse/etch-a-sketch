const squaresContainer = document.querySelector('.squaresContainer');

// obj: create a function that displays a number of squares
function displaySquares(squares) {
  console.log(squares);
  squaresContainer.appendChild(squares);
}

// obj: create a function that creates one square
function createSquares() {
  const square = document.createElement('div');
  square.classList.toggle('square');

  displaySquares(square);
}

createSquares();
