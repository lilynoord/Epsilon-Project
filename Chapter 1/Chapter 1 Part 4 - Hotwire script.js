
openB = document.getElementById("openButton");
openB.onclick = async function(){
        divhide("3");
        divshow("right1");
        change("testButton","buttonHide");
        
}
closeB = document.getElementById("closeButton");
closeB.onclick = async function(){
        divhide("right1");
        divshow("3");
        change("testButton","testButton");
}




//Sleep function
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

//Hide/change class element functions
function hide(ID){document.getElementById(ID).className = "invis";}
function change(ID,Class) {document.getElementById(ID).className = Class;}
function divhide(ID){document.getElementById(ID).className = "divhide";}
function write(ID,text){document.getElementById(ID).innerText = text;}
function divshow(ID){document.getElementById(ID).className = "divcenter";}
function clearWrite(ID){document.getElementById(ID).innerText = "";}
function clear(ID){document.getElementById(ID).innerHTML = "";hide(ID);}

//Console Message Functions
const show = document.getElementById("showConsole");
let textHolder = "";
show.onclick = function(){if (document.getElementById("msg").className === "txt1"){hideConsole();} else {showConsole();}}
function showConsole(){change("msg","txt1");write("msg",textHolder)}
function hideConsole(){change("msg","hidetext");clearWrite("msg");}
function hideInput(){divhide("divCode");divhide("divEnter");document.getElementById("code").value="";}
function showInput(){divshow("divCode");divshow("divEnter");}
function clearInput(){document.getElementById("code").value="";}
let typeSpeed = 75;
let CursorBlinkSpeed = 400;let cursor = "|";
let fast = false;
const speed = document.getElementById("textSpeed");
speed.onclick = function(){if(!fast){typeSpeed = 20;CursorBlinkSpeed = 150;write("textSpeed","Slower");fast=true;} else {typeSpeed = 75;CursorBlinkSpeed = 400;write("textSpeed","Faster");fast=false;}}


async function cursorBlink(message,times){var i = times;document.getElementById("msg").className = "txt1";while (i > 0){document.getElementById("msg").innerText = message + cursor;await sleep(CursorBlinkSpeed);document.getElementById("msg").innerText = message;await sleep(CursorBlinkSpeed);i-=1;}}

async function type(txt,prior = ""){
    // console.log(document.getElementById("msg").innerText);

    let message = prior;let s1 = txt;for (let x in s1){
    // console.log(document.getElementById("msg").innerText);

        if (s1[x] === "`" ) {
            await cursorBlink(message,1);
        } else if (s1[x] === "~"){
            await cursorBlink(message,3);
        } else if (s1[x] === "\\"){
            message = clearmsg();
            await sleep(1000)
        }else if (s1[x] === "_"){
            await sleep(typeSpeed);
            message += "\n";
            document.getElementById("msg").innerText = message + cursor;
        } else if (s1[x] === "»"){ //alt-]
            glitchMessage(s1[x]);
        } else if (s1[x] === "«"){ //alt-[
            glitchMessage(s1[x]);
        }else if (s1[x] === "ß"){ //alt-s
            glitchMessage(s1[x]);
        }else if (s1[x] === "æ"){ //alt-z
            glitchMessage(s1[x]);
        }else if (s1[x] === "ð"){ //alt-d
            glitchMessage(s1[x]);
        }else {
            await sleep(typeSpeed);
            message += s1[x];
            document.getElementById("msg").innerText = message + cursor;
        }}
        textHolder = message;
        return message;
    }
