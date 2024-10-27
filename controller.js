function makeTranslation(valueFromInput){
    lettersFromInput = valueFromInput.toLowerCase();

    for(letter of lettersFromInput){

        let letterIndex = alphabetArray.indexOf(letter);
        letterTranslatedToMorse += morseCodeArray[letterIndex] + ' ';
    }
    
    updateView()
    letterTranslatedToMorse = ' ';
}