/*
 *  (Flashcard-Generator):
 *      BasicCard.js - holds the methods for managing a basic flashcard
 * 
 *--------------------------------------------------------->8----------------------------------------------------------*/

function BasicCard(front, back) {
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front, back);
    }

    this.front = front;
    this.back = back;
}

module.exports = BasicCard;