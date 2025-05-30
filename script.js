let expenses = [];

const form = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value);

  if (name && !isNaN(amount)) {
    const expense = {
      id: Date.now(),
      name,
      amount
    };

    expenses.push(expense);
    renderExpenses();
    form.reset();
  }
});

function renderExpenses() {
  expenseList.innerHTML = "";

  let total = 0;

  expenses.forEach(expense => {
    total += expense.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      ${expense.name} - ₹${expense.amount.toFixed(2)}
      <button onclick="deleteExpense(${expense.id})">❌</button>
    `;
    expenseList.appendChild(li);
  });

  totalDisplay.textContent = total.toFixed(2);
}

function deleteExpense(id) {
  expenses = expenses.filter(expense => expense.id !== id);
  renderExpenses();
}
