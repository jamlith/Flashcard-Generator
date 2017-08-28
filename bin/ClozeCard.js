/*
 *  (Flashcard-Generator)
 *      ClozeCard.js - cloze card generator.
 *
 *---------------------------------------------------------8<----------------------------------------------------------*/

 function ClozeCard(fullText, cloze) {
    if (this instanceof ClozeCard) {
        this.cloze = cloze;
        this.fullText = fullText;
        this.partial = createQuestion(fullText, cloze);
    }
    else {
        return new ClozeCard(fullText, cloze);
    }
    function createQuestion(fullText, cloze) {
        console.log(`> createQuestion(${fullText}, ${cloze})...`);
        var x = fullText.indexOf(cloze);
        var y = x + cloze.length;
        if (x !== -1) {
            this.begins = fullText.slice(0, x);
            this.ends = fullText.slice(y);
            blanks = "...";
            part = this.begins + blanks + this.ends;
            return part;
            console.log(`  >> partial: ${this.partial}`);
        } else {
            // No substrings matching the cloze...
            throw Error("Cloze doesn't exist within the solution... Abort.");
        }
    }
 }

module.exports = ClozeCard;
