let dim = 16;
// Select div that will contain the grid
const gridContainer = document.querySelector("#gridContainer");

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
    gridContainer.innerHTML = "";
    // Create a new grid based on the user's input
    createGrid(input);
});

/**
 * Creates a grid of size dim * dim
 * @param {*} dim, length of the column or row
 */
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
                // Generate random RGB values
                const rgbArr = randomRgb();
                const red = rgbArr[0];
                const green = rgbArr[1];
                const blue = rgbArr[2];
                // Change the event target's background color
                // Don't use divColumn as this would only change the last divColumn to pink since divColumn
                // is reused with each loop
                e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            })
            divRow.appendChild(divColumn);
        }
        gridContainer.appendChild(divRow);
    }
}

/**
 * Generates random RGB values
 * @returns array of RGB values
 */
function randomRgb() {
    // Generate random values between 0-255 (inclusive)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return [red, green, blue];
}

// Create a 16x16 when the user loads the page
createGrid(dim);