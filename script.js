let boxes = document.querySelectorAll(".box")
let currentP = "p1"
let topR = document.querySelectorAll(".topR")
let midR = document.querySelectorAll(".midR")
let botR = document.querySelectorAll(".botR")
let h3 = document.querySelector("h3")
let gameB = [topR, midR, botR]
let clearB = document.querySelector("button")
let p1Score = 0
let p2Score = 0
let p1Val = document.querySelector(".p1Val")
let p2Val = document.querySelector(".p2Val")
let h1 = document.querySelector("h1")
let w = 0
let c = 0

boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        if (!box.classList.contains("p1") && !box.classList.contains("p2")) {
            box.classList.toggle(currentP)
            switchP()
            checkWinner()
            c++
        }
        if (c === 9 && w === 0) {
            h3.innerText = "It's a tie!"
        }      
    })
})

clearB.addEventListener("click", clearBoard)
// h1.innerText.addEventListener("click", () => {
//     reload()
// })

function switchP() {
    if (currentP === "p1") {
        currentP = "p2"
    } else {
        currentP = "p1"
    }
}

function checkWinner() {
    if (gameB[0][0].classList.contains("p1") && gameB[1][0].classList.contains("p1") && gameB[2][0].classList.contains("p1")) {  // Vertical win
        w = 1
        h3.innerText = "P1 wins!"
        p1Score += 1
        if (p1Score < 10) {
            p1Val.innerText = "0" + p1Score
        } else {
            p1Val.innerText = p1Score
        }
    } else if (gameB[0][1].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[2][1].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        p1Score += 1
        if (p1Score < 10) {
            p1Val.innerText = "0" + p1Score
        } else {
            p1Val.innerText = p1Score
        }
    } else if (gameB[0][2].classList.contains("p1") && gameB[1][2].classList.contains("p1") && gameB[2][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        p1Score += 1
        if (p1Score < 10) {
            p1Val.innerText = "0" + p1Score
        } else {
            p1Val.innerText = p1Score
        }
    } else if (gameB[0][0].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[2][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        p1Score += 1
        if (p1Score < 10) {
            p1Val.innerText = "0" + p1Score
        } else {
            p1Val.innerText = p1Score
        }
    } else if (gameB[0][2].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[2][0].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        p1Score += 1
        if (p1Score < 10) {
            p1Val.innerText = "0" + p1Score
        } else {
            p1Val.innerText = p1Score
        }
    } else if (gameB[0][0].classList.contains("p2") && gameB[1][0].classList.contains("p2") && gameB[2][0].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        p2Score += 1
        if (p2Score < 10) {
            p2Val.innerText = "0" + p2Score
        } else {
            p2Val.innerText = p2Score
        }
    } else if (gameB[0][1].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[2][1].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        p2Score += 1
        if (p2Score < 10) {
            p2Val.innerText = "0" + p2Score
        } else {
            p2Val.innerText = p2Score
        }
    } else if (gameB[0][2].classList.contains("p2") && gameB[1][2].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        p2Score += 1
        if (p2Score < 10) {
            p2Val.innerText = "0" + p2Score
        } else {
            p2Val.innerText = p2Score
        }
    } else if (gameB[0][0].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        p2Score += 1
        if (p2Score < 10) {
            p2Val.innerText = "0" + p2Score
        } else {
            p2Val.innerText = p2Score
        }
    } else if (gameB[0][2].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[2][0].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        p2Score += 1
        if (p2Score < 10) {
            p2Val.innerText = "0" + p2Score
        } else {
            p2Val.innerText = p2Score
        }
    } else if (gameB[0][0].classList.contains("p1") && gameB[0][1].classList.contains("p1") && gameB[0][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        p1Score += 1
        if (p1Score < 10) {
            p1Val.innerText = "0" + p1Score
        } else {
            p1Val.innerText = p1Score
        }
    } else if (gameB[1][0].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[1][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        p1Score += 1
        if (p1Score < 10) {
            p1Val.innerText = "0" + p1Score
        } else {
            p1Val.innerText = p1Score
        }
    } else if (gameB[2][0].classList.contains("p1") && gameB[2][1].classList.contains("p1") && gameB[2][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        p1Score += 1
        if (p1Score < 10) {
            p1Val.innerText = "0" + p1Score
        } else {
            p1Val.innerText = p1Score
        }
    } else if (gameB[0][0].classList.contains("p2") && gameB[0][1].classList.contains("p2") && gameB[0][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        p2Score += 1
        if (p2Score < 10) {
            p2Val.innerText = "0" + p2Score
        } else {
            p2Val.innerText = p2Score
        }
    } else if (gameB[1][0].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[1][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        p2Score += 1
        if (p2Score < 10) {
            p2Val.innerText = "0" + p2Score
        } else {
            p2Val.innerText = p2Score
        }
    } else if (gameB[2][0].classList.contains("p2") && gameB[2][1].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        p2Score += 1
        if (p2Score < 10) {
            p2Val.innerText = "0" + p2Score
        } else {
            p2Val.innerText = p2Score
        }
    } else {
        console.log()
    }
    if (p1Score > p2Score) {
        p1Val.classList.add("glowP1")
    } else if (p2Score > p1Score) {
        p2Val.classList.add("glowP2")
    }
}

function clearBoard () {
    boxes.forEach((box) => {
        box.classList.remove("p1")
        box.classList.remove("p2")
    })
    currentP = "p1"
    w = 0
    c = 0
    h3.innerText = "---"
}