function clearmsg(){document.getElementById("msg").className = "hidetext";return "";}
async function glitchMessage(n){
    if (n === "»"){
        document.getElementById("msg").className = "glitch1";
        await sleep(200);
        document.getElementById("msg").className = "txt1";
        await sleep(50);
        document.getElementById("msg").className = "glitch1";
        await sleep(100);
        document.getElementById("msg").className = "txt1";
    } else if (n === "«"){
        document.getElementById("msg").className = "glitch2";
        await sleep(200);
        document.getElementById("msg").className = "txt1";
    } else if (n === "ß"){
        document.getElementById("msg").className = "glitch3";
        await sleep(100);
        document.getElementById("msg").className = "txt1";
    } 
    
}
//blinker control function
let blinkerControl = 0
document.getElementById("blinker").onclick = function() {blinkerControl = 1;};
async function blinker(morseMessage){
    let morse = morseMessage.split("");change("blinker","blink1");
    while (blinkerControl === 0){for (let x in morse){if (blinkerControl === 1){break;}await sleep(200);if (morse[x] === "/") {await sleep(1200);} else if (morse[x] === " ") {await sleep(800);} else if (morse[x] === "-") {change("blinker","blink2");await sleep(800);change("blinker","blink1");} else if (morse[x] === ".") {change("blinker","blink2");await sleep(250);change("blinker","blink1");}}} change("blinker","blinkhide");await sleep(2000);hide("blinker");input();return false;}


//document.getElementById("ID").onclick = function() {func()};
//Generic Input Stuff
step = 0
answer0 = "CORRUPTION"; //Password to enter, usually
answer1 = "";
answer2 = "";
answer3 = "";
answer4 = "";
answer5 = "";
function input(){
    let code = document.getElementById("code").value.toUpperCase();
    // console.log("Input received");
    // console.log(step)
    if (step===0){
        if (code === answer0){step1();}
    } else if (step ===1){
        if (code === answer1){step2();}
    } else if (step ===2){
        if (code === answer2){step3();}
    } else if (step ===3){
        if (code === answer3){step4();}
    } else if (step ===4){
        if (code === answer4){step5();}
    } else if (step ===5){
        if (code === answer5){step6();}
    }
    return false;
}
let blinkMessage = " "
//!!! Remember to set 
// document.getElementById("code").value = "";
//After each input!!!
function step0(){step=0;} //Initial Step, if there is one
async function step1(){hideInput();divshow(1);change("blinker","blinkhide"); await sleep(2000);change("blinker","blink0"); await sleep(1000);blinkerControl = 0;blinker(blinkMessage);step=1;document.getElementById("code").value = "";} //First step, usually a blinker
let text1 = ">~~_>_>_> ERROR_> ERROR_> ERROR_>_> ERROR: Transceiver Inoperative _>_> Reason: Internal Damage _>_> Damage Source:~ External Code Injection _>_> Damage Assessment: Critical, Immediate action required _>_> Calculating best recommended action.`.`.`_>_> Recommended action: initiate manual repairs _>_> Downloading repair guide.`.`.` _>_> ERROR: Repair guide unavailable _>`_>`_>` Good luck... ";
async function step2(){divhide("1");showConsole();change("textSpeed","consoleButton");await type(text1);await sleep(1000);step=2;hideConsole();change("showConsole","consoleButton");await sleep(1000);step3();}
async function step3(){divshow("3");step=3;}
async function step4(){step=4;} 
async function step5(){step=5;}
let text2 = "\\>~_> Testing transceiver`.`.`.`_>_> Transceiver Status: Operational. ~ _>_> GENERATING NEW PASS CODE ____******************************__******************************__********** H`O`T`W`I`R`E ***********__******************************__******************************~~__.";
async function step6(){
    // console.log(document.getElementById("msg").innerText);
    step=6;
    let ml = ["right1","rightPanel","Right","3"]
    clearmsg();
    for (let x in ml){
        divhide(ml[x]);
    }
    // console.log(document.getElementById("msg").innerText);
    hideInput();showConsole();
    await sleep(2000);
    // console.log(document.getElementById("msg").innerText);
type(text2);}


class KeyLight {
    constructor(name,color){
        this.name = name;
        this.color = color;
        let n = this.name;
        let c = "keyLight"+this.color;
        change(n,c);
    }
    get col(){
        return this.color;
    }
    newColor(col){
        this.color = col;
        let n = this.name;
        let c = "keyLight"+this.color;
        change(n,c);
    }
}
let keyLight = new KeyLight("keyLight","White");

class wireButton {
    constructor(name,color){
        this.name = name;
        this.color = color;
        
        change(this.name,("light"+this.color));
        
    }
    click(){
        let newCol = keyLight.col;
        keyLight.newColor(this.color);
        this.color = newCol;
        change(this.name,("light"+this.color));
    }
    connectedTo(){
        let c = this.color;
        // console.log(c);
        if (c==="Red"){
            return "A1";
        } else if (c==="Orange") {
            return "B1";
        } else if (c==="Purple") {
            return "C1";
        } else if (c==="Green") {
            return "D1";
        } else if (c==="Blue") {
            return "E1";
        } else if (c==="White") {
            return "F1";
        }
    }
}



