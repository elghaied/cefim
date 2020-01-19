let nbCup = parseInt(prompt("How many cups to drink ?"));
let vodka = ["Bière","Rhum","eau","Téquila"];
let nbTrys = 0;
while (nbCup<0 || isNaN(nbCup) ){
    alert("The number of cup should be a positif number");
    nbCup = parseInt(prompt("How many cups to drink ?"));
    if (nbTrys > 5){
        alert("You are drunk 🥴 Paul, GO home! 👉🏠");
    } 
    else{
        nbTrys++;
    }

}
for (i = 1; i < (nbCup+1); i++) {
    if (i%5 == 0){
                alcool = vodka[2];
    } else if (i%3 == 0){
        alcool = vodka[1];
    } else if (i%7 == 0){
        alcool = vodka[3];
    }
    else if(i%5 == 0) {
        alcool = vodka[2];
    }
    else {
        alcool = vodka[0];
    }
    document.write(i + " : " + "verre " + alcool  +"<br/>");
  }

