let boxes = document.querySelectorAll(".box")
let currentP = "p1"
let topR = document.querySelectorAll(".topR")
let midR = document.querySelectorAll(".midR")
let botR = document.querySelectorAll(".botR")
let gameB = [topR, midR, botR]
let w = 0
let c = 0

function switchP() {
    if (currentP === "p1") {
        currentP = "p2"
    } else {
        currentP = "p1"
    }
}


boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        if (!box.classList.contains("p1") && !box.classList.contains("p2")) {
            box.classList.add(currentP)
            switchP()
            checkWinner()
            c++
        }
        if (c === 9 && w === 0) {
            alert("It's a tie!")
        }
    })
})

function checkWinner() {
    if (gameB[0][0].classList.contains("p1") && gameB[1][0].classList.contains("p1") && gameB[2][0].classList.contains("p1")) {  // Vertical win
        w = 1
        alert("P1 wins!")
    } else if (gameB[0][1].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[2][1].classList.contains("p1")) {
        w = 1
        alert("P1 wins!")
    } else if (gameB[0][2].classList.contains("p1") && gameB[1][2].classList.contains("p1") && gameB[2][2].classList.contains("p1")) {
        w = 1
        alert("P1 wins!")
    } else if (gameB[0][0].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[2][2].classList.contains("p1")) {
        w = 1
        alert("P1 wins!")
    } else if (gameB[0][2].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[2][0].classList.contains("p1")) {
        w = 1
        alert("P1 wins!")
    } else if (gameB[0][0].classList.contains("p2") && gameB[1][0].classList.contains("p2") && gameB[2][0].classList.contains("p2")) {
        w = 1
        alert("P2 wins!")
    } else if (gameB[0][1].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        alert("P2 wins!")
    } else if (gameB[0][2].classList.contains("p2") && gameB[1][2].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        alert("P2 wins!")
    } else if (gameB[0][0].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        alert("P2 wins!")
    } else if (gameB[0][2].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[2][0].classList.contains("p2")) {
        w = 1
        alert("P2 wins!")
    } else if (gameB[0][0].classList.contains("p1") && gameB[0][1].classList.contains("p1") && gameB[0][2].classList.contains("p1")) {
        w = 1
        alert("P1 wins!")
    } else if (gameB[1][0].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[1][2].classList.contains("p1")) {
        w = 1
        alert("P1 wins!")
    } else if (gameB[2][0].classList.contains("p1") && gameB[2][1].classList.contains("p1") && gameB[2][2].classList.contains("p1")) {
        w = 1
        alert("P1 wins!")
    } else if (gameB[0][0].classList.contains("p2") && gameB[0][1].classList.contains("p2") && gameB[0][2].classList.contains("p2")) {
        w = 1
        alert("P2 wins!")
    } else if (gameB[1][0].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[1][2].classList.contains("p2")) {
        w = 1
        alert("P2 wins!")
    } else if (gameB[2][0].classList.contains("p2") && gameB[2][1].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        alert("P2 wins!")
    } else {
        console.log("Why are you looking over here? Play the game!")
    }
}

