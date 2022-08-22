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
    

    // Total Budget Calculation
    document.getElementById('total-calculate-button').addEventListener('click', function () {
        const managerInputField = document.getElementById('manager-input-field');
        const managerInputFieldString = managerInputField.value;
        const managerInputFieldAmount = parseFloat(managerInputFieldString);
        if (isNaN(managerInputFieldAmount)) {
            alert('Please input and Number');
            managerInputField.value = '';
            return;
        }
        else if (managerInputFieldAmount < 0) {
            alert('Please input a positive number');
            managerInputField.value = '';
            return;
        }
    
        const coachInputField = document.getElementById('coach-input-field');
        const coachInputFieldString = coachInputField.value;
        const coachInputFieldAmount = parseFloat(coachInputFieldString);
        if (isNaN(coachInputFieldAmount)) {
            alert('Please input and Number');
            coachInputField.value = '';
            return;
        }
        else if (coachInputFieldAmount < 0) {
            alert('Please input a positive number');
            coachInputField.value = '';
            return;
        }
    
        const totalBudget = document.getElementById('expenses-total');
        const totalBudgetString = totalBudget.innerText;
        const totalBudgetAmount = parseFloat(totalBudgetString);
    
        // const expensePlayers = totalPlayersExpenses;
    
        const totalBudgets = managerInputFieldAmount + coachInputFieldAmount;
        const finalBudget = totalPlayersExpenses + totalBudgets;
        totalBudget.innerText = finalBudget;
        // return totalBudgets;
    })
})


