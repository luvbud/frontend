/*
 * > Coded By Thomas
 * > 31102016
 * 
 * > #31
 */

// Word selection
// New word = ["Word name", "Hint"]
var word = [
["Biden", "He defeated incumbent president Donald Trump in the 2020 presidential election."], 
["Corona", "COVID-19 pandemic, the ongoing global pandemic."], 
["BTS", "It is a seven-member South Korean boy band that began formation in 2010 and debuted in 2013 under Big Hit Entertainment."], 
["Pandemic", "It is an epidemic of an infectious disease that has spread across a large region, for instance multiple continents or worldwide, affecting a substantial number of people."], 
["Vaccine", "It is a biological preparation that provides active acquired immunity to a particular infectious disease."], 
["Election", "It is a formal group decision-making process by which a population chooses an individual or multiple individuals to hold public office."], 
["Infection", "It is the invasion of an organism's body tissues by disease-causing agents, their multiplication, and the reaction of host tissues to the infectious agents and the toxins they produce."], 
["Bitcoin", "It is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto[15] and started in 2009."], 
["Elon Musk", "He is the founder, CEO, CTO and chief designer of SpaceX; early investor,[b] CEO and product architect of Tesla, Inc."], 
["Document", "A lot of text in the a file."], 
["Playground", "There school kids go to."], 
["temperature", "It is a physical quantity that expresses hot and cold."], 
["Samsung", "A company creates Phone, Tv, Monitor, SDD, Memory chip..."], 
["Apple", "You can imagine with i-phone"], 
["China", "The country which made COVID-19!!"], 
["Clock", "14:12 or 14pm"], 
["Biology", "It is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development and evolution."], 
["International", "It is an adjective (also used as a noun) meaning /'/between nations/'/."], 
["Economy", "It is an area of the production, distribution and trade, as well as consumption of goods and services by different agents."], 
["Goal", "It is an idea of the future or desired result that a person or a group of people envision, plan and commit to achieve."], 
["Social", "This interaction is considered OOOOOO whether they are aware of it or not, and whether the interaction is voluntary or involuntary."], 
["Football", "It is a family of team sports that involve, to varying degrees, kicking a ball to score a goal."], 
["Smartphone", "Something you've always on you."]]


// Game keyboard
var tastatur = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Game memory
var select = 0
var wordLeft = []
var fail = 0

// Web-page onload
window.onload = function() {
    gId("moveKeybord").addEventListener('touchmove', function(e) {
        wH = window.innerHeight
        tY = e.touches[0].clientY
        eL = gId("tastatur")
        resY = wH - tY - eL.offsetHeight
        if(resY < 0) {
            resY = 0
        } else if(resY > wH / 2) {
            resY = wH / 2
        }
        eL.style.bottom = resY + "px"
    }, false)
    createTastur()
}

// Start game
$(window).on("load", startGame);
function startGame() {
    // gId("home").className = "h"
    gId("result").className = "h"
    newGame()
}

// New game
function newGame() {
    clearTastatur()
    clearPlayer()
    createWord()
}

// Clear keyboard
function clearTastatur() {
    var e = document.getElementsByClassName("b")
    for(a = 0; a < e.length; a++) {
        e[a].setAttribute("data", "")
    }
}

// Clear player
function clearPlayer() {
    fail = 0
    wordLeft = []
    gId("g0").setAttribute("data", "false")
    gId("g1").setAttribute("data", "false")
    gId("g2").setAttribute("data", "false")
    gId("g3").setAttribute("data", "false")
    gId("g4").setAttribute("data", "false")
    gId("g5").setAttribute("data", "false")
    gId("g5").setAttribute("r", "false")
    gId("g5").setAttribute("l", "false")
    gId("g6").setAttribute("data", "false")
    gId("g6").setAttribute("l", "false")
    gId("g6").setAttribute("r", "false")
    gId("hintButton").setAttribute("data", "false")
    gId("hint").style.display = "none"
}

// Get new word
function createWord() {
    var d = gId("letter")
    d.innerHTML = ""
    select = Math.floor(Math.random() * word.length)
    for(a = 0; a < word[select][0].length; a++) {
        var x = word[select][0][a].toUpperCase()
        var b = document.createElement("span")
        b.className = "l" + (x == " " ? " ls" : "")
        b.innerHTML = "&nbsp"
        b.id = "l" + a;
        d.appendChild(b)
        
        if(x != " ") {
            if(wordLeft.indexOf(x) == -1) {
                wordLeft.push(x)
            }
        }
    }
}

// Create keyboard
function createTastur() {
    var tas = gId("keybord")
    tas.innerHTML = ""
    for(a = 0; a < tastatur.length; a++) {
        var b = document.createElement("span")
        b.className = "b"
        b.innerText = tastatur[a]
        b.setAttribute("data", "")
        b.onclick = function() {
            bTas(this)
        }
        tas.appendChild(b)
    }
}

// Game check, If show next error / game end
function bTas(a) {
    if(a.getAttribute("data") == "") {
        var x = isExist(a.innerText)
        a.setAttribute("data", x)
        if(x) {
            if(wordLeft.length == 0) {
                gameEnd(true)
            }
        } else {
            showNextFail()
        }
    }
}

// If letter "X" exist
function isExist(e) {
    e = e.toUpperCase()
    var x = wordLeft.indexOf(e)
    if(x != -1) {
        wordLeft.splice(x, 1)
        typeWord(e)
        return true
    }
    return false
}

// Show next fail drawing
function showNextFail() {
    fail++
    switch(fail) {
        case 1:
            gId("g0").setAttribute("data", "true")
            break;
        
        case 2:
            gId("g1").setAttribute("data", "true")
            break;
        
        case 3:
            gId("g2").setAttribute("data", "true")
            break;
        
        case 4:
            gId("g3").setAttribute("data", "true")
            gId("hintButton").setAttribute("data", "true")
            break;
        
        case 5:
            gId("g4").setAttribute("data", "true")
            break;
        
        case 6:
            gId("g5").setAttribute("data", "true")
            break;
        
        case 7:
            gId("g5").setAttribute("l", "true")
            break;
        
        case 8:
            gId("g5").setAttribute("r", "true")
            break;
        
        case 9:
            gId("g6").setAttribute("data", "true")
            gId("g6").setAttribute("l", "true")
            break;
        
        case 10:
            gId("g6").setAttribute("r", "true")
            gameEnd(false)
            break;
    }
}

function typeWord(e) {
    for(a = 0; a < word[select][0].length; a++) {
        if(word[select][0][a].toUpperCase() == e) {
            gId("l" + a).innerText = e
        }
    }
}

// Game result
function gameEnd(e) {
    var d = gId("result")
    d.setAttribute("data", e)
    if(e) {
        alert("You WIN! \nCongratulations, you found the word! \nGood Job!")
        // gId("rT").innerText = "You Win!"
        // gId("rM").innerHTML = "Congratulations, you found the word!<br/><br/>Good Job!"
    } else {
        alert("You LOSE! \nThe word was '" + word[select][0].toUpperCase() + "'\nBetter luck next time.")
        // gId("rT").innerText = "You Lose!"
        // gId("rM").innerHTML = "The word was <br/><br/>\"" + word[select][0].toUpperCase() + "\"<br/><br/>Better luck next time."
    }
    d.className = ""
}

// Show hint
function hint() {
    gId("hintText").innerText = word[select][1]
    gId("hint").style.display = "block"
}

// Exit hint
function hintExit() {
    gId("hint").style.display = "none"
}

// Get HTML ID element by name
function gId(a) {
    return document.getElementById(a)
}