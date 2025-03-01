const gridContainer = document.querySelector(".grid-container");
const column = document.createElement("div");
const square = document.createElement("div");
square.classList.add("square");

function createGrid(numSquares = 16) {
    for (let i = 1; i < numSquares+1; i++) {
        let currCol = column.cloneNode(true);
        gridContainer.appendChild(currCol);
    
        for (let j = 1; j < numSquares+1; j++) {
            currCol.appendChild(square.cloneNode(true));
        };
    };

    let squareWidth = `${600 / numSquares}px`;

    const colourBtn = document.querySelector(".change-colour");
    let colourToggle = false;

    colourBtn.addEventListener("click", () => {
        colourToggle = true;
    })

    let grids = document.querySelectorAll(".square");

    grids.forEach((square) => {
        square.setAttribute("style", `width: ${squareWidth}; height: ${squareWidth}`);
        square.addEventListener("mouseover", () => {
            if (!colourToggle) {
                square.style.backgroundColor = "black";
            } else {
                square.style.backgroundColor = getRandomColour(1);
            }
        });
    });
    
};

const sizeBtn = document.querySelector(".change-size");

sizeBtn.addEventListener("click", () => {
    newGridSize = +prompt("How many squares wide?");
    console.log(newGridSize);
    if (newGridSize > 100) {
        alert("ERROR. Maximum of 100 squares.");
    } else if (isNaN(newGridSize)) {
        alert("ERROR. Please enter a number.");
    // If the user cancels the pop-up - nothing happens
    } else if (newGridSize === 0) { 
    } else {
        gridContainer.replaceChildren();
        createGrid(newGridSize);
    };
});

const resetBtn = document.querySelector(".reset-grid");

resetBtn.addEventListener("click", () => {
    let grids = document.querySelectorAll(".square");
    grids.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});

function getRandomColour(alpha) {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b}, ${alpha})`;
}

createGrid();