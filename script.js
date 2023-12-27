
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
let midDiv = "";


// CREATE NEW GRID LOOP TO POPULATE WITH DIVS
document.querySelector("#btnCreateGrid").addEventListener("click", function(){
    newGrid(gridSize);
});

function newGrid(gridSize) {

    if (midDiv) {
        midDiv.remove();
        midDiv = "";
    }

    console.log(gridSize);
    midDiv = document.createElement("div");
    midDiv.classList.add("midDiv");
    container.appendChild(midDiv);


    for (let i = 1; i < gridSize; i++) {
       const div = document.createElement("div");
      div.id = "hz";
      div.classList.add("div" + i);
      div.textContent = "gr" + i;
      midDiv.appendChild(div);

      for (let j = 1; j < gridSize; j++) {
          const hDiv = document.createElement("div");
          hDiv.classList.add("vt" + j);
          hDiv.id = "hDiv";
          hDiv.textContent = "hDiv: " + j;
          hDiv.style.width = "30px";
          hDiv.style.height = "30px";
         div.appendChild(hDiv);
         hDiv.onmouseover = hDiv.onmouseout = handler;
        }
    }
}






// COLORS DIVS ON BOARD
function handler(event) {
    if (event.type == "mouseover") {
        event.target.style.background = "blue"
    }
    if (event.type == "mouseout") {
        event.target.style.background = "blue"
    }
}










