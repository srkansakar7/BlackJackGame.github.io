let sum=0
let cards=[]
let hasBlackJack=false
let isAlive=false
let message=""
let msgEl=document.getElementById("message-El")
let startGameEl=document.getElementById("startGame-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")
let hitmeEl=document.getElementById("hitme-el")
let moneyEl=document.getElementById("Money-el")
let holdEl=document.getElementById("hold-el")
let restartEl=document.getElementById("restart-el")
let wonEl=document.getElementById("won-el")

startGameEl.addEventListener("click",startGame)
hitmeEl.addEventListener("click",newCard)
holdEl.addEventListener("click",hold)
restartEl.addEventListener("click",startGame)

let player={
    name: "Player",
    chips: 100
}
let playerEl=document.getElementById("Player-el")
playerEl.textContent=player.name+": "
moneyEl.textContent="Rs."+player.chips

let count=0

function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13) + 1
    if(randomCard===1){
        return randomCard=11
    }else if(randomCard>10){
        return randomCard=10
    }else{
        return randomCard
    }
}

function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let charge= 10
    cards=[firstCard, secondCard]
    sum = firstCard + secondCard
    hitmeEl.textContent="HIT ME"
    if(hitmeEl.style.display==="none"){
        hitmeEl.style.display="initial"
    }
    if(isAlive==true){
        count++
        console.log(count)
        restartEl.style.display="none"
        renderGame()
    }else{
        hitmeEl.textContent="GAME OVER"
    }    
}

function renderGame(){
        startGameEl.style.display="none"
        wonEl.style.display="none"
        cardEl.textContent="Cards: |"
    for(let i=0; i<cards.length; i++){
        cardEl.textContent+= cards[i]+ "|"
        sumEl.textContent="Sum: "+sum
    }
    if (sum < 21) {
        message="Do you want to draw a new card?🙂"
        //startGameEl.textContent="HOLD"
        if(count>0){
            startGameEl.onclick=null
        }
    } else if (sum === 21) {
        message="Wohoo! You've got Blackjack!"
        hasBlackJack=true
    } else if (sum > 21) {
        message="You're out of the game! "
        isAlive=false
        hitmeEl.textContent="GAME OVER"
    }
    if(isAlive===true){
        holdEl.style.display="block"
    }else if(isAlive===false){
        holdEl.style.display="none"
        restartEl.style.display="block"
    }
    if(hasBlackJack===true){
        holdEl.style.display="none"
        wonEl.style.display="block"
        hitmeEl.style.display="none"
        restartEl.style.display="block"
        hasBlackJack=false
    }
    msgEl.textContent=message
    console.log(message)
    console.log("Blackjack?-->"+hasBlackJack)
    console.log("Is game still alive? -->"+ isAlive)
}

function newCard(){
    if(hasBlackJack==false && isAlive==true){
        let newcard=getRandomCard()
        sum+= newcard
        cards.push(newcard)
    
        renderGame()
    }else{
        isAlive=false
        hitmeEl.textContent="GAME OVER"
    }
}

function hold(){
    alert("Game Holded")
    isAlive=false
    if(isAlive==false){
        holdEl.style.display="none"
        hitmeEl.textContent="GAME OVER"
        restartEl.style.display="block"
    }else{
        restartEl.style.display="none"
    }
}