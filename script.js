let fila1 = new Fila(5);

function addFila(){
    const novo = document.getElementById("novoElemento");
    if(fila1.enqueue(novo.value)){
        alert("Dado Inserido!");
        novo.value = "";
        novo.focus();
        console.log(fila1);
    }
    else
        alert("Fila Cheia!");
}

function removeFila(){
    if(fila1.isEmpty())
        alert("Fila Vazia!");
    else{
        const rem = fila1.dequeue();
        alert("Elemento " + rem + " removido com sucesso!");
        console.log(fila1);
    }

}