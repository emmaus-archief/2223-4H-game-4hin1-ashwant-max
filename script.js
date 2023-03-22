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
var spelStatus = SPELEN;      
var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var speed = 10;
var Jump = true;
var vorigeJump = true;
var jumpspeed = 10;
var jumpspeler = false;
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
if (keyIsDown(87) && spelerY > 25){
  spelerY = spelerY - speed;
}
         
    if (Jump = keyIsDown(32)){
      jumpspeler = true }
  
  if (jumpspeler === true) {
  spelerY = spelerY - jumpspeed;
    jumpspeed = jumpspeed - 0.2

    if (spelerY > 695){
      jumpspeed = false;
    }
}
  if (keyIsDown(83) && spelerY < 695) {
  spelerY = spelerY + speed;
}
  if (keyIsDown(65) && spelerX > 25){
  spelerX = spelerX - speed;
}
  if (keyIsDown(68) && spelerX < 1255){
  spelerX = spelerX + speed;
}
  // vijand

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

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
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    
  }
}

