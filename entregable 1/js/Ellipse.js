"use strict";

class Ellipse extends Figura{
    constructor(posX,posY,radioX,radioY,fill,ctx,estilo){
        super(posX,posY,fill,ctx,estilo);
        this.radioX = radioX;
        this.radioY = radioY;
    }

    draw(){
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.ellipse(this.posX,this.posY,this.radioX,this.radioY,0,0,2 * Math.PI); //ctx tiene un metodo propio para crear ellipses 
        this.ctx.fill();
        this.ctx.stroke(); //es el borde
    }

    estaElPunto(x,y){
        let xx = this.posX - x;
        let yy = this.posY - y;
        return ((xx*xx)/(this.radioX*this.radioX) + (yy*yy)/(this.radioY*this.radioY) <= 1); 
    }
}