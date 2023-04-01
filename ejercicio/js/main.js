"use strict"
main();

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height

let figura = null;

let figuras = [];
const CANT_FIG = 20;

function main(){
    //  pintarCanvas();
    crearFiguras();
}

function crearFiguras(){
    if(figuras.length < CANT_FIG){
        agregarFigura(figuras.length < CANT_FIG/2);
        figuras[figuras.length - 1].draw();
        setTimeout( () => {crearFiguras();}, 100);     
    }
}

function agregarFigura(estilo){
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = randomRGB();

    if(estilo){
        let ellipse = new ellipse(posX, posY, Math.round(Math.random()*50), Math.round(Math.random() * 50), color, ctx, false );
        figuras.push(ellipse);
    }else{
        let rect = new rect(posX, posY, Math.round(Math.random()*50), Math.round(Math.random() * 50), color, ctx, false );
       figuras.push(rect);
    }


function randomRGB(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba (${r},${g},${b},${a})`;
}
 }
