
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn); 

const getSum = () => {
    
    const priceElements = document.querySelectorAll(".price");
    let total = 0;

    // Loop through price elements and sum their values
    priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent) || 0;
    });

    // Check if the total row already exists and remove it
    let existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row to display total price
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    totalRow.id = "totalRow"; // Assign an ID to prevent duplicate rows

    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2"); // Span across both columns
    totalCell.style.fontWeight = "bold";
    totalCell.textContent = `Total Price: ₹${total.toFixed(2)}`; // Display total price

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow); // Append total row to the table
};

getSumBtn.addEventListener("click", getSum);
