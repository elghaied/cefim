let method = prompt("choose the method (While, for or function");

if (method == "while"){

    let myNb = prompt("WHILE:Enter your number ");
    let total = 1;
    while (myNb > 0) {
        total*=myNb; 
        myNb-=1;
        
    }
    document.write(total);
}
if (method == "for"){
    let myNb = prompt("FOR:Enter your number ");
    let total = 1;
    for ( ; myNb > 0; myNb-- ){
        total = total*myNb;

    }
    document.write(total+" ");

}

if (method== "function"){
    let myNb = prompt("Function:Enter your number ");
    function factorialFun(myNb){
        return (myNb != 1) ? myNb * factorialFun(myNb - 1) : 1;        
    }
    document.write(factorialFun(myNb));

}

