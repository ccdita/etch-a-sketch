const n = 16;
// Select div that will contain the grid
const divContainer = document.querySelector("#container");

let divRow;
let divColumn;
// Make a n * n grid of squares
for (i = 0; i < n; i++) {
    // 16 rows, each of which will contain 16 divs (squares)
    divRow = document.createElement("div");
    divRow.classList.add("divRow");
    for (j = 0; j < n; j++) {
        divColumn = document.createElement("div");
        divColumn.classList.add("divColumn");
        // Add event listener
        divColumn.addEventListener("mouseenter", (e) => {
            // Change the event target's background color
            // Don't use divColumn as this would only change the last divColumn to pink since divColumn
            // is reused with each loop
            e.target.style.backgroundColor = "pink";
        })
        divRow.appendChild(divColumn);
    }
    divContainer.appendChild(divRow);
}