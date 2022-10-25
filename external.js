const grid = document.querySelector('#grid');

for (let i = 1; i <= 256; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-item');
    grid.appendChild(gridElement);
}

let text = "auto ";
let amountText = text.repeat(16);
console.log(amountText);
grid.style.gridTemplateColumns = amountText;



const singleGrid = document.querySelectorAll('.grid-item');
singleGrid.forEach((grid) => {
    grid.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
    })
});

function changeDimension() {
    amount = Number(prompt("Enter the number of squares your sketch pad should have PER side"));
    while (amount === 0) {
        amount = Number(prompt("ERROR: Be sure to enter a number larger than 0!")); 
    }
    const grid = document.querySelector('#grid');
    grid.replaceChildren();
    for (let i = 1; i <= amount**2; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-item');
        grid.appendChild(gridElement);
    }
    let text = "auto ";
    let amountText = text.repeat(amount);
    grid.style.gridTemplateColumns = amountText;
    const singleGrid = document.querySelectorAll('.grid-item');
        singleGrid.forEach((grid) => {
        grid.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        })
    });
}

function resetGrid() {
    const singleGrid = document.querySelectorAll('.grid-item');
    singleGrid.forEach((grid) => {
        grid.style.backgroundColor = 'white';
    })
}



const dimensionButton = document.querySelector('#dimension');
dimensionButton.addEventListener('click', changeDimension)

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);