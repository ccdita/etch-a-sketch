let n = 16;
// Select div that will contain the grid
const divContainer = document.querySelector("#container");

const newCanvasBtn = document.querySelector("#new-canvas");
newCanvasBtn.addEventListener("click", () => {
    let input = prompt("Enter size of new canvas:");
    console.log(input);
});

function createGrid(n) {
    let divRow;
    let divColumn;
    // Make a n * n grid of squares
    for (i = 0; i < n; i++) {
        // 16 rows, each of which will contain 16 divs (squares)
        divRow = document.createElement("div");
        divRow.classList.add("div-row");
        for (j = 0; j < n; j++) {
            divColumn = document.createElement("div");
            divColumn.classList.add("div-column");
            // Add event listener
            divColumn.addEventListener("mouseenter", (e) => {
                // Change the event target's background color
                // Don't use divColumn as this would only change the last divColumn to pink since divColumn
                // is reused with each loop
                e.target.style.backgroundColor = "black";
            })
            divRow.appendChild(divColumn);
        }
        divContainer.appendChild(divRow);
    }
}

createGrid(n);