function translator(valueFromInput){
    lettersFromInput = valueFromInput.value.toUpperCase();
    
    for(letter of valueFromInput.value){
        let singleLetterFromInput = letter;
        let letterIndex = alphabetArray.indexOf(singleLetterFromInput);
        letterTranslatedToMorse += morseCodeArray[letterIndex] + " ";
    }
    updateView(); 
    letterTranslatedToMorse = " ";
}
