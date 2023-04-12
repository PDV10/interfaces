var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
/* ctx.fillStyle = "#000";
ctx.fillRec(0,0,900,600);*/

var imgHeight = 0;
var imgWidth = 0;

var imgData;

var imgHtml5 = new Image();
imgHtml5.src = "img.png";


imgHtml5.onload = function(){
    ctx.drawImage(this, 0 ,0)
};

/* imgHtml5.onload =()=>{ // desde arrow funtion no se puede hacer referencia al this del objeto, desde una funcion comun si
    dibujar(imgHtml5);
};

function dibujar(img){
    ctx.drawImage(img, 0 ,0)
}  */