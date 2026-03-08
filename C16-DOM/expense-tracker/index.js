const titleInput = document.querySelector("#title-input");
const amountInput = document.querySelector("#amount-input");
const addExpenseBtn = document.querySelector("#add-expense");
const expensesUL = document.querySelector(".expenses");
const totalDipslay = document.querySelector(".total-amount");

const expenses = [];

const addExpense = (title, amount) => {
  const expense = {
    title,
    amount: Number(amount),
  };

  expenses.unshift(expense);

  renderExpenses();

  updateTotal();
};

const updateTotal = () => {
  let total = 0;

  for (const expense of expenses) {
    total = total + expense.amount;
  }

  const requiredElem = totalDipslay.children[1];

  requiredElem.textContent = total;
};

const renderExpenses = () => {
  const headings = expensesUL.children[0];
  console.log(headings);

  expensesUL.innerHTML = "";

  expensesUL.append(headings);

  for (const expense of expenses) {
    const titleSpan = document.createElement("span");
    const amountSpan = document.createElement("span");
    const actionsSpan = document.createElement("span");

    actionsSpan.innerHTML = `
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
            fill="currentColor"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
            />
        </svg>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
            fill="currentColor"
            d="m12.25 10.825l.925.925L18.6 6.325l-.925-.925zM5 19h.925l5.825-5.825l-.925-.925L5 18.075zm8.875-5.125l-3.75-3.75L14.3 5.95l-.725-.725L8.1 10.7L6.7 9.3l6.875-6.875L15.7 4.55l1.975-1.975l3.75 3.75zM6.75 21H3v-3.75l7.125-7.125l3.75 3.75z"
            />
        </svg>
    `;

    titleSpan.textContent = expense.title;
    amountSpan.textContent = expense.amount;

    const li = document.createElement("li");
    li.className = "expense";

    li.append(titleSpan, amountSpan, actionsSpan);

    expensesUL.append(li);
  }

  titleInput.value = "";
  amountInput.value = "";
};

addExpenseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const amount = amountInput.value;

  if (title == "" || amount == "") {
    return;
  }

  addExpense(title, amount);
});
