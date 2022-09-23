let homeCount = 0
let guestCount = 0
let homeDis = document.getElementById('dispHome')
let guestDis = document.getElementById('dispGuest')

/////////
function addOneH(){
    homeCount+=1
    homeDis.textContent= homeCount
}

function addTwoH(){
    homeCount+=2 
    homeDis.textContent= homeCount
}

function addThreeH(){
    homeCount+=3
    homeDis.textContent= homeCount
}
////////////////////////////////////

function addOneG(){
    guestCount+=1
    guestDis.textContent= guestCount
}

function addTwoG(){
    guestCount+=2
    guestDis.textContent= guestCount
}

function addThreeG(){
    guestCount+=3
    guestDis.textContent= guestCount
}

function newGame(){
    homeCount= 0
    guestCount = 0
    homeDis.textContent= homeCount
    guestDis.textContent= guestCount
}