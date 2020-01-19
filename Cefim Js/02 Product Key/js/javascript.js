

// === Part 1 : Verification the form of the Entry .===
//===========================================

function checkformat(s) {

    // 1 - Verification the length of the Entry [ list of 19 chars]

    if (s.length !== 19) {
        console.log("The length of the serial number is incorrect");
        return false;
    }
    // 2 - The 5th, the 10th and the 15th are ( - )

    if (s[4] !== "-" || s[9] !== "-" || s[14] !== "-" ){
        console.log("You should put ( - ) between each 4 numbers XXXX-XXXX-XXXX-XXXX");
        return false;
    }


    // 4 - the rest of the chars are numbers

    if (isNaN(s.split("-").s.join(""))){
        console.log("The serial number should only containe numbers");
    }

    return true;

}

const serialNumber = prompt("Enter the Product Key: XXXX-XXXX-XXXX-XXXX");
checkformat(serialNumber);

//=== Part 2: - split the serial number in the ( - )====
//==================================================

const productkey = serialNumber.split("-",4);


// 3 - Assign each 4 digits into a variable
let g1 = productkey[0];
let g2 = productkey[1];
let g3 = productkey[2];
let g4 = productkey[3];

function reverse(g1){
    return g1.split("").reverse().join("");
  }

let verifyg3 = reverse(g1);

let verifyg2 =  (g3 * 7);
let verifyg2_ = verifyg2.toString();
verifyg2 = verifyg2_.substr(verifyg2_.length - 4);
console.log(g1+g2+g3+g4);
let verifyg4 =  (parseInt(g1)+parseInt(g2)+parseInt(g3)+parseInt(g4))%10000;

if ((g2 == verifyg2) && (g3 == verifyg3) && ( verifyg4 == 0)){
    alert('ProductKey is valide');
}
else{
    alert('Productkey is not valide');
}

/*
===============================================
=================Second Method ================
===============================================

// Partie 1 : Verification du format
function checkFormat(s) {
    // 1) La chaine doit être de 19 chars
    if (s.length !== 19) {
        console.log("Mauvaise longueur de chaine");
        return false;
    }

    // 2) Les chars à la position 5, 10 et 15 sont des "-"
    if (s[4] !== "-" || s[9] !== "-" || s[14] !== "-") {
        console.log("Le format doit contenir des tiret");
        return false;
    }

    // 3) Tous les autres chars sont des chiffres
    if (isNaN(s.split("-").join(""))) {
        console.log("Le format doit être composé de chiffres");
        return false;
    }

    return true;
}

// Partie 2 : Verification du lien groupe 1 et 3
function checkGroup13(s) {
    let groups = s.split("-");

    if (groups[0] !== groups[2].split("").reverse().join("")) {
        console.log("Le groupe 1 n'est pas l'inverse du groupe 3");
        return false;
    }

    return true;
}

// Partie 3 : Verification du lien groupe 3 et 2
function checkGroup32(s) {
    let groups = s.split("-");
    let group2 = parseInt(groups[1]);
    let group3 = (parseInt(groups[2]) * 7) % 10000;
    // let group3 =parseInt((parseInt(groups[2]) * 7).toString().slice(-4));

    if (group2 !== group3) {
        console.log("Le groupe 2 ne correspond pas au multiple du groupe 3");
        return false;
    }

    return true;
}

// Partie 4 : Verification de la somme
function checkSum(s) {
    let groups = s.split("-");
    let total = parseInt(groups[0]) + parseInt(groups[1]) + parseInt(groups[2]) +parseInt(groups[3]);

    if (total % 10000 !== 0) {
        console.log("La somme n'est pas bonne");
        return false;
    }

    return true;
}

const serial = prompt("Saisissez votre numéro de série");
if (checkFormat(serial) && checkGroup13(serial) && checkGroup32(serial) && checkSum(serial)) {
    alert("Votre serial est valide");
} else {
    alert("Mauvais serial");
}

*/