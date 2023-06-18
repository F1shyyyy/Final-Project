let verze = [5];
verze[0] = document.getElementById("forge-mdp-1710");
verze[1] = document.getElementById("forge-mdp-1102");
verze[2] = document.getElementById("forge-mdp-1122");
verze[3] = document.getElementById("forge-mdp-1165");
verze[4] = document.getElementById("forge-mdp-1192");
let pozice = 0;
let zapnuto = false;

function zmenaVerze(answer){
    if (answer.value == 0) {
        verze[pozice].style.display = "none";
        verze[0].style.display = "flex";
        pozice = 0;
    } else if (answer.value == 1) {
        verze[pozice].style.display = "none";
        verze[1].style.display = "flex";
        pozice = 1;
    } else if (answer.value == 2) {
        verze[pozice].style.display = "none";
        verze[2].style.display = "flex";
        pozice = 2;
    } else if (answer.value == 3) {
        verze[pozice].style.display = "none";
        verze[3].style.display = "flex";
        pozice = 3;
    } else if (answer.value == 4) {
        verze[pozice].style.display = "none";
        verze[4].style.display = "flex";
        pozice = 4;
    }
}