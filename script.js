
// 1. Create div using DOM, and assign to HTML made DIV
// 2. create a loop that creates a 16x16 grid, then assign DIVS to grid.
// 2a. Use flex box to make horizontal content. assign by ID.
// 4. create button that loads popup asking for new size
// 4a. grid should be removed and new grid generated in 
//    same total space as before.
// 4a.1. generate new grid passing new CSS width data
// 4a.2. remove existing grid


console.log("Hello World");

let gridSize = 17;
let cellSize = 17;


// CREATE NEW GRID LOOP TO POPULATE WITH DIVS
function newGrid(gridSize) {
    console.log(gridSize);
    for (let i = 1; i < gridSize; i++) {
       const div = document.createElement("div");
      div.id = "hz";
      div.textContent = "gr" + i;
      document.getElementById("container").appendChild(div);

      for (let j = 1; j < gridSize; j++) {
          const hDiv = document.createElement("div");
          hDiv.classList.add("vt");
          hDiv.textContent = "hDiv: " + j;
         div.appendChild(hDiv);
         hDiv.onmouseover = hDiv.onmouseout = handler;
        }
    }
}

newGrid(gridSize);




// COLORS DIVS ON BOARD
function handler(event) {
    if (event.type == "mouseover") {
        event.target.style.background = "blue"
    }
    if (event.type == "mouseout") {
        event.target.style.background = "blue"
    }
}










