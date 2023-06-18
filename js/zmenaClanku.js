let clanek1 = document.getElementById("clanek-1");
let clanek2 = document.getElementById("clanek-2");
let clanek3 = document.getElementById("clanek-3");
let clanek4 = document.getElementById("clanek-4");
let clanek5 = document.getElementById("clanek-5")

function zmenitJava(){ 
    clanek1.style.display = 'block';
    clanek2.style.display = 'none';
    clanek3.style.display = 'none';
}
function zmenitBedrock() {
    clanek1.style.display = 'none';
    clanek2.style.display = 'block';
    clanek3.style.display = 'none';
}
function zmenitDungeons() {
    clanek1.style.display = 'none';
    clanek2.style.display = 'none';
    clanek3.style.display = 'block';
}
function zmenitForge(){
    clanek4.style.display = "block";
    clanek5.style.display = "none";
}
function zmenitFabric(){
    clanek4.style.display = "none";
    clanek5.style.display = "block";
}
function zmenitVanilla(answer) {
    if (answer.value == 1) {
        clanek1.style.display = 'block';
        clanek2.style.display = 'none';
        clanek3.style.display = 'none';
    } else if (answer.value == 2) {
        clanek1.style.display = 'none';
        clanek2.style.display = 'block';
        clanek3.style.display = 'none';
    } else if (answer.value == 3) {
        clanek1.style.display = 'none';
        clanek2.style.display = 'none';
        clanek3.style.display = 'block';
    }
};
function zmenitModded(answer) {
    if (answer.value == 4) {
        clanek4.style.display = "block";
        clanek5.style.display = "none";
    } else if (answer.value == 5) {
        clanek4.style.display = "none";
        clanek5.style.display = "block";
    }
}