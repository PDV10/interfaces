"use strict";

class Rect extends Figura{
    constructor(posX,posY,heigth,width,fill,ctx,estilo){
        super(posX,posY,fill,ctx,estilo);
        this.width = width;
        this.heigth = heigth;
    }
    
    draw(){
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.rect(this.posX,this.posY,this.width, this.heigth); //ctx tiene un metodo propio para crear ellipses 
        this.ctx.fill();
        this.ctx.stroke(); //es el borde
    }

   


    estaElPunto(x,y){
        return ((x>this.posX) && (x < this.posX + this.width) && (y > this.posY) && (y< this.posY + this.heigth));
    }
}