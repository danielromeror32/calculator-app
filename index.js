
const screen = $(".answers");

let fullNumber = "";
let setNumber = [];

let init = true;
let commas = true;

let commasCount = 3;

const operators = ["+", "x", "-", "/"];
let operator = [];

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


$(".op").click(function (){

    newSetNumber();

    let getOperator = $(this).text();// - * / +
    
    operator.push(getOperator); // +
    
});

$(".btn-equal").click(function(){
    // setNumber[0]
    // operator [0]
    // setNumber [1]
    let equal;
    newSetNumber();
    for (let index = 0; index < setNumber.length; index++) {
        
        if (setNumber.length > 0 ){
            equal = setNumber[index] + operator[index] + setNumber[index + 1]
            console.log("equal" + equal);
        }else{
            console.log(setNumber[index]);
        }
    }

});

function newSetNumber (){
    setNumber.push(fullNumber);
    fullNumber = "";
}

function add (){

}


$(".del").click(function () {
    fullNumber = fullNumber.slice(0, -1);

    // let word = screen.text();
    // let lastDigit = word.charAt(word.length-2);

    // if(lastDigit === "."){
    //     commas = true;
    //      console.log(commasCount);
    // }   
    let newValue;
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

  

