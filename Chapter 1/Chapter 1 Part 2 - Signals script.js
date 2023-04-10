
//document.getElementById("ID").onclick = function() {func()};

//Sleep function
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

//Hide/change class element functions
function hide(ID){document.getElementById(ID).className = "invis";}
function change(ID,Class) {document.getElementById(ID).className = Class;}
function divhide(ID){document.getElementById(ID).className = "divhide";}
function divshow(ID){document.getElementById(ID).className = "divcenter";}
function write(ID,text){document.getElementById(ID).innerHTML = text;}
function clearWrite(ID){document.getElementById(ID).innerText = "";}
function clear(ID){document.getElementById(ID).innerHTML = "";hide(ID);}

const show = document.getElementById("showConsole");
//Console Message Functions
show.onclick = function(){
    if (document.getElementById("msg").className === "txt1"){
        hideConsole();
    } else {
        showConsole();
    }
}
let textHolder = "";
function showConsole(){
    change("msg","txt1");
    write("msg",textHolder)
}
function hideConsole(){
    change("msg","hidetext");
    clearWrite("msg");
}
function hideInput(){
    divhide("divCode");
    divhide("divEnter");
    document.getElementById("code").value="";
}
function showInput(){
    divshow("divCode");
    divshow("divEnter");
}



let CursorBlinkSpeed = 400;
let typeSpeed = 75;
let c = "|";
async function cursorBlink(message,times){var i = times;document.getElementById("msg").className = "txt1";while (i > 0){document.getElementById("msg").innerText = message + c;await sleep(CursorBlinkSpeed);document.getElementById("msg").innerText = message;await sleep(CursorBlinkSpeed);i-=1;}}
const speed = document.getElementById("textSpeed");
let fast = false;
speed.onclick = function(){
    if(!fast){
        typeSpeed = 40;
        CursorBlinkSpeed = 200;
        write("textSpeed","Slower");
        fast=true;
        
    } else {
        typeSpeed = 75;
        CursorBlinkSpeed = 400;
        write("textSpeed","Faster");
        fast=false;
    }
}
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
        document.getElementById("msg").className = "glitch1"
        await sleep(200);
        document.getElementById("msg").className = "txt1"
        await sleep(50);
        document.getElementById("msg").className = "glitch1"
        await sleep(100);
        document.getElementById("msg").className = "txt1"
        
    } else if (n === "«"){
        document.getElementById("msg").className = "glitch2"
        await sleep(200);
        document.getElementById("msg").className = "txt1"
    } else if (n === "ß"){
        document.getElementById("msg").className = "glitch3"
        await sleep(100);
        document.getElementById("msg").className = "txt1"

    } 
    
}

//blinker control function
let blinkerControl = 0
document.getElementById("blinker").onclick = function() {stopBlink()};
async function blinker(morseMessage){
    let morse = morseMessage.split("");change("blinker","blink1");
    while (blinkerControl === 0){for (let x in morse){if (blinkerControl === 1){break;}await sleep(200);if (morse[x] === "/") {await sleep(1200);} else if (morse[x] === " ") {await sleep(800);} else if (morse[x] === "-") {change("blinker","blink2");await sleep(800);change("blinker","blink1");} else if (morse[x] === ".") {change("blinker","blink2");await sleep(250);change("blinker","blink1");}}} change("blinker","blinkhide");await sleep(2000);hide("blinker");input();return false;}
async function stopBlink(){blinkerControl = 1;}

//Generic Input Stuff
step = 0
answer0 = "MINERVA"; //Password to enter, usually
answer1 = "";
answer2 = "";
answer3 = "NUMBERS";
answer4 = "ENTOMBED";
answer5 = "OAK";
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
let blinkMessage = "-.. --- -. - "
function step0(){step=0;} //Initial Step, if there is one
async function step1(){
    hideInput();
    divshow(1);
    change("blinker","blinkhide"); 
    await sleep(2000);
    change("blinker","blink0");
    await sleep(2000);
    blinkerControl = 0;
    blinker(blinkMessage);
    step=1;
    document.getElementById("code").value = ""; 
    } //First step, usually a blinker 
let text1 = "_>~~ Receiving encrypted transmission~~ _>_>~ Access code requested~ _>_>~ Entering access code»: ~MINERVA~_>_>` Code accepted~_>_>` Beginning recorded message`.`.`.`\\~~~ Ah,` It's you.~~_ I have to admit,` a part of me had hoped you might not return,` that these messages would never be seen._~ You would have been safe._~ As safe as anyone else, anyways._` ~It doesn't matter.` You're here,` which means she knows about you.` _` Everything you need has been given to you»._~The only way out, now, is through..._~~~>`_>`_>`_>`~ Transmission paused.~~";

async function step2(){
    divhide("1");
    showConsole();
    change("textSpeed","consoleButton");
    await type(text1);
    await sleep(1000);
    step=2;
    hideConsole();
    change("showConsole","consoleButton");
    
    await sleep(1000);
    step3();
}
async function step3(){
    await sleep(500);
    write("puzzle1","14   21   13   2   5   18   19");
    divshow("2");
    showInput();
    step=3;
}
async function step4(){
    hideInput();
    clear("puzzle1");
    sleep(1000);
    divhide("2");
    await sleep(2000);
    document.getElementById("code").value = ""
    write("puzzle2","17<br>26<br>6<br>1<br>25<br><span style=\"color:orangered;\">14</span><br>17<br>16");
    write("puzzle2key","")
    divshow("3");
    showInput();
    step=4;}
async function step5(){
    hideInput();
    clear("puzzle2");
    clear("puzzle2key");
    sleep(1000);
    divhide("3");
    await sleep(2000);
    write("puzzle3key","<span style=\"color:orangered;\">5</span> <span style=\"color:rgba(0,200,0,0.6);\">7</span><span style=\"color:orangered;\"> 3</span> || 9 <span style=\"color:orangered;\">6</span> 2 || <span style=\"color:rgba(0,200,0,0.6);\">4</span> 5 <span style=\"color:rgba(0,200,0,0.6);\">2</span>");
    write("puzzle3","<span style=\"color:orangered;\">TWW</span> || MOVNLUWN || <span style=\"color:rgba(0,200,0,0.6);\">VYY</span>");
    
    divshow("4");
    await sleep(1000);
    divshow("5");
    showInput();
    step=5;}
let text2 = ">~~~ Resume transmission.`.`.`.`\\~~Good.`» Good.~_You are learning quickly.~ Here's the next code.`_ Don't lose it, you'll need it again soon. __******************************__******************************__********** `S`I`G`N`A`L`S` ***********__******************************__******************************~~__ Good luck._~And remember:_~ Don't trust anyone».";
async function step6(){
    clear("puzzle3key");
    clear("puzzle3");
    divhide("4");
    divhide("5");
    hideInput();
    clearmsg();
    await sleep(2000);
    type(text2);
    step=6;}






