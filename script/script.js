let op1max = 4
let op2max = 4
let gubbeY = 2
let gubbeX = 2
let catY = Math.floor(Math.random() * op1max)
let catX = Math.floor(Math.random() * op2max)
let points = 0
let zombieX = Math.floor(Math.random() * op2max)
let zombieY = Math.floor(Math.random() * op1max)

drawTable()


function movePlayer() {
    drawTable();

}
function moveCat() {


    catY = Math.floor(Math.random() * op1max)
    catX = Math.floor(Math.random() * op2max)


}
function drawTable() {

    if (gubbeX == catX && gubbeY == catY) {
        alert("Du hittade katten! Du fick en poäng!")
        points++
        moveCat();
    }
    if (gubbeX == zombieX && gubbeY == zombieY) {
        alert("Du blev biten av en zombie, gameover!!")
        zombieX = Math.floor(Math.random() * op2max)
        zombieY = Math.floor(Math.random() * op1max)
        catY = Math.floor(Math.random() * op1max)
        catX = Math.floor(Math.random() * op2max)
        gubbeY = 2
        gubbeX = 2
        points = 0
        drawTable();

    }
    let cat = "Du har hittat " + points + " katter!"
    if (points == 1) {
        cat = "Du har hittat " + points + " katt!"
    }
    else {
        cat = "Du har hittat " + points + " katter!"
    }
    let gameboard = {
        "places": [[
            { 'img': 'kontor.png', 'description': 'Ett kontor' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },],
        [
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },],
        [
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'Test' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },],
        [
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },],
        [
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },
            { 'img': 'gravskopa.jpg', 'description': 'En grävskopa' },],
        ]
    }



    document.getElementById("description").innerHTML = gameboard.places[gubbeY][gubbeX].description
    document.getElementById("image").innerHTML = "<img src='" + "images/" + gameboard.places[gubbeY][gubbeX].img + "'>"

    let table = "<table border='1'>"

    for (let op1 = 0; op1 <= op1max; op1++) {
        table += "<tr>"

        for (let op2 = 0; op2 <= op2max; op2++) {

            if (gubbeY == op1 && gubbeX == op2) {
                table += "<td> X </td>"
            }
            else if (catY == op1 && catX == op2) {
                table += "<td> C </td>"
            }
            else if (zombieY == op1 && zombieX == op2) {
                table += "<td> Z </td>"

            }
            else {
                table += "<td>   </td>"
            }

        }
        table += "</tr>"
    }
    table += "</table>"

    document.getElementById("catFound").innerHTML = cat
    document.getElementById("tabellen").innerHTML = table
}

function moveNorth() {
    if (gubbeY > 0) {
        gubbeY--;
        movePlayer();
    }

}

function moveSouth() {
    if (gubbeY < op1max) {
        gubbeY++;
        movePlayer();
    }


}

function moveEast() {
    if (gubbeX < op2max) {
        gubbeX++;
        movePlayer();
    }


}

function moveWest() {
    if (gubbeX > 0) {
        gubbeX--;
        movePlayer();
    }


}
