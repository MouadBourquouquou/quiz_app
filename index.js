import { data } from "./data.js";
const question = document.getElementById("question");
const tagscore = document.getElementById("score");
const butnext = document.getElementById("next");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");

let index = 0;
let score = 0;

function showQuesAns(){
    question.innerHTML = `${index+1}/ `+data[index].question;
    ans1.innerHTML = data[index].answers[0][0];
    ans2.innerHTML = data[index].answers[1][0];
    ans3.innerHTML = data[index].answers[2][0];
    ans4.innerHTML = data[index].answers[3][0];
}
showQuesAns();

function validation(e,j){
        if(data[index].answers[j][1] === true){
            e.style.backgroundColor="greenyellow";
            score++;
        }
        else {
            e.style.backgroundColor="rgb(255, 2, 31)";
            for(let i=0;i<data[index].answers.length;i++){
                if(data[index].answers[i][1]===true){
                    let correct = document.getElementById("ans"+(i+1));
                    correct.style.backgroundColor = "greenyellow";
                }
            }
        }
        tagscore.innerHTML = score;
        butnext.style.visibility="visible";
        disableAnswers();
}

function disableAnswers() {
    ans1.style.pointerEvents = "none";
    ans2.style.pointerEvents = "none";
    ans3.style.pointerEvents = "none";
    ans4.style.pointerEvents = "none";
}
function ableAnswers() {
    ans1.style.pointerEvents = "auto";
    ans2.style.pointerEvents = "auto";
    ans3.style.pointerEvents = "auto";
    ans4.style.pointerEvents = "auto";
}


function choose(){
    ans1.onclick = function(){
        validation(this,0);
    };
    ans2.onclick = function(){
        validation(this,1);
    };
    ans3.onclick = function(){
        validation(this,2);
    };
    ans4.onclick = function(){
        validation(this,3);
    };
}
choose();

function nextQuestion(){
    butnext.style.visibility = "hidden";
    index++;
    ableAnswers();
    showQuesAns();
    resetColor();
    finish();
}

function resetColor(){
    ans1.style.backgroundColor = "white";
    ans2.style.backgroundColor = "white";
    ans3.style.backgroundColor = "white";
    ans4.style.backgroundColor = "white";
}

butnext.onclick = function(){
    nextQuestion();
}

function result(){
        let message = "Valider";
        if(score<data.length/2) message = "Non Valider"
        document.querySelector(".continer").innerHTML =`<div>
            <h2>Your final score is: ${score}/${data.length}</h2>
            <h1 id=VNV>result : ${message}</h1>
            <button id="resbut">Restart Quiz</button>
        </div>`;
        document.getElementById("resbut").onclick = function(){
            restartQuiz();
        }
        if(message=="Valider") document.getElementById("VNV").style.color="green";
        else document.getElementById("VNV").style.color="red";
}
function finish(){
    if(index==data.length-1){
        butnext.innerHTML = "Result";
        butnext.onclick = function(){
            result();
        }
    }
}

function restartQuiz(){
    location.reload();
}



