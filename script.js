function calculate() {
const participants = parseFloat(document.getElementById('participants').value);
const hours = parseFloat(document.getElementById('hours').value);
const costPerHour = parseFloat(document.getElementById('costPerHour').value);


if (isNaN(participants) || isNaN(hours) || isNaN(costPerHour)) {
document.getElementById('result').innerText = '⚠️ Please fill all fields correctly!';
return;
}


const totalCost = hours * costPerHour;
const batchCost = totalCost - (participants * hours);
const costPerStudent = batchCost / participants;


document.getElementById('result').innerText = `Cost per Student: ₹${costPerStudent.toFixed(2)} | Total Batch Cost: ₹${batchCost.toFixed(2)}`;
}