
const screen = $(".answers");

let fullNumber = "";
let setNumber = [];

let init = true;
let commas = true;

let commasCount = 3;

const operators = ["+", "x", "-", "/"];


$(".num").click(function(){
    while(init){
        screen.text("");
        init = false;
    };
    let getNumber = $(this).text(); // 1
    fullNumber += getNumber;
    
    let onScreen = (screen.text(screen.text() + getNumber)).text();
    // //fullNumber = fullNumber.replaceAll(",", "");
    let lastDigit = onScreen.charAt(onScreen.length-1);
    // console.log(lastDigit);

    if(commas){
        if (lastDigit != "."){
           addComma(onScreen);
        }else{
            commas = false;
        }
    }
        
});


$(".sum").click(function (){
   setNumber.push(fullNumber);
   console.log(setNumber);
   fullNumber = "";
});


$(".del").click(function () {
    fullNumber = fullNumber.slice(0, -1);

    let word = screen.text();
    let newValue;
    let lastDigit = word.charAt(word.length-2);

    // if(lastDigit === "."){
    //     commas = true;
    //      console.log(commasCount);
    // }   

    if (lastDigit === ","){
         newValue = screen.text().slice(0, -2);
         commasCount-=2;
    }else{
         newValue = screen.text().slice(0, -1);
         commasCount-=1;
    }
    screen.text(newValue);
    console.log(fullNumber);
});

$(".reset").click(function(){
    fullNumber = "";
    setNumber = [];
    init = true;
    commas = true;
    commasCount = 3;
    screen.text("0")
});

function addComma(number){
    // number = number.replaceAll(",", "");
    
    let array = number.split("");
    
    if (array.length % 4 === 0){
        
        array.splice(commasCount, 0, ",");
        let comma = array.join(""); 
        screen.text(comma);
        commasCount+= 4;
        // console.log(commasCount);
    }
}

  

