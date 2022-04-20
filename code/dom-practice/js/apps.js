

console.log('JS File has been loaded!');

//select the h1 element in the index.html, so we can
//edit its properties
const h1El = document.querySelector('h1');
// Look at the object I selected!
console.log(h1El); // this will show up in the chrome console
console.dir(h1El);


let username = ''
let player2Username =''

username = 'Ruta';
player2Username = 'Luigi';

const playerNameEl = document.querySelector('#player-name');
const player2NameEl = document.querySelector('.player-two-name')

function setPlayerName(playerName, playerNumber){
    return `Player ${playerNumber}: ${playerName}`
}

console.log(playerNameEl);
console.dir(playerNameEl);

playerNameEl.innerText = `Player Name: ${username}`
player2NameEl.innerText = `Player2 Name: ${player2Username}`


const commentEls = document.querySelectorAll('.comment');

commentEls.forEach(function(element) {
    element.style.color = 'red';
    element.style.fontSize  = '26px';  
})
// console.log(commentEls);
// console.dir(commentEls);