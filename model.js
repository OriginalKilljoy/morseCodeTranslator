const outputDiv = document.getElementById('output');
const morseCodeArray = [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'];
const alphabetArray = "abcdefghijklmnopqrstuvwxyz æøå";

let lettersFromInput = " ";
let letterTranslatedToMorse = " ";