/*
 *  (Flashcard-Generator):
 *      BasicCard.js - holds the methods for managing a basic flashcard
 *
 *--------------------------------------------------------->8---------------------------------------------------------*/


 // create an object with 2 properties, front and back.  The user can call this either by using the reserved name, like
 // a function, or they can use it to instantiate an object with the new command
function BasicCard(front, back) {
    // check if 'this' exists
    if (!(this instanceof BasicCard)) {
        // the lack of 'this' means the function was called in a stupid way.
        return new BasicCard(front, back);
    }

    this.front = front;
    this.back = back;
}

module.exports = BasicCard;
