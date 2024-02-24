const changeNrSquaresBtn = document.querySelector('.resize-button');
const board = document.querySelector('.board');

let size = 16;

changeNrSquaresBtn.addEventListener('click', changeSize);

function createBoard()
{
    board.textContent = '';
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (let i = 0; i < size ** 2; ++i)
    {
        let square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
        square.addEventListener('mouseover', () => changeColor(square));
    }
}

function changeSize()
{
    let newSize = prompt('Insert a new size for board. Enter a number between 2 and 100');

    if (newSize && newSize >= 2 && newSize <= 100)
    {
        size = newSize;
        createBoard();
    }
    else
        alert('Invalid input! Enter a number between 2 and 100')
}

function changeColor(square)
{
    square.style.backgroundColor = 'purple';
}

createBoard();

