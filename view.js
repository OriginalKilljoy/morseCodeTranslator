updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="mainDiv">
    <input type=text onchange="makeTranslation(this.value)"/>
    <div class="secondaryDiv">
    <div>${lettersFromInput}</div>
    <div>${letterTranslatedToMorse}</div>
    </div>
    </div>
    `
}