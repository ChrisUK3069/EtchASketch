
// 1. Create div using DOM, and assign to HTML made DIV
// 2. create a loop that creates a 16x16 grid, then assign DIVS to grid.
// 2a. Use flex box to make horizontal content. assign by ID.
// 4. create button that loads popup asking for new size
// 4a. grid should be removed and new grid generated in 
//    same total space as before.
// 4a.1. generate new grid passing new CSS width data
// 4a.2. remove existing grid


console.log("Hello World");

let gridSize = 0;
let cellSize = 90;
let midDiv = "";
let validInput = false;
//let red = 0;
//let green = 0;
//let blue = 0;
let hue = 0;
let cellNum = 0;


// CREATE NEW GRID LOOP TO POPULATE WITH DIVS
document.querySelector("#btnCreateGrid").addEventListener("click", function(){
    newGrid();
});


function newGrid(gridSize) {

    //red = Math.floor(Math.random() * 256);
    //green = Math.floor(Math.random() * 256);
    //blue = Math.floor(Math.random() * 256);
    console.log(hue);

    validInput = false
    gridSize = prompt("Please enter number (lgnth/wdth: ");
    gridSize = parseInt(gridSize);
    while (validInput == false) {
        if (gridSize < 0 || gridSize > 100){
            alert("Invalid amount, enter a number over 0 and less than 100.");
            validInput = false;
            break;
        }


        cellSize = 960 / gridSize;

        if (midDiv) {
        midDiv.remove();
        midDiv = "";
        }

        console.log(gridSize);
        midDiv = document.createElement("div");
        midDiv.classList.add("midDiv");
        container.appendChild(midDiv);


        for (let i = 0; i < gridSize; i++) {
         const div = document.createElement("div");
        div.id = "hz";
        div.classList.add("div" + i);
        //div.textContent = "gr" + i;
        midDiv.appendChild(div);

            for (let j = 0; j < gridSize; j++) {
             const hDiv = document.createElement("div");
             cellNum = cellNum + 1;
              hDiv.classList.add("vt" + cellNum);
                 hDiv.id = "hDiv";
                 
                 //hDiv.textContent = "hDiv: " + j;
                 hDiv.style.width = cellSize + "px";
              hDiv.style.height = cellSize + "px";
              div.appendChild(hDiv);
             hDiv.onmouseover = hDiv.onmouseout = handler;
            }
        }
        validInput = true;
        break;
    }
}






// COLORS DIVS ON BOARD
function handler(event) {

    //red = Math.floor(Math.random() * 256);
    //green = Math.floor(Math.random() * 256);
    //blue = Math.floor(Math.random() * 256);
    // BACKUP event.target.style.background =  "rgb("+red+","+green+","+blue+")";
    hue = Math.floor(Math.random() * 360);


    if (event.type == "mouseover") {
        event.target.style.background =  "hsl("+hue+",100%,,50%)"
    }
    if (event.type == "mouseout") {
        event.target.style.background =  "hsl("+hue+",100%,,50%)"
    }
}










