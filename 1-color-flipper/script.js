var isSimpleMode = true


const colorName = [
    "black",
    "white",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
];

const colorHex = [
    "#000000",
    "#FFFFFF",
    "#FF0000",  // Red
    "#008000",  // Green
    "#0000FF",  // Blue
    "#FFFF00",  // Yellow
    "#FFA500",  // Orange
    "#800080",  // Purple
    "#FFC0CB",  // Pink
];

document.getElementById("simp").addEventListener("click", changeToSimp)

document.getElementById("hexBtn").addEventListener("click", changeToHex)

const display = document.getElementById("displayP")

document.getElementById("changeBg").addEventListener("click", changeBG)

function changeToHex(e) {
    isSimpleMode = false
    console.log("hex")
}

function changeToSimp(e) {
    isSimpleMode = true
    console.log("sim")
}

function changeBG() {

    if (isSimpleMode) {
        colorIndex = getRandomInt(0, colorHex.length-1)
        document.body.style.backgroundColor = colorHex[colorIndex]
    display.innerHTML = "Background Color: " + `<span class="color-name">${colorName[colorIndex]}</span>`
    }
    else {
        rndColor = getRandomHexColor()
        document.body.style.backgroundColor = rndColor;
        display.innerHTML = "Background Color: " + `<span class="color-name">${rndColor}</span>`
    }

    //document.body.style.backgroundColor = "#DDFF55"
    console.log("change")

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getRandomHexColor() {
    // Generate a random integer between 0 and 16777215 (0xFFFFFF in hexadecimal)
    const randomInt = Math.floor(Math.random() * 16777215);

    // Convert the integer to a hexadecimal string and pad it with zeros if needed
    const hexColor = randomInt.toString(16).padStart(6, '0');

    // Add a '#' at the beginning to make it a valid hex color
    return `#${hexColor}`;
}


  