
//# Exo-98-JS-setTimeout-recursif

// 1. Reproduisez EXACTEMENT l'interval de l'exo précédent ( 97 ), mais cette fois avec un timeout récursif.
// Le timeout devra fonctionner pendant au moins 10 minutes, à vous de réfléchir à comment procéder !

let result1 = document.getElementById("interval-div");
let button1 = document.getElementById("interval-start");
let compteur = 600000;
let intervalID = 0;

button1.addEventListener("click",function (){
    intervalID = setInterval(function (){
        if(compteur >=0){
                let div2 = document.createElement("div");
                result1.append(div2);
                result1.style.backgroundColor = "#CCCCFF";
                result1.innerHTML = "Le compteur est en marche "+compteur;
                compteur--;
            }
    }, 1000);
})

