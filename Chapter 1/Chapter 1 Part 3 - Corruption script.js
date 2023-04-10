
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


//document.getElementById("ID").onclick = function() {func()};
//Generic Input Stuff
step = 0
answer0 = "SIGNALS"; //Password to enter, usually
answer1 = "";
answer2 = "SHE IS";
answer3 = "ALWAYS";
answer4 = "WATCHING";
answer5 = "YOU";
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
    }
    else if (step ===5){
        if (code === answer5){step6();}
    }
    return false; 
}
let blinkMessage = "--- ... "
//!!! Remember to set 
// document.getElementById("code").value = "";
//After each input!!!
function step0(){step=0;} //Initial Step, if there is one
async function step1(){hideInput();divshow(1);change("blinker","blinkhide"); await sleep(2000);change("blinker","blink0"); await sleep(1000);blinkerControl = 0;blinker(blinkMessage);step=1;document.getElementById("code").value = "";} //First step, usually a blinker
let text1 = "_>~~ Receiving encrypted transmission~~ _>_>~ Access code requested~ _>_>~ Entering access code»: ~SIGNALS~_>_>` Code accepted~_>_>` Beginning recorded message`.`.`.`\\~~Hello again._~By this point, I feel »confident that you are not one of hers._~This is imperative,` she must not be allowed to know what it is that we,`_or rather,` you,`_are doing here._~ If she were to discover your actions», the consequences would be dire».~_Listen carefully,» I have something» essential» to» tell» you.~»~»_>`_`> WARNING:»` SIGNAL CORRUPTED»` _>_> ERROR 25 _>` ERROR 15 _>` ERROR 21 _>_> PLAYING CORRUPTED» MESSAGE__rµBÓ:XGl vä]µ¡zBkr e¢]°¦[óÇ¤ynB,»úl áhC(M¡{ñÜílÑóS,EóüKHM¢»<ä¿ínøÅÑ€k×s©b-UA4 UÁ3íµ%W=|TÓ=¢Å»3åZ9¢=2K(bÄÄÉ_ERROR:TIF JT > I¢qKÇi-xä@©€ó7pó^1¥]Pc^XÇMSh×c°»Þ¿%µXlKz8[7ej³&0÷Y_ERROR:12-23-8-12-10-4  >> Yéx×^yíX}w#há5»g({saNÜP?µÜ¤jµÉkoÞ6¶p[o¬D aéö/<%QzP»odMo µiÁµ{×¢ÚnA²»úö÷ÞünVóAmç p+V¢k0MPL²É=c²%r€ÍlQngZQC,9iLb$5dÜ5¡NEÖwÞpqFC¿þÚ¢ctj>&uµTi|³*7øå¤}_RORRE:12-19-14-13-8-25-6-2 >>> Á»(%QJ:.mc po<!qeóDSZJp¥*knþ uydSDoHIEµ£GUÜ2aÚ;2ú°I¤/lC]hg-/-Q9ØX¤bdX»]qz0,L®Rµó øhBDNy@€»Öm5qrU.¬ó¿,£sAmj{%6kÑIRäZµX3s1ØÖÇ EÞ»É ÍPíLm¤³|€hKz/>Å!¬H°AWi çpFw5»N-KyøX}m[aqøÚX]h:öÉ°¶€=I!»wxz cø pµ4A.8d^s°fs¢Å(¤¦^¦CT__~~~>`_>`_>`_>`~ Transmission» paused.~~";
async function step2(){divhide("1");showConsole();change("textSpeed","consoleButton");await type(text1);await sleep(1000);step=2;hideConsole();change("showConsole","consoleButton");await sleep(1000)
    change("light1","offLight");change("light2","offLight");change("light3","offLight");
    showInput();}
async function step3(){
    change("light1","onLight");clearInput();

    step=3;}
async function step4(){
    change("light2","onLight");clearInput();

    step=4;}
async function step5(){
    change("light3","onLight");clearInput();

    step=5;}
let text2 = ">~~~ Resume transmission.`.`.`.`_>_> ERROR: SIGNAL CORRUPTED _>_> GENERATING NEW PASS CODE __******************************__******************************__********* C`O`R`R`U`P`T`I`O`N *********__******************************__******************************~~__.";
async function step6(){
    hide("light1");hide("light2");hide("light3");
    divhide("4");divhide("5");hideInput();clearmsg();await sleep(2000);type(text2);step=6;}
