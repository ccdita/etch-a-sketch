let dim = 16;
// Select div that will contain the grid
const divContainer = document.querySelector("#container");
// Select button that creates new canvas upon being clicked
const newCanvasBtn = document.querySelector("#new-canvas");
// Add event listener that prompts user for new canvas size upon being clicked
newCanvasBtn.addEventListener("click", () => {
    let input;
    const min = 8;
    const max = 100;
    // If the user's input is not a number or is out of range, keep re-prompting them 
    do {
        input = +(prompt("Enter size of new canvas (8-100):"));
    } while (Number.isNaN(input) || input < min || input > max);
    // Remove the old grid
    divContainer.innerHTML = "";
    // Create a new grid based on the user's input
    createGrid(input);
});

function createGrid(dim) {
    let divRow;
    let divColumn;
    // Make a n * n grid of squares
    for (i = 0; i < dim; i++) {
        // 16 rows, each of which will contain 16 divs (squares)
        divRow = document.createElement("div");
        divRow.classList.add("div-row");
        for (j = 0; j < dim; j++) {
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

createGrid(dim);