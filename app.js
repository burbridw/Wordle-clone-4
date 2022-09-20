const fourLetterWords = ["blue", "club", "draw", "bear", "want", "sour", "help", "fast", "fall", "trip", "hard", "cake", "bike", "nice", "corn", "knee", 
"play", "slow", "cool", "fine", "city", "live", "jump", "left", "head", "rice", "wall", "park", "hall", "soda", "stop", "pork", "have", "ball", "body", 
"cook", "rock", "drum", "bird", "case", "home", "food", "cute", "fish", "five", "taxi", "long", "ship", "went", "swim", "easy", "cold", "kite", "rope", 
"band", "pond", "room", "tree", "team", "kind", "star", "glue", "bath", "busy", "girl", "kiwi", "wash", "soup", "desk", "ride", "vest", "walk", "frog", 
"beef", "join", "arts", "make", "nose", "peru", "sing", "face", "milk", "math", "like", "hand", "talk", "boat", "book", "bean", "lake", "look", "turn", 
"pink", "bake", "soft", "post", "good", "read", "lion"]
console.log(fourLetterWords.length)

let word = ""
let randomSelectFour = "" 
let answerCount = 0
let round = 0
let correctGuess = 0
let gameActive = true
let inputArr = []
let answerArr = []

start()



console.log(answerArr)


function start() {
    randomSelectFour = Math.floor( Math.random()*99 )
    word = fourLetterWords[randomSelectFour]
    answerArr = word.split("")
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
const resetBtn = document.getElementById("reset-btn")
const endBox = document.querySelector(".reset-box")

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
    if (x.key === "Enter") {
        checkGuess()
    } else if (x.key === "Backspace") {
        del()
    } else {
    if ( /[a-z]/.test(x.key) && x.key.length === 1) {
        press(x.key)
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
    endBox.classList.add("hide-me")
    
    answerInput.classList.remove("answer-active")
    let currentAnswerBox = answerBoxContainer.children[0]
    currentAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    start()
})

function checkGuess() {
    let thisGuess = inputArr.join("")
    
    if (gameActive) {
    if (answerCount !== 4) {
        showMessage("Not enough letters")
    } else if ( !fourLetterWords.includes(thisGuess) ) {
        showMessage("Word not in list")
    } else {
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
            console.log("green" + i)
            let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="green"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i]) {
                    x.style.backgroundColor = "green"
                }
            })
            correctGuess++
            answerArr.splice( i, 1, "*")
            inputArr.splice( i, 1, "@")
            console.log(answerArr)
            console.log(inputArr)
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
        console.log("yellow" + i)
        let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="goldenrod"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i] && x.style.backgroundColor !== "green") {
                    x.style.backgroundColor = "goldenrod"
                }
            })
        console.log(answerArr.indexOf(`${inputArr[i]}`))
        let cutIndex = answerArr.indexOf(`${inputArr[i]}`)

        inputArr.splice( i, 1, "@")
        
        answerArr.splice( cutIndex, 1, "*")
        
        console.log(answerArr)
        console.log(inputArr)
        } 
    }  for ( let i = 0; i < 4; i++ ) {
        let currentAnswer = answerInput.children[i]
        let allKeys = document.querySelectorAll(".key")
        if (currentAnswer.style.backgroundColor !== "green" && currentAnswer.style.backgroundColor !== "goldenrod") {
            currentAnswer.style.backgroundColor = "grey"
            console.log(currentAnswer.textContent)
            allKeys.forEach ( (x) => {
                if (x.textContent === currentAnswer.textContent && x.style.backgroundColor !== "green" && x.style.backgroundColor !== "goldenrod") {
                    x.style.backgroundColor = "grey"
                }
            })
        }
    }   if ( round < 5) {
        resetRound()
    }  else if ( round === 5 && correctGuess < 4) {
        gameOver()
    }
}

function playerWins() {
    console.log("player wins")
    gameActive = false
    endMessage.textContent = "You Win!"
    endBox.classList.remove("hide-me")

}

function gameOver() {
    console.log("Game Over")
    gameActive = false
    endMessage.textContent = "You Lose!"
    endBox.classList.remove("hide-me")
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

