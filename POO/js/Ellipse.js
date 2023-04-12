class Ellipse extends Figura {
    constructor(posX,posY,radioX,radioY,fill,context,estilo){
        super(posX,posY,fill,context,estilo);
        this.radioX = radioX;
        this.radioY = radioY;
    }

    draw(){
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.ellipse(this.posX,this.posY,this.radioX,this.radioY,
            0,0,2 * Math.PI);
        this.ctx.fill();

        if(this.estilo){
            this.ctx.stroke();
        }
    }

    estaElPunto(x,y){
        let xx = this.posX-x;
        let yy = this.posY-y;


        if(((xx*xx)/(radioX*radioX)) + ((yy*yy)/(radioY*radioY)) <= 1){
            return true;
        }else{
            return false;
        }
    }
}