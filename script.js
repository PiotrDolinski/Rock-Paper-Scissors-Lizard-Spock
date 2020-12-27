const game = {
playerChoice : "",
computerChoice : "",
wins : 0,
loses : 0,
draws : 0,

}

function startGame(){

    if(!game.playerChoice) {
        return alert("Wybierz");
    }

    var n = Math.floor(Math.random()*5)
    game.computerChoice = hands[n].dataset.option
    
 
    document.querySelector(".computerchoice").setAttribute("src",hands[n].getAttribute("src"));


    if(game.playerChoice === game.computerChoice) {
        game.draws += 1
        document.querySelector(".draws").textContent=game.draws;
    }
    else if
    (game.playerChoice === "paper" && game.computerChoice === "rock" ||
    game.playerChoice === "paper" && game.computerChoice === "spock" ||
    game.playerChoice === "rock" && game.computerChoice === "scissors"||
    game.playerChoice === "rock" && game.computerChoice === "lizard"||
    game.playerChoice === "scissors" && game.computerChoice === "paper"||
    game.playerChoice === "scissors" && game.computerChoice === "lizard" ||
    game.playerChoice === "lizard" && game.computerChoice === "spock"||
    game.playerChoice === "lizard" && game.computerChoice === "paper" ||
    game.playerChoice === "spock" && game.computerChoice === "rock" ||
    game.playerChoice === "spock" && game.computerChoice === "scissors") 
    {

        game.wins += 1;
        document.querySelector(".wins").textContent=game.wins;
        

    }
    else {
        
        game.loses += 1;
        document.querySelector(".loses").textContent=game.loses;
        

}}

function choiceMaker(){
    
    hands.forEach(hand => hand.style.border= "none");
    this.style.border = "1px solid grey";
    game.playerChoice = this.dataset.option;

    document.querySelector(".playerchoice").setAttribute("src",this.getAttribute("src"));
    startGame();
}




const hands=[...document.querySelectorAll('.select img')];
hands.forEach(hand => hand.addEventListener('click', choiceMaker))




