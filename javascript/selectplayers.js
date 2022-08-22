
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
}


