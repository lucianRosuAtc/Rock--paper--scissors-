// const possibleHands = ["💎", "📄", "✂️"]
const possibleHands = ["💎", "💷", "⚔️"]

let hand1 = document.getElementById("hand1")
let hand2 = document.getElementById("hand2")
document.getElementById("btn").addEventListener("click", run)
let winnerText = document.getElementById("winner_text")

function run(){
    pick(hand1)
    pick(hand2)
    const winner = getWinner()
        // choose winner or draw
    if(winner == null){
        renderDraw()
    }else{
        renderWinner(winner)
    }
}

function pick(display){
    resetHands()
    let randomNum = Math.floor(Math.random()* 3)
    let currentHand = possibleHands[randomNum]
    display.textContent = currentHand
}

// if the index values are = then is a draw
function getWinner(){
    const pick1 = possibleHands.indexOf(hand1.textContent)
    const pick2 = possibleHands.indexOf(hand2.textContent)
    if(pick1 == pick2){
        return null
    } 

// the exception: the logic to decide the winner between rock(index0) and scissor(index2) 
    if(pick1 ==0 && pick2 == possibleHands.length -1){
        return hand1

    }else if(pick2 == 0 && pick1 == possibleHands.length - 1 ){
        return hand2
    }

// the general rule: the smaller index in the array loses to the bigger index
    if(pick1 < pick2){
        return hand2
    }else{
        return hand1
    }

}

function renderWinner(hand){
    winnerText.textContent = `${hand.textContent} wins!`
    hand.classList.add("winner")
}

function renderDraw(){
    hand1.classList.add("draw")
    hand2.classList.add("draw")
    winnerText.textContent = "It's a draw!"
}

function resetHands(){
    hand1.classList.remove("winner", "draw")
    hand2.classList.remove("winner", "draw")
    winnerText.textContent = ""
}

