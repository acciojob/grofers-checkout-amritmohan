const getSum = () => {
    let total = 0;
    const prices = document.querySelectorAll(".price"); // Select all price elements

    prices.forEach(price => {
        total += Number(price.textContent.trim()); // Convert text to number and sum up
    });

    // Get the table
    const table = document.querySelector("table");

    // Remove existing total row if it exists
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    const newRow = document.createElement("tr");
    newRow.id = "totalRow"; // Assign an ID to prevent duplicate rows

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // Span across both columns
    totalCell.style.fontWeight = "bold";
    totalCell.textContent = `Total Price: Rs ${total}`;

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

// Attach event listener to the existing button
document.getElementById("calculate").addEventListener("click", getSum);
