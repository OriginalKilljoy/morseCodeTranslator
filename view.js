updateView()

function updateView(){
    outputDiv.innerHTML = /*HTML*/`
    <input type="text" onchange="translator(this)"/>
    <div>${lettersFromInput}</div>
    <div>${letterTranslatedToMorse}</div>
    `
}