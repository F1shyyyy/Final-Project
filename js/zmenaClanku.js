let clanek1_btn = document.getElementById("clanek1-button");
let clanek2_btn = document.getElementById("clanek2-button");
let clanek3_btn = document.getElementById("clanek3-button");
let clanek1 = document.getElementById("clanek-1");
let clanek2 = document.getElementById("clanek-2");
let clanek3 = document.getElementById("clanek-3");

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
function zmenitClanek(answer) {
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