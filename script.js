
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn); 

const getSum = () => {
	let total = 0;
    const prices = document.querySelectorAll(".price"); // Select all price elements

    prices.forEach(price => {
        total += Number(price.textContent); // Convert text to number and sum up
    });

    // Add a new row at the end of the table
    const table = document.querySelector("table");

    // Remove old total row if it exists
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    const newRow = document.createElement("tr");
    newRow.id = "totalRow"; // Assign an ID to prevent duplicate rows

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // Span across both columns
    totalCell.style.fontWeight = "bold";
    totalCell.textContent = `Total Price: Rs ${total}`;

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
    
};

getSumBtn.addEventListener("click", getSum);
