"use strict";
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeigth = canvas.height;

let figuraSeleccionada = null;

let figuras = [];

const CANT_FIG = 20;



console.log("Acctually works!!!!");


function main(){
    crearFiguras();
}


function crearFiguras(){
    if(figuras.length < CANT_FIG){
        addFigura(figuras.length < (CANT_FIG / 2));

        figuras[figuras.length - 1].draw();
        setTimeout(()=>{crearFiguras()}, 420)
    }
}

function addFigura(estilo){
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeigth);
    let color = randomRGBA();

    let fig;

    // if(estilo){
    //     fig = new Ellipse(posX, posY, Math.round(Math.random() * 50),
    //      Math.round(Math.random() * 50), color, ctx, false);
    // }else{
    //     fig = new Rect(posX, posY, Math.round(Math.random() * 50),
    //     Math.round(Math.random() * 50), color, ctx, false);
    // }
    fig = new Ellipse(posX, posY, Math.round(Math.random() * 50),
    Math.round(Math.random() * 50), color, ctx, false);

    figuras.push(fig);
}

function randomRGBA(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}