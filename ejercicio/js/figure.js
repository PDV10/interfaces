class Figura {
    constructor(posX,posY,fill,ctx,estilo){
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.ctx = ctx;
        this.estilo = estilo;
    }

    draw(){
        //metodo abstracto, cada figura lo redefine segun cada una
    }

    moveTo(posX, posY){
        this.posX = posX;
        this.posY = posY
    }

    selected(estilo){
        this.estilo = estilo;
    }

    estaElPunto(x,y){
        return null;
    }
}