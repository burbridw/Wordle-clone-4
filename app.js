const fourLetterWords = ["blue", "club", "draw", "bear", "want", "sour", "help", "fast", "fall", "trip", "hard", "cake", "bike", "nice", "corn", "knee", 
"play", "slow", "cool", "fine", "city", "live", "jump", "left", "head", "rice", "wall", "park", "hall", "soda", "stop", "pork", "have", "ball", "cook", 
"rock", "drum", "bird", "case", "home", "food", "cute", "fish", "five", "taxi", "long", "ship", "went", "swim", "easy", "cold", "kite", "rope", "band", 
"pond", "room", "tree", "team", "kind", "star", "glue", "bath", "busy", "girl", "kiwi", "wash", "soup", "desk", "ride", "vest", "walk", "frog", "beef", 
"join", "arts", "make", "nose", "peru", "sing", "face", "milk", "math", "like", "hand", "talk", "boat", "book", "bean", "lake", "look", "turn", "pink", 
"bake", "soft", "post", "good", "read", "lion"]

const fourLetterWordsObj = {
    "blue": "./images/colours/img2.png", "club": "./images/clubactivities/img11.png", "draw": "./images/actions1/img25.png", "bear": "./images/animals/img1.png", 
    "want": "./images/actions2/img2.png", "sour": "./images/tastes/img4.png", "help": "./images/actions1/img12.png", "fast": "./images/conditions/img11.png", 
    "fall": "./images/seasons/img3.png", "trip": "./images/schoolevents/img2.png", "hard": "./images/conditions/img8.png", "cake": "./images/desserts/img1.png", 
    "bike": "./images/vehicles/img10.png", "nice": "./images/descriptions/img3.png", "corn": "./images/fruitsvegetables/img8.png", "knee": "./images/body/img5.png", 
    "play": "./images/actions2/img5.png", "slow": "./images/conditions/img12.png", "cool": "./images/descriptions/img7.png", "fine": "./images/feelings/img1.png", 
    "city": "./images/buildings/img7.png", "live": "./images/actions2/img14.png", "jump": "./images/actions1/img3.png", "left": "./images/directions/img5.png", 
    "head": "./images/body/img1.png", "rice": "./images/foods/img1.png", "wall": "./images/commonitems/img27.png", "park": "./images/buildings/img4.png", 
    "hall": "./images/buildings/img7.png", "soda": "./images/drinks/img5.png", "stop": "./images/actions1/img8.png", "pork": "./images/ingredients/img3.png", 
    "have": "./images/actions2/img10.png", "ball": "./images/commonitems/img1.png", "cook": "./images/actions1/img12.png", "rock": "./images/activities/img11.png", 
    "drum": "./images/instruments/img7.png", "bird": "./images/animals/img23.png", "case": "./images/stationary/img5.png", "home": "./images/dailyactivities/img9.png", 
    "food": "./images/actions1/img10.png", "cute": "./images/descriptions/img8.png", "fish": "./images/seaanimals/img5.png", "five": "./images/numbers/img5.png", 
    "taxi": "./images/vehicles/img3.png", "long": "./images/conditions/img3.png", "ship": "./images/vehicles/img7.png", "went": "./images/pastactions/img1.png", 
    "swim": "./images/actions1/img5.png", "easy": "./images/conditions/img7.png", "cold": "./images/weather/img5.png", "kite": "./images/activities/img8.png", 
    "rope": "./images/activities/img13.png", "band": "./images/clubactivities/img17.png", "pond": "./images/nature/img6.png", "room": "./images/school/img1.png", 
    "tree": "./images/nature/img12.png", "team": "./images/clubactivities/img1.png", "kind": "./images/personalities/img6.png", "star": "./images/shapes/img7.png", 
    "glue": "./images/stationary/img9.png", "bath": "./images/commonitems/img25.png", "busy": "./images/feelings/img8.png", "girl": "./images/people/img2.png", 
    "kiwi": "./images/fruitsvegetables/img13.png", "wash": "./images/dailyactivities/img14.png", "soup": "./images/foods/img19.png", "desk": "./images/commonitems/img21.png", 
    "ride": "./images/actions1/img16.png", "vest": "./images/clothes/img3.png", "walk": "./images/dailyactivities/img11.png", "frog": "./images/animals/img22.png", 
    "beef": "./images/ingredients/img1.png", "join": "./images/actions2/img13.png", "arts": "./images/subjects/img8.png", "make": "./images/actions1/img11.png", 
    "nose": "./images/body/img8.png", "peru": "./images/countries/img18.png", "sing": "./images/actions1/img1.png", "face": "./images/body/img2.png", "milk": "./images/drinks/img6.png", 
    "math": "./images/subjects/img5.png", "like": "./images/actions2/img1.png", "hand": "./images/body/img4.png", "talk": "./images/actions1/img24.png", 
    "boat": "./images/vehicles/img8.png", "book": "./images/commonitems/img11.png", "bean": "./images/fruitsvegetables/img3.png", "lake": "./images/nature/img4.png", 
    "look": "./images/actions2/img3.png", "turn": "./images/actions1/img9.png", "pink": "./images/colours/img6.png", "bake": "./images/actions1/img13.png", 
    "soft": "./images/tastes/img7.png", "post": "./images/buildings/img14.png", "good": "./images/feelings/img2.png", "read": "./images/actions1/img22.png", 
    "lion": "./images/animals/img5.png"
}

