const gridContainer = document.querySelector(".grid-container");

const col = document.createElement("div");
const grid = document.createElement("div");

col.classList.add("col-container");
grid.classList.add("grid");

function createGrid(defaultSize = 16) {
    for (let i = 1; i < defaultSize+1; i++) {
        let currCol = col.cloneNode(true);
        currCol.classList.add("col-" + i);
        gridContainer.appendChild(currCol);
    
        for (let j = 1; j < defaultSize+1; j++) {
            currGrid = grid.cloneNode(true);
            currCol.appendChild(currGrid);
        }
    };

    const grids = document.querySelectorAll(".grid");

    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "blue";
        });
    });
}

const gridBtn = document.querySelector(".grid-size");

gridBtn.addEventListener("click", ()=> {
    gridContainer.replaceChildren();
    createGrid(+prompt("How many squares wide?"));
});

createGrid();
