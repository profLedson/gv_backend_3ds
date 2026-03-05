// Verifica se LOGIN e SENHA 
// correspondem ao mesmo tempo ( && )

const login = 'superman'
const senha = 'segredo123'

if (login == 'superman' && senha == 'segredo123') {
    console.log('Acesso permitido!')
} else {
    console.warn('Verifique seus dados')
}