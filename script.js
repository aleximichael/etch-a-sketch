const gridContainer = document.querySelector(".grid-container");

const column = document.createElement("div");
const grid = document.createElement("div");

column.classList.add("col-container");
grid.classList.add("grid");

function createGrid(defaultSize = 16) {
    for (let i = 1; i < defaultSize+1; i++) {
        let currCol = column.cloneNode(true);
        gridContainer.appendChild(currCol);
    
        for (let j = 1; j < defaultSize+1; j++) {
            currCol.appendChild(grid.cloneNode(true));
        };
    };

    const grids = document.querySelectorAll(".grid");

    let alpha = 0;

    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = getRandomColour(alpha);
            alpha < 1 ? alpha += 0.1 : alpha = 0;
        });
    });
}

function getRandomColour(alpha) {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b}, ${alpha})`;
}

const gridBtn = document.querySelector(".reset-button");

gridBtn.addEventListener("click", ()=> {
    newGridSize = +prompt("How many squares wide?");
    console.log(newGridSize);
    if (newGridSize > 100) {
        alert("ERROR. Maximum of 100 squares.");
    } else if (isNaN(newGridSize)) {
        alert("ERROR. Please enter a number.");
    } else {
        gridContainer.replaceChildren();
        createGrid(newGridSize);
    };
});

createGrid();