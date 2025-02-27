const gridContainer = document.querySelector("#grid-container");

const col = document.createElement("div");
const grid = document.createElement("div");

col.classList.add("col-container");
grid.classList.add("grid");

for (let i = 1; i < 17; i++) {
    let currCol = col.cloneNode(true);
    gridContainer.appendChild(currCol);

    for (let j = 1; j < 17; j++) {
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

