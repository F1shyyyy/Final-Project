let popisBtn = document.getElementById("popis");
let galerieBtn = document.getElementById("galerie");
let mceText = document.getElementById("mceternal-clanek-text");
let mceGalerie = document.getElementById("mceternal-clanek-galerie");
let modlistBtn = document.getElementById("modlist-zobrazit-vice");
let modlist = document.getElementById("modlist-more")
let fotky = [9];
fotky[0] = document.getElementById("fotka1");
fotky[1] = document.getElementById("fotka2");
fotky[2] = document.getElementById("fotka3");
fotky[3] = document.getElementById("fotka4");
fotky[4] = document.getElementById("fotka5");
fotky[5] = document.getElementById("fotka6");
fotky[6] = document.getElementById("fotka7");
fotky[7] = document.getElementById("fotka8");
fotky[8] = document.getElementById("fotka9");
let zapnuto = false;
let zvetseno = false;

function zmenaPopis(){
    popisBtn.style.backgroundColor = "rgb(255, 255, 255)";
    galerieBtn.style.backgroundColor = "rgb(200, 200, 200)";
    mceText.style.display = "flex";
    mceGalerie.style.display = "none";
}
function zmenaGalerie(){
    popisBtn.style.backgroundColor = "rgb(200, 200, 200)";
    galerieBtn.style.backgroundColor = "rgb(255, 255, 255)";
    mceText.style.display = "none";
    mceGalerie.style.display = "flex";
}
function showMods(){
    if (!zapnuto) {
        modlist.style.display = "block";
        modlistBtn.innerHTML = "Skrýt."
        zapnuto = true;
    } else if (zapnuto) {
        modlist.style.display = "none";
        modlistBtn.innerHTML = "Zobrazit více...";
        zapnuto = false;
    }
}
function zmenitClanek(answer) {
    if (answer.value == 1) {
        mceText.style.display = "flex";
        mceGalerie.style.display = "none";
    } else if (answer.value == 2) {
        mceText.style.display = "none";
        mceGalerie.style.display = "flex";
    }
}
function zvetsitFotku(index){
    if (!zvetseno) {
        fotky[index].style.position = "fixed";
        fotky[index].style.transform = "translate(-50%, -50%)";
        fotky[index].style.transition = "transform 250ms";
        fotky[index].style.width = "75%";
        fotky[index].style.top = "50%";
        fotky[index].style.left = "50%";
        zvetseno = true;
    } else if (zvetseno) {
        fotky[index].style.position = "static";
        fotky[index].style.width = "100%";
        fotky[index].style.transform = "translate(0%, 0%)";
        zvetseno = false;
    }
}