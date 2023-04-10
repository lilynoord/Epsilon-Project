 //document.getElementById("ID").onclick = function() {func()};

document.getElementById("img1").onclick = function() {
    if (document.getElementById("img1").src === "https://lh3.googleusercontent.com/zl6v8zw9PQPmL0UGfF3dyrh9PDushL911YjFUIyn_kpzNvCEDC9m8JaIxayyDMaOsj8WM7PS5UzCRF66PkvzG9P8snvxzRDNsN_92Ego3ngJU8pmvri_ziAgu69ePDbrkw=w1280"){
        document.getElementById("img1").src = "https://lh5.googleusercontent.com/i_nD0twKY8FNZIGfMKTPGrTGRQkUOCG_JRFtK2c9k_0R_KSWb4kVLAbJqPBrEVBdkmQ9ZbNYZmfcmrFazeuG-PmBXX-8h5n-uWK3RwMQKBzvPvAP6teKn72rI-IParYiCQ=w1280";

    } else {
        document.getElementById("img1").src = "https://lh3.googleusercontent.com/zl6v8zw9PQPmL0UGfF3dyrh9PDushL911YjFUIyn_kpzNvCEDC9m8JaIxayyDMaOsj8WM7PS5UzCRF66PkvzG9P8snvxzRDNsN_92Ego3ngJU8pmvri_ziAgu69ePDbrkw=w1280";
    }
};




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
let CursorBlinkSpeed = 400;let c = "|";
let fast = false;
const speed = document.getElementById("textSpeed");
speed.onclick = function(){if(!fast){typeSpeed = 20;CursorBlinkSpeed = 150;write("textSpeed","Slower");fast=true;} else {typeSpeed = 75;CursorBlinkSpeed = 400;write("textSpeed","Faster");fast=false;}}


async function cursorBlink(message,times){var i = times;document.getElementById("msg").className = "txt1";while (i > 0){document.getElementById("msg").innerText = message + c;await sleep(CursorBlinkSpeed);document.getElementById("msg").innerText = message;await sleep(CursorBlinkSpeed);i-=1;}}

async function type(txt,prior = ""){
    let message = prior;let s1 = txt;for (let x in s1){
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
            document.getElementById("msg").innerText = message + c;
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
            document.getElementById("msg").innerText = message + c;
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


//Generic Input Stuff
step = 0
answer0 = "HOTWIRE"; //Password to enter, usually
answer1 = "REBOOT";
answer2 = "";
answer3 = "";
answer4 = "";
answer5 = "";
function input(){
    let code = document.getElementById("code").value.toUpperCase();
    console.log("Input received");
    console.log(step)
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
let text1 = "_>~~ Initializing system.`.`.`~_>_> System Initialized. _> Reboot detected,` please input root password: 01010010 01000101 01000010 01001111 01001111 01010100";
async function step2(){divhide("1");showConsole();change("textSpeed","consoleButton");await type(text1);await sleep(1000);step=2;hideConsole();change("showConsole","consoleButton");await sleep(1000);step3();}
async function step3(){step=3;}
async function step4(){step=4;}
async function step5(){step=5;}
let text2 = ">~~~ Resume transmission.`.`.`.`\\[TRANSMISSION MISSING]__******************************__******************************__********** [`M`I`S`S`I`N`G`] ***********__******************************__******************************~~__.";
async function step6(){divhide("4");divhide("5");hideInput();clearmsg();await sleep(2000);type(text2);step=6;}
