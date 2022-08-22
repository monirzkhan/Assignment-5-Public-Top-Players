
///Players Cart:
const selectedList = [];

function playersCart() {
    const tbody = document.getElementById('players-list');
    tbody.innerHTML = '';
    for (let i=0; i < selectedList.length; i++){
        const playerName = selectedList[i];
        console.log(playerName);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i+1}</th>
    <td>${playerName}</td>
        `;
        tbody.appendChild(tr);
       
    }

}
function addPlayer(element) {
    
    const playerName = element.parentNode.parentNode.children[0].innerText;
    selectedList.push(playerName);

    
    const playerNumber = document.getElementById('player-numbers');
    
    const selectedPlayersNumbers = selectedList.length;
    // playerNumber.innerText = selectedPlayersNumbers;
    
    if (selectedPlayersNumbers > 5) {
        
        alert('you can not select more than 5 players');
        return;
    }
   
    playersCart();
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
    
        const totalPlayersExpenses = expensePerPlayerInput * selectedPlayersNumbers;
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
        
            const totalBudgets = managerInputFieldAmount + coachInputFieldAmount;
            const finalBudget = totalPlayersExpenses + totalBudgets;
            totalBudget.innerText = finalBudget;
        
        })
    }) 
}


