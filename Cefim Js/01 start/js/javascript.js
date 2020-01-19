function dollar(){
    var my_var = prompt('Entrer en Euro');
    let inDollar = my_var * 1.10;
    if (isNaN(my_var)  || !my_var  || my_var < 0  || my_var == " ") {
        
        alert('error');
    }
    else {
        alert(inDollar.toFixed(2) + "$");
    }
    
}

function my_surface(){
    var height = parseInt ( prompt('enter the height in Centimetre'));
    var width = parseInt ( prompt('enter the width in Centimetre'));
    if (isNaN(height) || isNaN(width) || width == "" || height == "" || height < 0 || width < 0 || width == " " || height == " ")  {
        
        alert('error');
    }
    else {

    

        if (height == width){
            var square = (height*4);
            document.getElementById("surface_result").innerHTML = "<h2> Form Square</h2>"+ "<br>" +  square/100 + "&nbsp;" + "m" + "<br>" 
            +  square + "&nbsp;" + "cm" + "<br>" 
            + square*100 + "&nbsp;" + "mm" + "<br>" 
            + square/10 + "&nbsp;" + "dm" + "<br>" ;
        
            
        

        }
        else if (height > width || width > height){
            var rectangle = (2*(height+width));
            document.getElementById("surface_result").innerHTML = "<h2> Form rectangle</h2>"+ "<br>" + rectangle/100 + "&nbsp;" + "m" + "<br>" 
            +  rectangle + "&nbsp;" + "cm" + "<br>" 
            + rectangle*100 + "&nbsp;" + "mm" + "<br>" 
            + rectangle/10 + "&nbsp;" + "dm" + "<br>" ;

        }

}
}
/*
==============
==-au cours-==
==============


function verifEntree(valeur) {
    return !valeur || isNaN(valeur) || valeur < 0;
}


let longueur = prompt("Saisissez la longueur");
let largeur = prompt("Saisissez la largeur");

if (verifEntree(longueur)) {
    alert("Mauvaise longueur !");
} else if (verifEntree(largeur)) {
    alert("Mauvaise largeur !");
} else {
    longueur = parseInt(longueur);
    largeur = parseInt(largeur);
    const perimetre = 2 * (longueur + largeur);

    alert("Le perimetre de ma surface est " + perimetre);
}

========================
===== second code ======
========================

function verifEntree(valeur) {
    return !valeur || isNaN(valeur) || valeur < 0;
}

let unit = prompt("Saisissez l'unité de mesure");
let longueur = prompt("Saisissez la longueur");
let largeur = prompt("Saisissez la largeur");

if (unit !== "mm" && unit !== "cm" && unit !== "dm" && unit !== "m") {
    alert("Mauvaise unité !");
} else if (verifEntree(longueur)) {
    alert("Mauvaise longueur !");
} else if (verifEntree(largeur)) {
    alert("Mauvaise largeur !");
} else {
    longueur = parseInt(longueur);
    largeur = parseInt(largeur);
    let perimetre = 2 * (longueur + largeur);

    switch (unit) {
        case "mm":
            perimetre /= 1000;
            break;
        case "cm":
            perimetre /= 100;
            break;
        case "dm":
            perimetre /= 10;
            break;
    }

    alert("Le perimetre de ma surface est " + perimetre + "m");
}

*/
function my_tempo() {

    var c = document.getElementById("c").checked;
    var k = document.getElementById("k").checked;
    var f = document.getElementById("f").checked;
    var intemp = document.getElementById("intemp").value;
    var intemp_int = parseFloat(intemp);
 
    if (c) {
        document.getElementById("tempo_results").innerHTML = intemp_int + " Celsius" + "<br>" +
         (intemp_int*1.8)+32 +  " Fahrenheit" + "<br>" + (intemp_int+273.15) + " Kelvin" ;
    }
    else if (k){
        document.getElementById("tempo_results").innerHTML = (intemp_int-273.15) + " Celsius" + "<br>" +
        (intemp_int- 273.15) * 9 / 5 + 32 +  " Fahrenheit" + "<br>" + intemp_int + " Kelvin" ;
    }
    else if (f){
        document.getElementById("tempo_results").innerHTML = (intemp_int- 32) * 5 / 9 + " Celsius" + "<br>" +
        intemp_int +  " Fahrenheit" + "<br>" + (intemp_int - 32) * 5/9 + 273.15 + " Kelvin" ;
    }




}
/* 
==========================================
============code de cours=================
==========================================
let temperature = prompt("Saisissez une température");
const unit = prompt("Saisissez une unité");
let temC, temK, temF;

if (temperature === "" || isNaN(temperature)) {
    alert("Votre température est invalide.")
}

temperature = parseFloat(temperature);

switch (unit) {
    case "Celcius":
    case "c":
    case "C":
        temC = temperature;
        temK = temperature + 273.15;
        temF = temperature * 9 / 5 + 32;
        break;

    case "Kelvin":
    case "k":
    case "K":
        temC = temperature - 273.15;
        temK = temperature;
        temF = (temperature - 273.15) * 9 / 5 + 32;
        break;

    case "Fahrenheit":
    case "f":
    case "F":
        temC = (temperature - 32) * 5 / 9;
        temK = (temperature - 32) * 5 / 9 + 273.15;
        temF = temperature;
        break;
}

alert(
    "Voici les témpératures converties :\n" +
    "\t- Celcius : " + temC + "°C\n" +
    "\t- Kelvin : " + temK + "°K\n" +
    "\t- Fahrenheit : " + temF + "°F"
);

=================================================
*/
