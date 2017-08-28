/*
 *  (Flashcard-Generator)
 *      ClozeCard.js - cloze card generator.
 * 
 *---------------------------------------------------------8<----------------------------------------------------------*/

 function ClozeCard(full, cloze) {
     if (!(this instanceof ClozeCard)) {
        return new ClozeCard(full, cloze);
     }
    function removeCloze(text, cloze) {
        var IndexA = text.indexOf("cloze");
        if (IndexA !== -1) {
            // cloze exists...
            text.replace(`/${cloze}/\.\.\./`);
            console.log('text');
        }
    }
 }