// Select the form
const form = document.getElementById('salary-form');
console.log(form);
// Calculate the salary after tax (take into consideration 40k+ salaries)
form.addEventListener('submit', showIncome);

function showIncome(e) {
  // Clear previous results
  const div = document.querySelector('.results');
  const oldPara = document.querySelector('.monthly-salary');

  // Select the salary input
  const salary = parseFloat(document.getElementById('salary').value);
  const allowanceRemoved = (salary - 12570);

  // Create element to prepend to Monthly take home
  const resultsTitle = document.querySelector('h6');
  const resultsPara = document.createElement('p');
  resultsPara.className = 'monthly-salary';
  resultsPara.style.color = 'white';
  resultsPara.style.fontSize = '65px';
  resultsTitle.after(resultsPara);
  if(oldPara) {
    div.replaceChild(resultsPara, oldPara);
  }

  if(salary <= 12570) {
    // return salary
    const finalOutcome = (salary / 12).toFixed(0)
    resultsPara.innerHTML = finalOutcome;
  } else if(salary <= 50270) {
    // 20% off allowanceRemoved
    const finalOutcome = (((allowanceRemoved * 0.8) + 12570) / 12).toFixed(0);
    resultsPara.innerHTML = finalOutcome;
  } else if(salary <= 125140) {
    // 40% off allowanceRemoved
    const finalOutcome = (((allowanceRemoved * 0.6) + 12570) / 12).toFixed(0);
    resultsPara.innerHTML = finalOutcome;
  } else if(salary <= 150000) {
    // 40% off salary
    const finalOutcome = (((salary * 0.6) + 12570) / 12).toFixed(0);
    resultsPara.innerHTML = finalOutcome;
  } else {
    // 45% off salary
    const finalOutcome = (((salary * 0.55) + 12570) / 12).toFixed(0);
    resultsPara.innerHTML = finalOutcome;
  }

  const pieResult = (parseFloat(resultsPara.innerHTML) - 700)

  const chartContainer = document.getElementById('my-chart');
  const newChart = new Chart(chartContainer, {
    type: 'doughnut',
    data: {
      labels: ['Travel', 'Food Shop', 'Savings', 'Gifts For Yourself', 'Going Out', 'Rent'],
      datasets: [{
        label: '%',
        backgroundColor: ['#FF577B', '#36A2EB', '#73B38C', '#CC99CD', '#EE8D49', '#FFCD56'],
        data: [(pieResult * 0.2), (pieResult * 0.2), (pieResult * 0.3), (pieResult * 0.05), (pieResult * 0.25), 700]
      }]
    }
  });
  e.preventDefault();
}
