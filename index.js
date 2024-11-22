import { dataCpp } from "./Data/dataCpp.js";
const question = document.getElementById("question");
const tagscore = document.getElementById("score");
const butnext = document.getElementById("next");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");

let index = 0;
let score = 0;
let tabIndic = [];
let indice = 0;

function giveQuestion(){
    do {
        indice = Math.floor(Math.random()*50);
    } while (tabIndic.includes(indice));
    tabIndic.push(indice);
    return indice;
}

function showQuesAns(){
    question.innerHTML = `${index+1}/ `+dataCpp[giveQuestion()].question;
    ans1.innerHTML = dataCpp[indice].answers[0][0];
    ans2.innerHTML = dataCpp[indice].answers[1][0];
    ans3.innerHTML = dataCpp[indice].answers[2][0];
    ans4.innerHTML = dataCpp[indice].answers[3][0];
}
showQuesAns();

function validation(e,j){
        if(dataCpp[indice].answers[j][1] === true){
            e.style.backgroundColor="greenyellow";
            score++;
        }
        else {
            e.style.backgroundColor="rgb(255, 2, 31)";
            for(let i=0;i<4;i++){
                if(dataCpp[indice].answers[i][1]===true){
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
        if(score<dataCpp.length/2) message = "Non Valider"
        document.querySelector(".continer").innerHTML =`<div>
            <h2>Your final score is: ${score}/10</h2>
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
    if(index==9){
        butnext.innerHTML = "Result";
        butnext.onclick = function(){
            result();
        }
    }
}

function restartQuiz(){
    location.reload();
}



