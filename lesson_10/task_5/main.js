let button = document.getElementById('button');
button.addEventListener('click',function createTable(eo) {
    eo.preventDefault()
    let rowCount = document.getElementById("rowCount").value;
    let colCount = document.getElementById("colCount").value;
    let cellContent = document.getElementById("cellContent").value;

    let table = document.createElement("table");
    for (let i = 0; i < rowCount; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < colCount; j++) {
            let cell = document.createElement("td");
            cell.textContent = cellContent;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
})

