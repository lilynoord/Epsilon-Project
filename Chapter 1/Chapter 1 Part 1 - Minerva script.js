

//Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var A1 = ["A1",0,[1]] //0
var A2 = ["A2",0,[0,2]] //1
var A3 = ["A3",0,[1,3]] //2
var A4 = ["A4",0,[2,4]] //3
var A5 = ["A5",0,[3]] //4
document.getElementById("A1").onclick = function() {press(A1)};
document.getElementById("A2").onclick = function() {press(A2)};
document.getElementById("A3").onclick = function() {press(A3)};
document.getElementById("A4").onclick = function() {press(A4)};
document.getElementById("A5").onclick = function() {press(A5)};

let masterlist = [A1,A2,A3,A4,A5]
let key1 = [1,1,1,1,1]
function checkAll(){
    for (let x in masterlist) {
        if (masterlist[x][1] !== key1[x]) {
        
            return false;
        }
    }
        return true;


}

function press(b) {
    swap(b)
    for (let x in b[2]){
        
        swap(masterlist[b[2][x]]);
        }
        
    let check = checkAll()
    if (check){
        dissolve();
    }
}

function swap(b){
    if (b[1] === 0){
        b[1] = 1;
        document.getElementById(b[0]).className = "buttonOn";
    } else if (b[1]===1){
        b[1] = 0;
        document.getElementById(b[0]).className = "buttonOff";
        
    }
    
}
function dissolve(){
    for (let x in masterlist){
        document.getElementById(masterlist[x][0]).className = "inputbubbles";
        masterlist[x][1]=2;
        }
    document.getElementById("code").className = "input";
    document.getElementById("sbutton").className = "input";

}

//Generic Input Stuff
step = 0
answer0 = "INPUT";
answer1 = "SECRETS"
function input(){
    let code = document.getElementById("code").value.toUpperCase();
    if (step===0){
        
        if (code === answer0){
        step+=1;
        step1();
        }
    } else if (step ===1){
        if (code === answer1){
        step+=1;
        step2();
        }
    }
    return false;
}
let masterlist2 = ["a","b","c","d","e","f","g"]
function step1(){
    for (let x in masterlist){
        document.getElementById(masterlist[x][0]).className = "invis";
        }
        //document.getElementById("one").className = "divhide";
    for (let x in masterlist2){
        
        document.getElementById(masterlist2[x][0]).className = "inputbubbles2";
    }
}



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

let text1 = "~~~Well done.~` \n But it will only get harder from here.~`"
let text2 = "\n Here’s a passphrase, `keep it safe.` \n You know what to do with it.~"
let text3 = "\n\n******************************\n******************************\n********** `M`i`n`e`r`v`a` ***********\n******************************\n******************************~~"
let text4 = "\n\n Keep this frequency open. `We’ll be in touch.~"
let text5 = "\nOh, `and remember...~~~~"

async function step2(){
    document.getElementById("one").className = "divhide";
    document.getElementById("two").className = "divhide";
    document.getElementById("three").className = "divhide";
    document.getElementById("four").className = "divhide";
    await sleep(1000);
    let message = "";
    message = await type(text1);
    message = await type(text2, message);
    message = await type(text3, message);
    message = await type(text4, message);
    message = await type(text5, message);
    clearmsg();
    await sleep(1000);
    let tn = "TRUST NO ONE";
    let s1 = tn.split("");
    let message2 = "";
    document.getElementById("msg2").className = "txt2";
    document.getElementById("zero").className = "divhide";

    for (let x in s1){
            await sleep(220);
            message2 += s1[x];
            document.getElementById("msg2").innerText = message2;
        }
    
}

