/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"
//vorigeJump === false && Jump === true (1 x klikje) vorigeJump = Jump 
/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;

var spelStatus = UITLEG;
var spelerX = 200; // x-positie van speler
var spelerY = 865 // y-positie van speler
var speed = 10;
// var Jump = true; 
// var vorigeJump = true;
var jumpspeed = 6;
var jumpspeler = false;
var jumpstartingspeed = 8;
var gravity = 0.2;
var enemyY = 600;
var enemyX = 800;
var enemyheight = 121;
var speed2 = 2;
var speed3 = 4;
var score = 0;
var imguitleg;
var imgspeel;
var imgplayer;
var mariogif;
var enemygif;
var doodimg;



/*var speedomhoog = 10
var speedomlaag = 10
var speedrechts = 10
var speedlinks= 10*/

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler

  if (jumpspeler === false && keyIsDown(32)) {
    jumpspeler = true
    jumpspeed = jumpstartingspeed;
  }

  if (jumpspeler === true) {
    spelerY = spelerY - jumpspeed;
    jumpspeed = jumpspeed - gravity

    if (spelerY >= 665) {
      jumpspeler = false;
    }
  }
  if (keyIsDown(65) && spelerX > 25) {
    spelerX = spelerX - speed;
  }
  if (keyIsDown(68) && spelerX < 1255) {
    spelerX = spelerX + speed;
  }

  if (keyIsDown(70)) {
  spelStatus = GAMEOVER;
  
    }
  // vijand
  enemyX += speed2 * speed3;
  if (enemyX <= -100 || enemyX >= 1100) {
    speed2 = -speed2;
  }

  if (score >= 10) {
    enemyX += speed2 * speed3 ;
   }
  /*for(var i = 0; i<10; i = i+5){
    if (score >= i){
      speed3 = speed3+1
    }
  }

  for(var j = 0; j<10; j= (j+5)+1){
    if(score >= j){
      speed3 = 4
    }
  }*/
  
  if(score >= 5) {
    speed3 = speed3 + 1
  }

  if(score >= 6) {
    speed3 = 4
  }

  /*if(score >= 10) {
    speed3 = speed3 + 1
  }

  if(score >= 11) {
    speed3 = 4
  }

  if(score >= 15) {
    speed3 = speed3 + 1
  }

  if(score >= 16) {
    speed3 = 4
  }

  if(score >= 20) {
    speed3 = speed3 + 1
  }

  if(score >= 21) {
    speed3 = 4
  }

  if(score >= 25) {
    speed3 = speed3 + 1
  }

  if(score >= 26) {
    speed3 = 4
  }*/

  /* if( enemyX === 0 && enemyX > 0) {
     enemyX = enemyX + 8 } */
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (spelerX - enemyX < 190 && spelerX - enemyX > +59 && spelerY - enemyY < 85 && spelerY - enemyY > -30) {
    console.log("botsing");
    spelStatus = GAMEOVER;
    
  
  }
  
  // botsing kogel tegen vijand

  // update punten en health

    score = score +0.02
  
  

};

function preload() {
  imguitleg = loadImage('plaatjebeginschrm.png');
  imgspeel = loadImage('prachtplaatje.jpeg');
  mariogif = loadImage('mario.gif');
  enemygif = loadImage('enemy.gif');
  doodimg = loadImage('dood.png')
  
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  background(imgspeel);
  //text(score, 30,100)
  // vijand
  fill(255, 0, 0);
  image(enemygif, enemyX, enemyY, 300, enemyheight)
  //rect(enemyX, enemyY, 80, enemyheight);
  // kogel

  // speler

  fill("black");
  ellipse(spelerX, spelerY, 10, 10);
  image(mariogif, spelerX - 25, spelerY - 25, 80, 80)



  // punten en health
text(floor(score), 100,100)
};


/**
 * return true als het gameover is
 * anders return false
 */

var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...

  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

 
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
var reset = function(){
  spelerX = 200;
  spelerY= 665;
  enemyX = 800;
  enemyY = 600;
  score = 0;
  speed3 = 4;
  
}
var gameover2 = function(){
  background('green');
  image(doodimg, 60, -250, 1200, 1200);
  text(floor(score),590,200);
  text('space to return' ,350,500);
  /*textSize(100)
    fill("red")
    text("GHET GUD", 100, 100) 
    text("klick spacy to leturn", 100, 200)*/
  
}
 var uitleg2 = function() {
    background(imguitleg)
   textSize(101)
}

function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }

  if (spelStatus === UITLEG) {
    console.log("uitleg");
    uitleg2();
    reset();
    if (keyIsDown(13)) {
      spelStatus = SPELEN;
    }

  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    gameover2();
    //reset();
    if (keyIsDown(32)){
      spelStatus = UITLEG;
    }
  }

 
}
