
//Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Blinker
let click = 0
document.getElementById("blinker").onclick = function() {pressBlinker()};
function pressBlinker() {
    click = 1;
}
async function blink() {
    while (click === 0){
        
        document.getElementById("blinker").className = "blink2";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(400);
        
        document.getElementById("blinker").className = "blink1";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(400);
        document.getElementById("blinker").className = "blink2";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(400);
        document.getElementById("blinker").className = "blink1";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(400);
        document.getElementById("blinker").className = "blink2";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(400);
        document.getElementById("blinker").className = "blink1";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(1000);
        document.getElementById("blinker").className = "blink2";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(800);
        document.getElementById("blinker").className = "blink1";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(400);
        document.getElementById("blinker").className = "blink2";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(800);
        document.getElementById("blinker").className = "blink1";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(400);
        document.getElementById("blinker").className = "blink2";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(800);
        document.getElementById("blinker").className = "blink1";
        if (click===1){document.getElementById("blinker").className = "blink1";break;}
        await sleep(1000);
    }
    document.getElementById("blinker").className = "blink3"
    document.getElementById("blinker").className = "blink4"
    await sleep(2000);
    document.getElementById("blinker").className = "blink5"
    intro();
}
blink();
//
//Intro text
async function cursorBlink(message,times){
    var i = times;
    document.getElementById("msg").className = "txt1";
    while (i > 0){
    
    document.getElementById("msg").innerText = message + c;
    await sleep(400);
    document.getElementById("msg").innerText = message ;
    await sleep(400);
    i-=1;}

}
async function type(txt,prior = ""){
    let message = prior
    let s1 = txt;
    for (let x in s1){
        if (s1[x] === "`" ) {
            await cursorBlink(message,1);
        } else if (s1[x] === "~"){
            await cursorBlink(message,3);
            
        } else {
            await sleep(75);
            message += s1[x];
            document.getElementById("msg").innerText = message + c;
        }
    }
    return message;
    
}
function clearmsg(){
    document.getElementById("msg").className = "hidetext";
}
let c = "|";
let text1 = "~Hello?~ Are you there?~ \nGood...~";
let text2 = "~If you're reading this, `it's already too late for me.~~~";
let text3 = "\n I've done what I can to stop her.~ Clearly it wasn't enough...~~~~";
let text4 = "~I feared this may happen. `As a precaution,` I've prepared some...~ contingencies...~~~"
let text5 = "~Before we can continue, `I need to make sure you’re not one of hers.~"
let text6 = "\n I’ve devised a test, of sorts.~ I hope you understand.~\n If you are who you say you are, `well,` I suppose we’ll find out...~~~~"

async function intro(){
    let message = ""
    message = await type(text1);
    //await cursorBlink(message,8);
    clearmsg();
    await sleep(800);
    message = await type(text2);
    message = await type(text3,message);
    clearmsg();
    await sleep(800);
    message = await type(text4);
    clearmsg();
    await sleep(800);
    message = await type(text5);
    message = await type(text6,message);
    clearmsg();
    await sleep(800);
    document.getElementById("cont").className = "cont2";
    document.getElementById("cont").innerText = "Continue";
        document.getElementById("cont").onclick = function() 		{end()};
    
}
function end(){
    window.open('https://sites.google.com/view/epsilonproject/chapter-1-secrets-kept/part-1');
    document.getElementById("div").className = "divhide";
}
