


// === Part 1 : Verification the form of the Entry .===
//===========================================

let serial = document.getElementById('serial');
const result = document.getElementById('result_list');
let ok = document.getElementById("ok_button");
const myResult = [];
let nbTries = 0;



// serial.addEventListener('input', function (e) {
//     e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$& ').trim();
// });

serial.addEventListener('input', function() {
    let newSerial = "";
   
    for (let i = 0; i<serial.value.length; i++) {
        if(!isNaN(serial.value[i])){
            newSerial += serial.value[i];
        }
        
    }

    let serialTable = [];
    for(let i = 0; i < newSerial.length; i += 4){
        serialTable.push(newSerial.substring(i, i+4) )
    }
    serial.value = serialTable.join("-");
});

function checkformat() {
    
    // 1 - Verification the length of the Entry [ list of 19 chars]

    if (serial.value.length !== 19) {
        result.innerHTML = "The length of the serial number is incorrect";
        console.log("The length of the serial number is incorrect");
        return false;
    }
    // 2 - The 5th, the 10th and the 15th are ( - )

    if (serial.value[4] !== "-" || serial.value[9] !== "-" || serial.value[14] !== "-" ){
        result.innerHTML ="You should put ( - ) between each 4 numbers XXXX-XXXX-XXXX-XXXX";
        console.log(serial.value)
        console.log("You should put ( - ) between each 4 numbers XXXX-XXXX-XXXX-XXXX");
        return false;
    }


    // 4 - the rest of the chars are numbers

    if (isNaN(serial.value.split("-").join(""))){
        result.innerHTML = "The serial number should only containe numbers";
        console.log("The serial number should only containe numbers");
    }

    return true;
}

    ok.addEventListener('click', checkformat);
    ok.addEventListener('click', verify);
    //=== Part 2: - split the serial number in the ( space )====
    //==================================================

    function verify(){
    let productkey = serial.value.split("-",4);


    // 3 - Assign each 4 digits into a variable
    let g1 = productkey[0];
    let g2 = productkey[1];
    let g3 = productkey[2];
    let g4 = productkey[3];

    function reverse(g1){
        return g1.split("").reverse().join("");
    }

    // here is to create the verification conditions 
    let verifyg3 = reverse(g1);

    let verifyg2 =  (g3 * 7);
    let verifyg2_ = verifyg2.toString();
    verifyg2 = verifyg2_.substr(verifyg2_.length - 4);
    console.log(g1+g2+g3+g4);
    let verifyg4 =  (parseInt(g1)+parseInt(g2)+parseInt(g3)+parseInt(g4))%10000;

    //To verify wether the serail number is valid or not

    if ((g2 == verifyg2) && (g3 == verifyg3) && ( verifyg4 == 0)){
        myResult.push("Your productkey : " + serial.value + " is valid, it took you " + nbTries + " Times <br>" )
        console.log('ProductKey is valide');
        result.innerHTML = myResult ;
        result.classList.add("alert");
        result.classList.remove("alert-warning")
        result.classList.add("alert-success")
    }

    else{
        myResult.push("Your productkey ain't valid, you have got " + (3-nbTries) + " more chances" +"<br>" )
        console.log('Productkey is not valide');
        
        // this part is to count how many times you've entered wrong serial number.

        if(nbTries < 3){
            result.innerHTML = myResult;
            result.classList.add("alert");
            result.classList.add("alert-warning")
            nbTries++;
        } else {
            result.innerHTML = "you've lost your chance";
            result.classList.add("alert");
            result.classList.remove("alert-warning")
            result.classList.add("alert-danger")
            serial.disabled = true;
            ok.disabled = true;
            
        }
    }
    
}
 

ok.addEventListener('click', checkformat);
ok.addEventListener('click', verify);
