const decBtn = document.getElementById("decBtn")
const resBtn = document.getElementById("resBtn") 
const incBtn = document.getElementById("incBtn")
const numDisplay = document.getElementById("counterDisplay")

decBtn.addEventListener("click", decrease)
resBtn.addEventListener("click", reset)
incBtn.addEventListener("click", increase)

function decrease(e) {
    var value = Number(numDisplay.innerHTML)
    value--
    if (value < 0) {
        numDisplay.classList.remove("zero")
        numDisplay.classList.remove("positiveNumber")
        numDisplay.classList.add("negativeNumber")
    } else if (value == 0){
        numDisplay.classList.remove("negativeNumber")
        numDisplay.classList.remove("positiveNumber")
        numDisplay.classList.add("zero")
    }
        
    numDisplay.innerHTML = value
}

function increase(e) {
    var value = Number(numDisplay.innerHTML)
    value++
    if (value > 0) {
        numDisplay.classList.remove("zero")
        numDisplay.classList.remove("negativeNumber")
        numDisplay.classList.add("positiveNumber")
    } else if (value == 0 ) {
        numDisplay.classList.remove("negativeNumber")
        numDisplay.classList.remove("positiveNumber")
        numDisplay.classList.add("zero")
    }
        
    numDisplay.innerHTML = value
    
}

function reset() {
    numDisplay.classList.remove("negativeNumber")
    numDisplay.classList.remove("positiveNumber")
    numDisplay.classList.add("zero")
    numDisplay.innerHTML = "0"
}

