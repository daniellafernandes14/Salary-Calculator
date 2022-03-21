// Select the form
const form = document.getElementById('salary-form');
console.log(form);
// Calculate the salary after tax (take into consideration 40k+ salaries)
form.addEventListener('submit', showIncome);

function showIncome(e) {
  // Select the salary input
  const salary = parseFloat(document.getElementById('salary').value);
  const allowanceRemoved = (salary - 12570);
  if(salary <= 12570) {
    // return salary
  } else if(salary <= 50270) {
    // 20% off allowanceRemoved
  } else if(salary <= 125140) {
    // 40% off allowanceRemoved
  } else if(salary <= 150000) {
    // 40% off salary
  } else {
    // 45% off salary
  }
  e.preventDefault();
}
// Create an element to prepend to "Montly take home: h6"
// Update the salary after tax in this new element
// Add a pie chart that gets automated with %s of what you want to spend your money on
