        //step 1 for Hiding notify-section first 

        document.querySelector(".notify-section").style.display = "none";




// ----step 2--Input Random-----//



document.getElementById("generate-button").addEventListener("click",function(){

const genInput=document.getElementById("generate-input").value;

const genInputRandom=1000+Math.random(genInput)*9000;

const genOutPut=Math.round(genInputRandom);

   document.getElementById("generate-input").value=genOutPut;

})




// ------step 3----calculator input------//


function inputButton(number){

var inputNumberAll=number;

 document.getElementById("calculator-input").value+=inputNumberAll;
 
 
 



}

// ---step 4-------pin input condition check------//


document.getElementById("submit-button").addEventListener("click",function(){
const generateInputCheck= document.getElementById("generate-input").value;
const calculatorInputCheck=document.getElementById("calculator-input").value;

if(generateInputCheck==calculatorInputCheck){
document.querySelector(".notify-section").style.display="block";
    document.getElementById("right").style.display="block";

    document.getElementById("wrong").style.display="none";
    document.querySelector(".action-left").innerText = 0 + ' try left'
    
}
else{

    document.querySelector(".notify-section").style.display="block";
    document.getElementById("right").style.display="none";

    document.getElementById("wrong").style.display="block";
    document.querySelector(".action-left").innerText = 2 + ' try left'
   
}


})

// -----step 5----bonus for Back space and clear------//

function back(){

    var inputNumber=document.getElementById("calculator-input");
    
    var inputValue=inputNumber.value;
    
    document.getElementById("calculator-input").value=inputValue.slice(0,-1);
    
    
    
    
    }

document.getElementById("clear-button").addEventListener("click",function(){

    document.getElementById("calculator-input").value=null;



})
