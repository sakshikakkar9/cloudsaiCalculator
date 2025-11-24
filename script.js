function calculate() {
    const costPerStudent = parseFloat(document.getElementById("costPerStudent").value);
    const participants = parseFloat(document.getElementById("participants").value);
    const hours = parseFloat(document.getElementById("hours").value);
    const costPerHour = parseFloat(document.getElementById("costPerHour").value);

    if (isNaN(costPerStudent) || isNaN(participants) || isNaN(hours) || isNaN(costPerHour)) {
        alert("Please fill all fields correctly!");
        return;
    }

    // NEW UPDATED FORMULA
    const result = costPerStudent - (participants * hours );

    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    resultBox.innerHTML = "Total Batch Cost: <br><strong>₹ " + result.toFixed(2) + "</strong>";
}