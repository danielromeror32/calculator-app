
// let cssFile = document.createElement("link");
// cssFile.setAttribute("rel", "stylesheet");
// cssFile.setAttribute("href", "/css/stylesV2.css");
// document.documentElement.firstChild.appendChild(cssFile);
const screen = $(".answers");
let onScreen = "";

var cssFiles = [
    $('<link>').attr({
      'rel': 'stylesheet',
      'href': '/css/stylesV2.css',
      'class': 'estilos'
    }),
    $('<link>').attr({
      'rel': 'stylesheet',
      'href': '/css/stylesV3.css',
      'class': 'estilos'
    })
    
  ];
  
  var activeIndex = 0;
  
  $('.inside-slider').click(function() {
    if (activeIndex < cssFiles.length) {
      $('link.estilos').remove(); // Eliminar los estilos activados anteriormente
      $('head').append(cssFiles[activeIndex]);
      activeIndex++;
    } else {
      activeIndex = 0;
      $('link.estilos').remove(); // Eliminar los estilos activados anteriormente
    }
  });

$(".num").click(function(){
    getNumber = $(this).text();    
    let number = $(this).attr('id');
    onScreen = screen.text(screen.text() + getNumber).text();
    animatePress(number);
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

function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed")

    setTimeout(function(){
    $("#"+ currentColour).removeClass("pressed")
     }, 100);
}