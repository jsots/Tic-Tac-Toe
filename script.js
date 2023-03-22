let boxes = document.querySelectorAll(".box")
let currentP = "p1"
let gameB = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]

function switchP() {
    if (currentP === "p1") {
        currentP = "p2"
    } else {
        currentP = "p1"
    }
}


boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        box.classList.add(currentP)
        switchP()
    })
})

// function checkWinner() {
//     console.log(gameB[0,0,0]))
// }

console.log(gameB[0][0])