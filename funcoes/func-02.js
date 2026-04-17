// A partir da Função abaixo, 
// crie as variações:
// (Adição, Subtração, Multplicação, Divisão)

function divisao(n1, n2) {
    if(n2 != 0) {
        console.log("A divisão de " +n1+ " por " +n2+ " é = " + n1 / n2)
    } else {
        console.error("Impossível - dividir por ZERO!")
    }
}

divisao(12, 2)
divisao(12, 0)