let word = ""
let randomSelectFour = "" 
let answerCount = 0
let round = 0
let correctGuess = 0
let gameActive = true
let inputArr = []
let answerArr = []
const dictionary = document.querySelector(".dictionary")
function buildDictionary() {
    fourLetterWords.forEach( (x) => {
        dictionary.innerHTML += `<div class="dictionary-image">${x} <img src="${fourLetterWordsObj[x]}"></div>`
    })

}

buildDictionary()
start()

function start() {
    randomSelectFour = Math.floor( Math.random()*98 )
    word = fourLetterWords[randomSelectFour]
    answerArr = word.split("")
    console.log(answerArr)
    answerCount = 0
    round = 0
    correctGuess = 0
    gameActive = true
    inputArr = []
    let allInputs = document.querySelectorAll(".answer-box")
    allInputs.forEach( (x) => {
        x.textContent = ""
        if (x.style.backgroundColor !== "rgb(243, 243, 231)")
        x.style.backgroundColor = "rgb(243, 243, 231)"
    })
    let allKeys = document.querySelectorAll(".key")
    allKeys.forEach( (x) => {
        if (x.style.backgroundColor !== "rgb(243, 243, 231)")
        x.style.backgroundColor = "rgb(243, 243, 231)"
    })
}

const delBtn = document.getElementById("delete")
const enterBtn = document.getElementById("enter")
const keyboardDiv = document.querySelector(".keyboard")
const messageBox = document.getElementById("message-box")
const endMessage = document.getElementById("end-message")
const endImage = document.getElementById("end-image")
const resetBtn = document.getElementById("reset-btn")
const endBox = document.querySelector(".reset-box")
const upperBox = document.querySelector(".upper-container")
const lowerBox = document.querySelector(".lower-container")
const imageBox = document.querySelector(".answer-image-container")
const dictionaryBtn = document.getElementById("dictionary-button")
const closeDictionaryBtn = document.getElementById("close-dictionary")
const answerBoxContainer = document.querySelector(".answer-box-container")

let answerInput = document.querySelector(".answer-active")
let answerBox0 = answerInput.children[0]
let answerBox1 = answerInput.children[1]
let answerBox2 = answerInput.children[2]
let answerBox3 = answerInput.children[3]

