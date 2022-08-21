const list = [];
const makeListPlayers = document.querySelectorAll('.select-button');

makeListPlayers.onclick = function selectedPlayers() {
    const selectedTable = document.getElementById('players-list');
    selectedTable.textContent = '';
    for (let i = 0; i < list.length; i++){
        const tr = document.createElement('tr');
        tr.innerHTML=`
        
        <th>${i+1}</th>
        <td>${list[i].playerName}</td>
        `;
        selectedTable.appendChild(tr);

        const playersName = document.getElementsByClassName('player-name');
        const playerName = playersName.innerText;
        const pn = {
            playerName: playerName
        }

        list.push(pn)
    }

    console.log(list)
}
