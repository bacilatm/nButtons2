let winnerBttn = "button";

// The function select a random winner button
function randomWinner(max) {
    return Math.floor(Math.random() * max + 1);
}

// The function display the messages according to the case
function displayMessage(clickedBttn, winnerBttn) {
    if (clickedBttn === winnerBttn) {
        alert("Winner Button!🎉");
    } else {
        alert("Try again!😁");
    }
}

// The function generate the number of buttons written by the user in the input box
function generateButtons(event) {
    event.preventDefault();
    let inputRange = rangeInput.value;
    winnerBttn = "button";
    winnerBttn += randomWinner(inputRange);
    bttns.innerHTML = "";
    for (let i = 1; i <= inputRange; ++i) {
        const bttn = document.createElement('button');
        bttn.id = 'button' + i;
        let size = 'lg';
        bttn.className = 'btn btn-primary' +(size ? ' btn-' + size : '');
        bttns.appendChild(bttn);
    }
}

bttns.addEventListener("click", function(event) {
    const clickedBttn = event.target.id;
    displayMessage(clickedBttn, winnerBttn);
});