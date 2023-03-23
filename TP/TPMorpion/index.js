const container = document.querySelector(".container")
const message = document.querySelector("#message")

let turn = 0;
let colTab = []
let end = false
let classList = ["bg-grey", "bg-green", "bg-red"]

function init() {
    for (const row of container.children) {
        let cols = []
        for (const col of row.children) {
            let res = cols.push(col)
            col.addEventListener("click", function (e) {
                clickColV3(res2 - 1, res - 1)
            })
        }
        let res2 = colTab.push(cols)
    }
    const replay = document.querySelector("#replay")
    replay.addEventListener("click", function (e) {
        clear()
    })
}

function clear() {
    colTab.forEach((cols) => {
        cols.forEach((col) => {
            col.classList.remove(...classList)
            col.innerHTML = ""
        })
    })
    message.classList.remove(...classList)
    message.innerHTML = "C'est au joueur 1 de jouer"
    end = false
    turn = 0
}

function clickColV3(x, y) {
    if (colTab[x][y].innerHTML != "") {
        console.log("Already played")
    } else {
        let message = document.querySelector("#message")
        if (turn % 2 == 0) {
            colTab[x][y].innerHTML = "X"
            const color = "bg-red"
            if (end = checkForNeighbor(x, y, color)) {
                message.innerHTML = "Bravo ! Le joueur 1 a gagné !"
                message.classList.add(color)
            }
        } else {
            colTab[x][y].innerHTML = "O"
            const color = "bg-green"
            if (end = checkForNeighbor(x, y, color)) {
                message.innerHTML = "Bravo ! Le joueur 2 a gagné !"
                message.classList.add(color)
            }
        }
        if (turn++ > 7) {
            message.innerHTML = "Match nul"
            message.classList.add("bg-grey")
            end = true
        }
        if (!end) {
            message.innerHTML = `C'est au joueur ${turn % 2 == 0 ? 1 : 2} de jouer.`
        }
    }
}

function checkForNeighbor(x, y, color) {
    // Ligne (+1y)
    if (colTab[x][y].innerHTML == colTab[x][(y + 1) % 3].innerHTML && colTab[x][y].innerHTML == colTab[x][(y + 2) % 3].innerHTML) {
        colTab[x][y].classList.add(color)
        colTab[x][(y + 1) % 3].classList.add(color)
        colTab[x][(y + 2) % 3].classList.add(color)
        return true
    }
    // Colonne (+1x)
    if (colTab[x][y].innerHTML == colTab[(x + 1) % 3][y].innerHTML && colTab[x][y].innerHTML == colTab[(x + 2) % 3][y].innerHTML) {
        colTab[x][y].classList.add(color)
        colTab[(x + 1) % 3][y].classList.add(color)
        colTab[(x + 2) % 3][y].classList.add(color)
        return true
    }
    if (colTab[1][1].innerHTML != "") {
        // Diagonale (+1y +1x)
        if (colTab[0][0].innerHTML == colTab[1][1].innerHTML && colTab[0][0].innerHTML == colTab[2][2].innerHTML) {
            colTab[0][0].classList.add(color)
            colTab[1][1].classList.add(color)
            colTab[2][2].classList.add(color)
            return true
        }
        // Diagonale (+1y -1x)
        if (colTab[1][1].innerHTML == colTab[2][0].innerHTML && colTab[1][1].innerHTML == colTab[0][2].innerHTML) {
            colTab[1][1].classList.add(color)
            colTab[2][0].classList.add(color)
            colTab[0][2].classList.add(color)
            return true
        }
    }
    return false
}

init()