const qKey = keyboardDiv.children[0]
const wKey = keyboardDiv.children[1]
const eKey = keyboardDiv.children[2]
const rKey = keyboardDiv.children[3]
const tKey = keyboardDiv.children[4]
const yKey = keyboardDiv.children[5]
const uKey = keyboardDiv.children[6]
const iKey = keyboardDiv.children[7]
const oKey = keyboardDiv.children[8]
const pKey = keyboardDiv.children[9]
const aKey = keyboardDiv.children[10]
const sKey = keyboardDiv.children[11]
const dKey = keyboardDiv.children[12]
const fKey = keyboardDiv.children[13]
const gKey = keyboardDiv.children[14]
const hKey = keyboardDiv.children[15]
const jKey = keyboardDiv.children[16]
const kKey = keyboardDiv.children[17]
const lKey = keyboardDiv.children[18]
const zKey = keyboardDiv.children[21]
const xKey = keyboardDiv.children[22]
const cKey = keyboardDiv.children[23]
const vKey = keyboardDiv.children[24]
const bKey = keyboardDiv.children[25]
const nKey = keyboardDiv.children[26]
const mKey = keyboardDiv.children[27]

qKey.addEventListener("click",function() {
    press("q")
})
wKey.addEventListener("click",function() {
    press("w")
})
eKey.addEventListener("click",function() {
    press("e")
})
rKey.addEventListener("click",function() {
    press("r")
})
tKey.addEventListener("click",function() {
    press("t")
})
yKey.addEventListener("click",function() {
    press("y")
})
uKey.addEventListener("click",function() {
    press("u")
})
iKey.addEventListener("click",function() {
    press("i")
})
oKey.addEventListener("click",function() {
    press("o")
})
pKey.addEventListener("click",function() {
    press("p")
})
aKey.addEventListener("click",function() {
    press("a")
})
sKey.addEventListener("click",function() {
    press("s")
})
dKey.addEventListener("click",function() {
    press("d")
})
fKey.addEventListener("click",function() {
    press("f")
})
gKey.addEventListener("click",function() {
    press("g")
})
hKey.addEventListener("click",function() {
    press("h")
})
jKey.addEventListener("click",function() {
    press("j")
})
kKey.addEventListener("click",function() {
    press("k")
})
lKey.addEventListener("click",function() {
    press("l")
})
zKey.addEventListener("click",function() {
    press("z")
})
xKey.addEventListener("click",function() {
    press("x")
})
cKey.addEventListener("click",function() {
    press("c")
})
vKey.addEventListener("click",function() {
    press("v")
})
bKey.addEventListener("click",function() {
    press("b")
})
nKey.addEventListener("click",function() {
    press("n")
})
mKey.addEventListener("click",function() {
    press("m")
})

window.addEventListener("keydown", (x) => {
    if (gameActive) {
    if (x.key === "Enter") {
        checkGuess()
    } else if (x.key === "Backspace") {
        del()
    } else {
    if ( /[a-z]/.test(x.key) && x.key.length === 1) {
        press(x.key)
    }
    }
    } else {
    if (x.key === "Enter") {
        resetGame()
    }
}
})


function press(key) {
    if (answerBox0.textContent === "") { 
    answerBox0.textContent = key
    answerCount = 1
    inputArr.push(key)
    } else if (answerBox1.textContent === "") {
        answerBox1.textContent = key
        answerCount = 2
        inputArr.push(key)
    } else if (answerBox2.textContent === "") {
        answerBox2.textContent = key
        answerCount = 3
        inputArr.push(key)
    } else if (answerBox3.textContent === "") {
        answerBox3.textContent = key
        answerCount = 4
        inputArr.push(key)
    }
}

function del() {
    if (gameActive) {
    if (answerBox3.textContent !== "") { 
        answerBox3.textContent = ""
        inputArr.pop()
        answerCount = 3
        } else if (answerBox2.textContent !== "") {
            answerBox2.textContent = ""
            inputArr.pop()
            answerCount = 2
        } else if (answerBox1.textContent !== "") {
            answerBox1.textContent = ""
            inputArr.pop()
            answerCount = 1
        } else if (answerBox0.textContent !== "") {
            answerBox0.textContent = ""
            inputArr.pop()
            answerCount = 0
        }
    }
}

delBtn.addEventListener("click", function(){
    del()
})

enterBtn.addEventListener("click",function(){
    checkGuess()
})

