import data from './data.json' assert {type: 'json'};

let expense_amt = document.querySelectorAll('.spending--amount');
let spending_day = document.querySelectorAll('.spending--day');
let monthy_expense = document.querySelectorAll('.expense-bar');

data.forEach((data, index) => {
    expense_amt[index].textContent = `$${data.amount}`
    spending_day[index].textContent = data.day;
});

let my_amt = []

data.forEach(data => {
    my_amt.push(data.amount);
});

let high_expense = Math.max(...my_amt);

monthy_expense.forEach((m, index) => {
    m.style.height = (my_amt[index] * 3) + 'px';

    if (high_expense <= my_amt[index]) {
        m.classList.add('most-spent');
    }
});
