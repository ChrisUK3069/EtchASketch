
// 1. Create div using DOM, and assign to HTML made DIV
// 2. create a loop that creates a 16x16 grid, then assign DIVS to grid.
// 2a. Use flex box to make horizontal content. assign by ID.




console.log("Hello World");

for (let i = 1; i < 17; i++) {
    const div = document.createElement("div");
    div.id = "hz";
    //div.textContent = "gr" + i;
    document.getElementById("container").appendChild(div);

    for (let j = 1; j < 17; j++) {
        const hDiv = document.createElement("div");
        hDiv.id = "vt";
        hDiv.textContent = "hDiv: " + j;
        div.appendChild(hDiv);
    }
}

container.onmouseover = container.onmouseout = handler;

function handler(event) {
    if (event.type == "mouseover") {
        event.target.style.background = "red"
    }
    if (event.type == "mouseout") {
        event.target.style.background = "red"
    }
}










