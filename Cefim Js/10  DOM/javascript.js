
document.body.innerHTML ='<div class="col-12 d-flex justify-content-center py-5">' + '<button id="euro" class="btn btn-warning mr-3">convertisseur euro/dollars</button>'+
'<button id="calcu" class="btn btn-success mr-3">calculateur de périmètre</button>' +
'<button id="tempo" class="btn btn-danger mr-3">convertisseur de température</button>' 
+ '</div>'+ '<div id="container" class="col-12 d-flex flex-column align-items-center justify-content-center py-4 .text-dark .bg-light h4"></div>' 
;


const euro = document.getElementById("euro");
const container = document.getElementById("container");

euro.addEventListener("click", function(){
        container.innerHTML = 
    ' <input type="text"  name="euroMoney" value="0">' +
    ' <input type="text"  name="dollarMoney" value="0">' ;

        let inputEuro = document.getElementsByName('euroMoney');
        let inputDollar = document.getElementsByName('dollarMoney');
        
        inputEuro[0].addEventListener("input", function(){
        
            if (isNaN(inputEuro[0].value)  || !inputEuro[0].value || inputEuro[0].value == " ") {
                
                inputDollar[0].value = "Please write a number";
            }
            else {
                inputDollar[0].value = (inputEuro[0].value * 1.10).toFixed(2) + " $" ;
            }
        })

    }
)

// //=============================================
// //=========Calculator=========================
// //===============================================


const calcu = document.getElementById("calcu");

calcu.addEventListener("click", function(){
    container.innerHTML = '<div class="clo-12 mr-3">'+
   ' <input type="text"  name="squareH" value="" placeholder="Height">' +
   ' <input type="text"  name="squareW" value="" placeholder="Width">' + '</div>' +
   '<div id="result" class="col-12 align-items-center justify-content-center d-flex flex-column py-3"></div>';

   let height = document.getElementsByName('squareH');
   let width = document.getElementsByName('squareW');

    [height[0], width[0]].forEach(item => {
        item.addEventListener("input", event => {
            if (isNaN(height[0].value) /*|| isNaN(event.value) || width.value[0] == "" || height.value[0] == "" || height.value[0] < 0 || width.value[0] < 0 || width.value[0] == " " || height.value[0] == " "*/)  {
                alert('error');
            }
            else {
            
                if (height[0].value == width[0].value){
                    let square = (height[0].value*4);
                    document.getElementById("result").innerHTML = "<h2> Form Square</h2>"+ "<br>" +  square/100 + "&nbsp;" + "m" + "<br>" 
                    +  square + "&nbsp;" + "cm" + "<br>" 
                    + square*100 + "&nbsp;" + "mm" + "<br>" 
                    + square/10 + "&nbsp;" + "dm" + "<br>" ;
                
                    
                
            
                }
                else if (height[0].value > width[0].value || width[0].value > height[0].value){
                    let rectangle = (2*(height[0].value+width[0].value));
                    document.getElementById("result").innerHTML = "<h2> Form rectangle</h2>"+ "<br>" + rectangle/100 + "&nbsp;" + "m" + "<br>" 
                    +  rectangle + "&nbsp;" + "cm" + "<br>" 
                    + rectangle*100 + "&nbsp;" + "mm" + "<br>" 
                    + rectangle/10 + "&nbsp;" + "dm" + "<br>" ;
            
                }
            
            }
            
        })
})
  
  
})

//=============================================
//=========Tempo=========================
//===============================================

const tempo = document.getElementById("tempo");
tempo.addEventListener("click", function(){


  

    container.innerHTML = 
   '<div class="clo-12 mr-3">'+ ' <input type="text"  id="intemp" value="" placeholder="Temp">' +
    ' <select id="tempList" name="température mesure"> '+
    '<option value="c" selected>Celsius</option>'+
    '<option value="k">Kelvin</option>'+
   ' <option value="f">Fahrenheit</option>'+
 ' </select>'+ '</div>' +
    '<div id="result" class="col-12 py-3 align-items-center justify-content-center d-flex"></div>';


    const tempList = document.getElementById("tempList");
    let intemp = document.getElementById("intemp");

    intemp.addEventListener("input", temperature); 
    tempList.addEventListener("input", temperature);

    function temperature(){
        let celsius = tempList.options[0].selected ;
        let kelvin = tempList.options[1].selected ;
        let fahrenheit = tempList.options[2].selected ;    
        if (celsius) {
            document.getElementById("result").innerHTML = 
            parseFloat(intemp.value) + " Celsius" + "<br>" +
            (parseFloat(intemp.value)*(9/5))+32 +  " Fahrenheit" + "<br>" + 
            (parseFloat(intemp.value)+273.15) + " Kelvin" ;
        }
        else if (kelvin){
            document.getElementById("result").innerHTML = 
            (parseFloat(intemp.value) - 273.15) + " Celsius" + "<br>" +
            ((parseFloat(intemp.value)- 273.15) * 9/5) + 32 +  " Fahrenheit" + "<br>" + 
            parseFloat(intemp.value) + " Kelvin" ;
        }
        else if (fahrenheit){
            document.getElementById("result").innerHTML = 
            ((parseFloat(intemp.value)- 32) * 5/9) + " Celsius" + "<br>" +
            parseFloat(intemp.value) +  " Fahrenheit" + "<br>" + 
            ((parseFloat(intemp.value) - 32) * 5/9 + 273.15) + " Kelvin" ;
        }


    }


})