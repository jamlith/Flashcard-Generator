/*
 *  (Flashcard-Generator):
 *      index.js - The entry-point into the flashcard generator.
 *
 *-------------------------------------->8------------------------------------*/

var ClozeCard = require('./bin/ClozeCard.js');
var FlashCard = new ClozeCard("A needle in a haystack.", "needle");

console.log(FlashCard);
