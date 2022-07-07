let home = document.getElementById("countHome")
let guest = document.getElementById("countGuest")

//console.log(home.innerText)

let homeCount = 0
let guestCount = 0

function plusOneHome(){
    homeCount += 1
    home.innerText = homeCount
}

function plusTwoHome(){
    homeCount += 2
    home.innerText = homeCount
}

function plusThreeHome(){
    homeCount += 3
    home.innerText = homeCount
}

function plusOneGuest(){
    guestCount += 1
    guest.innerText = guestCount
}

function plusTwoGuest(){
    guestCount += 2
    guest.innerText = guestCount
}

function plusThreeGuest(){
    guestCount += 3
    guest.innerText = guestCount
}
