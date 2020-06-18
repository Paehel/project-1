var dice;
var d1, d1I;
var d2, d2I;
var d3, d3I;
var d4, d4I;
var d5, d5I;
var d6, d6I;
var diceAnimation, move;
var rand;
var form;
var title;
var input;
var button;

function preload(){
  d1I = loadAnimation("1.png");
  d2I = loadAnimation("2.png");
  d3I = loadAnimation("3.png");
  d4I = loadAnimation("4.png");
  d5I = loadAnimation("5.png");
  d6I = loadAnimation("6.png");
  diceAnimation = loadAnimation("1.png", "2.png", "3.png", "4.png", "5.png", "6.png");
}

function setup() {
  createCanvas(displayWidth - 200,displayHeight - 200);

  title = createElement('h1');
  input = createInput("");
  button = createButton('OK');

  title.html("Guess the number on the dice");
  console.log(title);
  title.position(450,50);

  input.position(550,270);
  button.position(580,340)

  move = createSprite(200,200,50,50);
  move.addAnimation("dice", diceAnimation);
  move.addAnimation("dice1", d1I);
  move.addAnimation("dice2", d2I);
  move.addAnimation("dice3", d3I);
  move.addAnimation("dice4", d4I);
  move.addAnimation("dice5", d5I);
  move.addAnimation("dice6", d6I);

  
}

function draw() {
  background("white");  

  if(mousePressedOver(move)){
    rand = Math.round(random(1,6));

    if(rand === 1){
     move.changeAnimation("dice1", d1I);

    }else if(rand === 2){
      move.changeAnimation("dice2", d2I);

    }else if(rand === 3){
      move.changeAnimation("dice3", d3I);

    }else if (rand === 4){
      move.changeAnimation("dice4", d4I);

    }else if(rand === 5){
      move.changeAnimation("dice5", d5I);

    }else if (rand === 6){
      move.changeAnimation("dice6", d6I);

    }
    
  }

    
   


  

  drawSprites();
}