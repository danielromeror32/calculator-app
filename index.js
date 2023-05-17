const screen = $(".answers");
let onScreen = "";


$(".num").click(function(){
    getNumber = $(this).text();    
    onScreen = screen.text(screen.text() + getNumber).text();

});

$(".btn-equal").click(function(){
    if (onScreen.includes("x")){
        onScreen = onScreen.replaceAll("x", "*");
    }
    try {
        result = eval(onScreen);
        screen.text(result);
    } catch (error) {
        screen.text("Error");
    }
});

$(".del").click(function(){
    screen.text(screen.text().slice(0, -1));
});

$(".reset").click(function(){
    screen.text("");
});

