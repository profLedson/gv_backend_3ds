// Funções podem ou não receber parâmetros
// São blocos reaproveitáveis

function dizOla(){
    console.log("Olá!")
}

function dizOlaPessoa(nome) {
    if(typeof nome !== "string"){
        console.error("Por favor, digite um valor de texto!")
    } else {
        console.log(nome + ", diz olá!")
    }
}

dizOla()
dizOlaPessoa("Pedro")
dizOlaPessoa("Mariah")
dizOlaPessoa(1321)