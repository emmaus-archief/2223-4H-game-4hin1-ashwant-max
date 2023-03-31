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
var spelerY = 700 // y-positie van speler
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
var speed = 6

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

    if (spelerY > 695) {
      jumpspeler = false;
    }
  }
  if (keyIsDown(65) && spelerX > 25) {
    spelerX = spelerX - speed;
  }
  if (keyIsDown(68) && spelerX < 1255) {
    spelerX = spelerX + speed;
  }
  // vijand
  if (enemyX > 1300)
    enemyX = -100
  enemyX += speed;

  if (speed < 0) {
    speed += 1
  }

  

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
  if (spelerX - enemyX < 110 && spelerX - enemyX > -30 && spelerY - enemyY < 121 && spelerY - enemyY > -30) {
    console.log("botsing");
    spelStatus = GAMEOVER
  }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  background('blue');
  // vijand
  fill(255, 0, 0);
  rect(enemyX, enemyY, 80, enemyheight);
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);



  // punten en health

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

  // Kleur de achtergrond blauw, zodat je het kunt zien
  //background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
var reset = function(){
  spelerX = 200;
  spelerY= 700;
  enemyX = 800
  enemyY = 600
}
var gameover2 = function(){
  textSize(100)
    fill("red")
    text("GHET GUD", 100, 100)
    text("klick spacy to leturn", 100, 200)
}
 var uitleg2 = function() {
    background("green")
   textSize(101)
   fill("red")
   text("groen" ,100,100)
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
    if (keyIsDown(13)) {
      spelStatus = SPELEN;
    }

  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    gameover2();
    reset();
    if (keyIsDown(32)){
      spelStatus = UITLEG;
    }
  }

 
}