// Funções de retorno exigem o termo 'return'
// Permitem tornar disponíveis os dados processados
// Reaproveitamento e ações sequenciais
// podemos armazenar as funções de retorno
// a variáveis, funções, arrays, etc.

function meuSalario(salario) {
    const contaLuz = 145.21
    const aluguel = 1350.56
    const restoSalario = salario - (contaLuz+aluguel)
    //console.log(restoSalario) // não serve p/ usuário
    return `O resto do seu salário é R$ ${restoSalario.toFixed(2).replace(".",",")}`
}
const resto = meuSalario(15000.0)
console.log(resto)