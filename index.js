

document.writeln("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js'></script>");
document.writeln("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js'></script>");
document.writeln("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.sound.js'></script>");
document.writeln("<script type='text/javascript' src='./IDMNYU-p5.js-speech-e7ae007/lib/p5.speech.js'></script>");
function setup() {
    console.log("gg")
    noCanvas();
    let lang = navigator.language || "en-US";
    let speechRec = new p5.SpeechRec(lang, gotSpeech)
    let continuous = true;
    let interim = false;
    speechRec.start(continuous, interim);


    function gotSpeech() {
        if (speechRec.resultValue) {
            let newInst = new evaluateSaying(speechRec.resultString)
            newInst.checkSaying()
            newInst.findIntent()
            // createP(speechRec.resultString);
        }

    }

    class evaluateSaying {
        constructor(myQuery) {
            this.saying = myQuery
        };
        checkSaying() {
            console.log(this.saying)
        }
        findIntent() {
            if (this.saying.includes("scroll down")) {
                console.log("yes")
                var msg = new SpeechSynthesisUtterance();
                msg.text = "Scrolling  down";
                window.speechSynthesis.speak(msg);
            }
            if (this.saying.includes("scroll up")) {
                var msg = new SpeechSynthesisUtterance();
                msg.text = "Scrolling  down";
                window.speechSynthesis.speak(msg);
            }
            if (this.saying.includes("close this tab")) {
                var msg = new SpeechSynthesisUtterance();
                msg.text = "Closing this tab";
                window.speechSynthesis.speak(msg);
                window.close()

            }
            if (this.saying.includes("open new tab")) {
                var msg = new SpeechSynthesisUtterance();
                msg.text = "New tab opened";
                window.speechSynthesis.speak(msg);
                window.open()
            }

        }

    }

}

