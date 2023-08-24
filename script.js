let body = document.querySelector("body")
let game = document.getElementById("game")
let item1 = document.querySelector("#item1")
let item2 = document.querySelector("#item2")
let item3 = document.querySelector("#item3")
let items = document.getElementsByClassName("items")
let win = document.getElementById("win")
let score = document.getElementById("score")
let enterMoney = document.getElementById("enterMoney")
let inpMoney = document.getElementById("inpMoney")
body.append(game)
root.append(item1)
root.append(item2)
root.append(item3)
game.append(win)
let count
function start() {
    enterMoney.style.display = "block"
}
function enter() {
    if (inpMoney.value !== "" && inpMoney.value >= 100 && inpMoney.value < 100000) {
        count = inpMoney.value
        enterMoney.style.display = "none"
        game.style.display = "block"
        inpMoney.value = ""
    } else {
        inpMoney.style.color = "red"
    }

}
function X() {
    enterMoney.style.display = "none"
    game.style.display = "none"

}
function spin() {
    if (count >= 20) {
        count -= 20;
        score.innerHTML = `SCORE:${count}`
        item1.innerHTML = Math.floor(Math.random() * 10)
        item2.innerHTML = Math.floor(Math.random() * 10)
        item3.innerHTML = Math.floor(Math.random() * 10)
        // item1.innerHTML = 7
        // item2.innerHTML = 7
        // item3.innerHTML = 7
        if (item1.innerHTML === item2.innerHTML && item1.innerHTML === item3.innerHTML && item1.innerHTML === "7") {
            win.innerHTML = "YOU WIN JACKPOT"
            count += 5000;
            score.innerHTML = `SCORE:${count}`
        } else if (item1.innerHTML === item2.innerHTML && item1.innerHTML === item3.innerHTML) {
            win.innerHTML = "YOU WIN : 40"
            count += 40;
            score.innerHTML = `SCORE:${count}`
        } else if (win.innerHTML !== "") {
            win.innerHTML = ""
        }
    } else {
        score.innerHTML = `SCORE:${count}`
        win.innerHTML = "You don't have enough money"
    }
}

