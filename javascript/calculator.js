document.getElementById('calculate-button').addEventListener('click', function () {
    const expensesInputField = document.getElementById('player-expense-field');
    const expensePlayerString = expensesInputField.value;
    const expensePerPlayerInput = parseFloat(expensePlayerString);
    
    const playersExpenseTotal = document.getElementById('players-expenses');
    const playersExpensesTotalString = playersExpenseTotal.innerText;
    const playersExpensesTotalAmounts = parseFloat(playersExpensesTotalString);
    if (isNaN(expensePerPlayerInput)) {
        alert('Please input and Number');
        expensesInputField.value = '';
        return;
    }
    else if (expensePerPlayerInput < 0) {
        alert('Please input a positive number');
        expensesInputField.value = '';
        return;
    }

    const totalPlayersExpenses = expensePerPlayerInput * 5;
    playersExpenseTotal.innerText = totalPlayersExpenses;
    return totalPlayersExpenses;
})