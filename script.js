const overlayText = document.getElementById("overlay-text");
const newTextInput = document.getElementById("newText");

function changeFontSize(input) {
    let value = input.value;
    overlayText.style.fontSize = value + "px";
}

function changeTextColor(input) {
    var textColor = input.value;
    overlayText.style.color = textColor;
}

function changeFontFamily() {
    var fontSelector = document.getElementById("fontSelector");
    var selectedFont = fontSelector.options[fontSelector.selectedIndex].value;
    overlayText.style.fontFamily = selectedFont;
}

function applyTextChange() {
    const newText = newTextInput.value;
    
    if (newText.trim() !== "") {
        overlayText.textContent = newText;
        newTextInput.value = "";
    }
}