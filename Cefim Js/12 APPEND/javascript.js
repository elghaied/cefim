let indata = document.getElementById("inData");
const eGo = document.getElementById("go");
let results = document.getElementById("results");
let colors = ["primary","secondary","success","danger","warning","info","light","dark"];


eGo.addEventListener("click", function(){
    let sheet = document.createElement("div");
    let divcount =  results.childElementCount;
    // divcount is counting how many elements inside the selected Element where is here I've got 
    //result and empty div, that get a new element each time I press on the Button eGo, and by that 
    // divcount increase +one with each click 
    
    sheet.classList.add("py-3","m-3","col-2", "rounded", "alert-" + colors[divcount % colors.length]);
    //here the name of calass is taken by the index of the list (colors[index], and  the size of my index is decided by my div child counter)
    //Then we use the the remainder % so we can cycle in the list colors, where when you reach the limit of the list we go back to the beginning .
    sheet.textContent = indata.value;
    results.appendChild(sheet);
    

    

}



)