resetBtn.addEventListener("click",function(){
    resetGame()
})

dictionaryBtn.addEventListener("click",function(){
    dictionary.classList.remove("dictionary-close")
})

closeDictionaryBtn.addEventListener("click",function() {
    dictionary.classList.add("dictionary-close")
})

function resetGame() {
    endBox.classList.add("hide-me")
    upperBox.classList.remove("go-transparent")
    lowerBox.classList.remove("go-transparent")
    answerInput.classList.remove("answer-active")
    let currentAnswerBox = answerBoxContainer.children[0]
    currentAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    let imageBoxes = document.querySelectorAll(".answer-image")
    imageBoxes.forEach( (x) => {
        x.textContent = ""
    })
    start()
}

function checkGuess() {
    let thisGuess = inputArr.join("")
    
    if (gameActive) {
    if (answerCount !== 4) {
        showMessage("Not enough letters")
    } else if ( !fourLetterWords.includes(thisGuess) ) {
        showMessage("Word not in list")
    } else {
        let currentImageBox = imageBox.children[round]
        console.log(currentImageBox)
        console.log(thisGuess)
        let currentImage = fourLetterWordsObj[thisGuess]
        console.log(currentImage)
        currentImageBox.innerHTML = `<img src=${currentImage}>`
        greenCheck()
    }
}
}

function showMessage(message) {
    messageBox.textContent = message
    messageBox.classList.remove("hide-me")
    setTimeout( () => {
        messageBox.classList.add("hide-me")
    }, 3000)
}

function greenCheck() {
    for ( let i = 0; i < answerArr.length; i++ ) {
        if (answerArr[i] === inputArr[i]) {
            let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="greenyellow"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i]) {
                    x.style.backgroundColor = "greenyellow"
                }
            })
            correctGuess++
            answerArr.splice( i, 1, "*")
            inputArr.splice( i, 1, "@")
            }
        }   
            if ( correctGuess === 4) {
            playerWins()
        } else {    
            yellowCheck()
    } 
}

function yellowCheck() {
    for ( let i = 0; i < answerArr.length; i++ ) {
        if (answerArr.includes(inputArr[i]) && answerArr[i] !== inputArr[i]) {
        let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="yellow"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i] && x.style.backgroundColor !== "greenyellow") {
                    x.style.backgroundColor = "yellow"
                }
            })
        let cutIndex = answerArr.indexOf(`${inputArr[i]}`)

        inputArr.splice( i, 1, "@")
        
        answerArr.splice( cutIndex, 1, "*")
        
        } 
    }  for ( let i = 0; i < 4; i++ ) {
        let currentAnswer = answerInput.children[i]
        let allKeys = document.querySelectorAll(".key")
        if (currentAnswer.style.backgroundColor !== "greenyellow" && currentAnswer.style.backgroundColor !== "yellow") {
            currentAnswer.style.backgroundColor = "darkgray"
            allKeys.forEach ( (x) => {
                if (x.textContent === currentAnswer.textContent && x.style.backgroundColor !== "greenyellow" && x.style.backgroundColor !== "yellow") {
                    x.style.backgroundColor = "darkgray"
                }
            })
        }
    }   if ( round < 5) {
        resetRound()
    }  else if ( round === 5 && correctGuess < 54) {
        gameOver()
    }
}

function playerWins() {
    gameActive = false
    endMessage.textContent = "You Win!"
    let correctImage = fourLetterWordsObj[word]
    endImage.innerHTML = `It was "${word}" <img src=${correctImage}>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
    
}

function gameOver() {
    gameActive = false
    endMessage.textContent = "You Lose!"
    let correctImage = fourLetterWordsObj[word]
    endImage.innerHTML = `It was "${word}" <img src=${correctImage}>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
}

function resetRound() {
    answerArr = word.split("")
    let currentAnswerBox = answerBoxContainer.children[round]
    currentAnswerBox.classList.remove("answer-active")
    round++
    let nextAnswerBox = answerBoxContainer.children[round]
    nextAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    inputArr = []
    correctGuess = 0
    answerCount = 0
}