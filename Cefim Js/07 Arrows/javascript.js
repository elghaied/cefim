const nbEquipes = parseInt(prompt("A combien jouez-vous ?"));
const scoreMax = parseInt(prompt("Quel est le score à atteindre ?"));
let counter = 1;
let tableauScores = Array(nbEquipes);
let scoreEquipeMax = 0;

tableauScores.fill(0);

while (scoreEquipeMax < scoreMax) {
    for (let i = 0; i < nbEquipes && scoreEquipeMax < scoreMax; i++) {
        const score = parseInt(prompt("Score obtenu par l'équipe " + (i + 1) + " au tour " + counter));
        tableauScores[i] += score;
        scoreEquipeMax = Math.max(tableauScores[i], scoreEquipeMax);
        // if (tableauScores[i] > scoreEquipeMax) {
        //     scoreEquipeMax = tableauScores[i];
        // }
    }
    console.log(tableauScores);
    counter++;
}

let classement = [];
for (let j = 0; j < nbEquipes; j++) {
    const gagnant = tableauScores.indexOf(scoreEquipeMax);
    classement.push(gagnant + 1);
    tableauScores[gagnant] = 0;
    scoreEquipeMax = 0;
    for (let i = 0; i < nbEquipes; i++) {
        scoreEquipeMax = Math.max(tableauScores[i], scoreEquipeMax);
    }
}

alert("Le classement final est : " + classement.join(", "));