let a2 = new wireButton("a2","Purple"); 
let b2 = new wireButton("b2","Blue");
let c2 = new wireButton("c2","Green");
let d2 = new wireButton("d2","Orange");
let e2 = new wireButton("e2","Red");
let f2 = new wireButton("f2","Orange");

function right(b,c){
    change(b+"1","onLightGood");
    change(b+"2","onLightGood");
    change(c,"onLightGood")
}


function wrong(b,c){
    change(b+"1","onLightBad");
    change(b+"2","onLightBad");
    
    change(c,"onLightBad")
}
async function tester(b,testee,color){
    // console.log(testee.name,testee.color,color)
    if (testee.color === color){
        right(b,testee.connectedTo());
        await sleep(testTime*3)
        return true;
    } 
    wrong(b,testee.connectedTo());
    await sleep(testTime*3)
    return false;
}
let testTime = 800
async function testOn(a,b,c){
    change(a,"onLightTest");
    await sleep(testTime);
    change(b,"onLightTest");
    await sleep(testTime+200);
    // console.log(c,c.connectedTo())
    change(c.connectedTo(),"onLightTest")
    await sleep(testTime);

}

function turnOff(){
    change("A1","offLight");change("A2","offLight");
    change("B1","offLight");change("B2","offLight");
    change("C1","offLight");change("C2","offLight");
    change("D1","offLight");change("D2","offLight");
    change("E1","offLight");change("E2","offLight");
    change("F1","offLight");change("F2","offLight");
}

function isCorrect(c){
    for (let x in c){
        // console.log(c[x],!c[x]);
        if(!c[x]){
            return false;
        }
    }
    return true;
}
async function testSolution(){
    // console.log(document.getElementById("msg").innerText);
    turnOff();
    // console.log("testing");

    let correct = [false,false,false,false,false,false];
    await sleep(100);
    change("testLight","testLightYellow");
    await sleep(testTime);
    await testOn("A1","A2",a2);
    correct[0] = await tester("A",a2,"White");
    await sleep(testTime);
    await testOn("B1","B2",b2);
    correct[1] = await tester("B",b2,"Purple");
    await sleep(testTime);
    await testOn("C1","C2",c2);
    correct[2] = await tester("C",c2,"Blue");
    await sleep(testTime);
    await testOn("D1","D2",d2);
    correct[3] = await tester("D",d2,"Red");
    await sleep(testTime);
    await testOn("E1","E2",e2);
    correct[4] = await tester("E",e2,"Green");
    await sleep(testTime);
    await testOn("F1","F2",f2);
    correct[5] = await tester("F",f2,"Orange");
    await sleep(testTime);
    // console.log(correct);
    // console.log(document.getElementById("msg").innerText);

    if(isCorrect(correct)){
        change("testLight","testLightGreen");
        await sleep(2000);
        return true;
    } else {
        change("testLight","testLightRed");
        await sleep(1200);
        change("testLight","testLightOff");
        await sleep(400);
        change("testLight","testLightRed");
        await sleep(400);
        change("testLight","testLightOff");
        await sleep(400);
        change("testLight","testLightRed");
        await sleep(400);
        change("testLight","testLightOff");
        await sleep(400);
        change("testLight","testLightRed");
        await sleep(400);
        change("testLight","testLightOff");
        await sleep(400);
        change("testLight","testLightRed");
        
        
        return false;
    }

}

document.getElementById("a2").onclick = function() {a2.click()};
document.getElementById("b2").onclick = function() {b2.click()};
document.getElementById("c2").onclick = function() {c2.click()};
document.getElementById("d2").onclick = function() {d2.click()};
document.getElementById("e2").onclick = function() {e2.click()};
document.getElementById("f2").onclick = function() {f2.click()};
document.getElementById("testButton").onclick = async function() {
    if(await testSolution()){
        // console.log(document.getElementById("msg").innerText);

        step6();
    }
};


