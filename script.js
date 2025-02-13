const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum = 0;
            const prices = document.querySelectorAll(".price");
            prices.forEach(price => {
                sum += parseInt(price.textContent);
                });
                alert("Total Price: " + sum);
  
};

getSumBtn.addEventListener("click", getSum);

