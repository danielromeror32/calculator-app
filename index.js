
const screen = $(".answers");

let setNumbers = [];

let init = true;



$(".num").click(function(){
    while(init){
        screen.text("");
        init = false;
    };
    let getNumber = $(this).text();
    
    let stringNumbers = (screen.text(screen.text() + getNumber)).text();
    stringNumbers = stringNumbers.replaceAll(",", "");
    splitNumbers(stringNumbers);

    setNumbers.push([stringNumbers]);
    console.log(setNumbers);
});



function splitNumbers(number){
    let arrayNumber = number.split("");
    // console.log(arrayNumber)
    if (arrayNumber.length % 3 === 0){
        
        screen.text(screen.text() + ",");
    }
}

