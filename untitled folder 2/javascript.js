const rightrow = document.getElementById("moverowsRight");
const leftrow = document.getElementById("moverowsLeft");
const pyItems = document.querySelectorAll(".pyRows");
rightrow.addEventListener("click" , function(){
    let decal = -50;
    pyItems.style.marginLeft = decal+"px";
    decal -= 50;
})