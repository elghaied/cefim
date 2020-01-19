let indata = document.getElementById("inData");
const eGo = document.getElementById("go");
let results = document.getElementById("results");
let colors = ["primary","secondary","success","danger","warning","info","light","dark"];


eGo.addEventListener("click", creator)

let hovered = document.querySelector("sheet");

function creator(){
    let sheet = document.createElement("div");
    let para = document.createElement("p");
    console.log(sheet);
    let divcount =  results.childElementCount;
    // divcount is counting how many elements inside the selected Element where is here I've got 
    //result and empty div, that get a new element each time I press on the Button eGo, and by that 
    // divcount increase +one with each click 
    
    sheet.classList.add("rounded","sheet" , "alert-" + colors[divcount % colors.length]);
    //here the name of calass is taken by the index of the list (colors[index], and  the size of my index is decided by my div child counter)
    //Then we use the the remainder % so we can cycle in the list colors, where when you reach the limit of the list we go back to the beginning .
   
    // creating the delete image

    let delete_img = document.createElement("img");
    delete_img.classList.add("delete");
    delete_img.src = "/delete.svg";

    //modify icon

    let modify_img = document.createElement("img");
    modify_img.classList.add("modify");
    modify_img.src = "/edit-icon.png";

    // injecting information and the image insde the sheet div
    
    para.textContent = indata.value;
    sheet.appendChild(para);
    sheet.appendChild(delete_img);
    sheet.appendChild(modify_img);
    console.log("modified",sheet);
    results.appendChild(sheet);
    // to show the delete icon
    // to show the delete icon
    sheet.addEventListener("mouseenter", function(){
        delete_img.style.visibility = "visible";
        modify_img.style.visibility = "visible";
        
        
    })
    sheet.addEventListener("mouseleave", function(){
        delete_img.style.visibility = "hidden";
        modify_img.style.visibility = " hidden" ; 
       
    })

    delete_img.addEventListener("click", function(){
        
        delete_img.parentElement.remove();
       
    })
    
    modify_img.addEventListener("click", function(){
        let modifyInput = document.createElement("input");
        // modifyInput.id ="modifyInput";
        // modifyInput = document.getElementById("modifyInput");
        let modifyBtn = document.createElement("button");
        // modifyBtn.id = "modifyBtn";
        // modifyBtn = document.getElementById("modifyBtn");
        sheet.textContent = "";
        modifyBtn.textContent = "Valid";
        modifyInput.classList.add("modfiytext");
        sheet.appendChild(modifyInput);
        sheet.appendChild(modifyBtn);


        modifyBtn.addEventListener("click", function(){
            sheet.textContent = "";
            para.textContent = modifyInput.value;
            sheet.appendChild(delete_img);
            sheet.appendChild(modify_img);
            sheet.appendChild(para) ;

        })
        modifyInput.value;

    })
}






