"use strict"

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height
ctx.fillStyle = 'white';
ctx.fillRect(0,0,canvasWidth,canvasHeight);

let texto = document.getElementById("texto");

let figura = null;
let figuraClickeada;

let figuras = [];
const CANT_FIG = 50;

canvas.addEventListener('mousedown', (e) =>{
    if(buscarFiguraCliqueada(e.layerX,e.layerY) != null){
        figura = buscarFiguraCliqueada(e.layerX,e.layerY);
        figuraClickeada = figura;
        figura.ctx.stroke();
         console.log(figura);

        texto.innerHTML = "Se hizo click en una figura";
        borrarMensaje();
    }else{
        texto.innerHTML = "No se hizo click en ninguna figura"
        borrarMensaje();
    }
});

canvas.addEventListener('mousemove', (e) =>{
   if(figura != null){  
        figura.moveTo(e.layerX, e.layerY);
        dibujar();
    }
});

canvas.addEventListener('mouseup', (e)=>{
    figura = null;
    canvas.removeEventListener('mousedown', null);
});

window.addEventListener('keydown', (e)=>{
    if(e.key == 'ArrowUp'|| e.key == "w"|| e.key == "W"){
        figuraClickeada.moveTo(figuraClickeada.posX , figuraClickeada.posY - 3);
        dibujar();
    }else if(e.key == 'ArrowDown' || e.key == "s"|| e.key == "S"){
        figuraClickeada.moveTo(figuraClickeada.posX , figuraClickeada.posY + 3);
       dibujar();   
    }else if(e.key == 'ArrowLeft' || e.key == "a"|| e.key == "A"){
        figuraClickeada.moveTo(figuraClickeada.posX - 3, figuraClickeada.posY );
        dibujar();   
    }else if((e.key == 'ArrowRight'|| e.key == "d"|| e.key == "D")){
        figuraClickeada.moveTo(figuraClickeada.posX + 3, figuraClickeada.posY);
        dibujar();    
    }  
})

function buscarFiguraCliqueada(x,y){
    for (let i = 0; i < figuras.length; i++) {
        let elemento = figuras[i];
        if(elemento.estaElPunto(x,y)){
            return elemento;
        }
    }
}

function main(){
    crearFiguras();
}

function crearFiguras(){
    ctx = canvas.getContext("2d");
    if(figuras.length < CANT_FIG){
        agregarFigura();
        figuras[figuras.length - 1].draw();
        setTimeout(()=>{crearFiguras()}, 300);     
    }
}

function agregarFigura(){
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = randomRGB();
    let estilo = Math.round(Math.random());

    if(estilo){
        let ellipse = new Ellipse(posX, posY, Math.round(Math.random()*40) + 30, Math.round(Math.random() * 40) + 20 , color, ctx, false );
        figuras.push(ellipse); 
    }else{
        let rect = new Rect(posX, posY, Math.round(Math.random()*40) + 20, Math.round(Math.random() * 40) + 20,
         color, ctx, false );
       figuras.push(rect);
    }
}

function randomRGB(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function pintarCanvas(){
    ctx.fillStyle = randomRGB();
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    for (let fig of figuras) {
        fig.draw();          
    }
}

function dibujar() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let fig of figuras) {
     fig.draw();          
    }
    pintarCanvas();
}

function borrarMensaje(){
    setTimeout(()=> texto.innerHTML = "",4000);
}