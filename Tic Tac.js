// const boxes = 

// for (let i=0, i<boxes.length, i++) { 
//     const box = boces [i]; 
// }


const container = document.getElementById("container")

let currentPlayer = true
let turn = 0

container.onclick = (e) => {
    if (e.target != container && e.target.innerHTML == "") {
        const box = e.target
        turn++
        if (currentPlayer) {
            box.innerHTML = "X"
        }
        else {
            box.innerHTML = "O"
        }
        checkWinner()
        currentPlayer = !currentPlayer
    }
}

function checkWinner() {
    const boxes = document.querySelectorAll(".box")
    const combos = [
        "012",
        "345",
        "678",
        "036",
        "147",
        "258",
        "048",
        "246"
    ]

    for (let i = 0; i < combos.length; i++) {
        const combo = combos[i]
        const x = combo[0]
        const y = combo[1]
        const z = combo[2]
        if (boxes[x].innerHTML == boxes[y].innerHTML && boxes[y].innerHTML == boxes[z].innerHTML && boxes[y].innerHTML != "") {
            alert("WIN")
            container.onclick = undefined
            return true
        }
    }
    if (turn == 9) {
        alert("TIE")
    }
}


const resetButton = document.querySelector('#reset')
resetButton.onclick = function () {
    // Cheating way
    window.location.reload();
}