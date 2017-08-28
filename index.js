/*
 *  (Flashcard-Generator):
 *      index.js - The entry-point into the flashcard generator.
 *
 *-------------------------------------->8------------------------------------*/

var ClozeCard = require('./bin/ClozeCard.js');
var ClozeFlash = new ClozeCard("A needle in a haystack.", "needle");

console.log(ClozeFlash);

var BasicCard = require('./bin/BasicCard.js');
var BasicFlash = new BasicCard("What is bountiful inside a haystack?", "needles.");

console.log(BasicFlash);

//var ClozeErr = new ClozeCard("My hands are like a box of thumbs.", "fingers");
// should've thrown an error
//console.log(ClozeErr);

