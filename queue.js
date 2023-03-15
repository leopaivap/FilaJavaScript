class Fila{
    constructor(maxSize){
        this.maximo = maxSize;
        this.itens = [];
    }

//--------------------------------------------
    
    enqueue(elemento){
        if(this.itens.length === this.maximo)
            return false;

        //this.fim++;
        //this.itens[this.fim] = elemento;
        this.itens.push(elemento);
        return true;
    }

    dequeue(){
        let valor = this.itens.shift();
        return valor;
    }

    isEmpty(){
         /* if(this.itens.length == 0)
            return true;
        else
            return false; 

            teste logico manual - linha 31
        */

        return this.itens.length == 0;
    }

    //reescrevendo metodo toString();
    toString(){
        return this.itens.toString();
    }

}