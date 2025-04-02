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

  // loop until input * input number of squares are generated
  for (let i = 1; i <= input * input; i++) {
    console.log(i, input);
    const square = document.createElement('div');
    square.classList.toggle('square');

    square.addEventListener("mouseover", () => square.classList.add('colorChange'));

    container.appendChild(square);

    // break into new row every nth square, n = input
    if (i % input === 0) {
      const breaker = document.createElement('div');
      breaker.classList.toggle('break');
      container.appendChild(breaker);
    }
  }

  displaySquares(container);
}

createSquares();
