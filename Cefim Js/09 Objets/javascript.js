const names = ["Eslam", "Ali", "remi", "Vincent","Morgan"]
const ages = [27,26,28,45,18]
const post = ["développeur frontend","développeur backend","chef de projet","designer","commercial"]
const languages = ["javascript","java","c#","html","css","sass","mysql"]
const relation = [
    [1,3],[0],[0,1,2,3,4],[0,4],[3]
]
for(i=0; i < names.length ;i++){
    let profile = {
        name: names[i],
        age : ages[i],
        post: post[i], 
        relation: relation[i].map(j => post[j]).join(", "),
        languages: languages[i],
        }

    document.write("Je m'appel " + profile.name+ "et je suis le "+profile.post + " de l'équipe !" + "<br>");
    document.write("Je travail avec " + profile.relation + "" + "<br>");
}

