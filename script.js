let boxes = document.querySelectorAll(".box")
let currentP = "p1"
let topR = document.querySelectorAll(".topR")
let midR = document.querySelectorAll(".midR")
let botR = document.querySelectorAll(".botR")
let h3 = document.querySelector("h3")
let gameB = [topR, midR, botR]
let clearB = document.querySelector("button")
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
        return true
    } else if (gameB[0][1].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[2][1].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        return true
    } else if (gameB[0][2].classList.contains("p1") && gameB[1][2].classList.contains("p1") && gameB[2][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        return true
    } else if (gameB[0][0].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[2][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        return true
    } else if (gameB[0][2].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[2][0].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        return true
    } else if (gameB[0][0].classList.contains("p2") && gameB[1][0].classList.contains("p2") && gameB[2][0].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        return true
    } else if (gameB[0][1].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[2][1].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        return true
    } else if (gameB[0][2].classList.contains("p2") && gameB[1][2].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        return true
    } else if (gameB[0][0].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        return true
    } else if (gameB[0][2].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[2][0].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        return true
    } else if (gameB[0][0].classList.contains("p1") && gameB[0][1].classList.contains("p1") && gameB[0][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        return true
    } else if (gameB[1][0].classList.contains("p1") && gameB[1][1].classList.contains("p1") && gameB[1][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        return true
    } else if (gameB[2][0].classList.contains("p1") && gameB[2][1].classList.contains("p1") && gameB[2][2].classList.contains("p1")) {
        w = 1
        h3.innerText = "P1 wins!"
        return true
    } else if (gameB[0][0].classList.contains("p2") && gameB[0][1].classList.contains("p2") && gameB[0][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        return true
    } else if (gameB[1][0].classList.contains("p2") && gameB[1][1].classList.contains("p2") && gameB[1][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        return true
    } else if (gameB[2][0].classList.contains("p2") && gameB[2][1].classList.contains("p2") && gameB[2][2].classList.contains("p2")) {
        w = 1
        h3.innerText = "P2 wins!"
        return true
    } else {
        return false
    }
    
}

function clearBoard () {
    boxes.forEach((box) => {
        box.classList.remove("p1")
        box.classList.remove("p2")
    })
    currentP = "p1"
    h3.innerText = "---"
}