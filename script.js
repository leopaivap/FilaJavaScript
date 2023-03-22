let fila1 = new Fila(5);

function mostrarFila(){
    const filaElemento = document.getElementById("listFila");
    filaElemento.textContent = fila1.toString();   
}

function addFila(){
    const novo = document.getElementById("novoElemento");
    if(fila1.enqueue(novo.value)){
        novo.value = "";
        novo.focus();
        mostrarFila();
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
        mostrarFila();
    }
}


function primeiroFila(){
    if(fila1.isEmpty())
        alert("Fila Vazia!");
    else {
        let primeiro = fila1.first();
        alert("Primeiro da Fila: " + primeiro);
    }
}

function ultimoFila() {
    if (fila1.isEmpty())
        alert("Fila Vazia!");
    else {
        let ultimo = fila1.last();
        alert("Ultimo da Fila: " + ultimo);
    }
}


