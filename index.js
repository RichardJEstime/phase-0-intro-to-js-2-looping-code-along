// Code your solutions in this file
function writeCards(names, event) {
    let thankYouCards = [];
    for(let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    } 
    return thankYouCards;
}

function countDown(number) {
    while (0 < number){
        console.log(number) 
        number--
    }
    console.log(number)
}

//10,9,8,7,6,5,4,3,2,1,0

