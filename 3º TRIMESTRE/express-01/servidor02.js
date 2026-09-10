import express from   'express'
import path from 'path' 

const app = express()
const porta = 3000
// Criar as rotas do servidor
app.get('/', (req, res) => {
    res.sendFile('/paginas/index.html', {root: import.meta.dirname})
})


// Liberar a porta do meu computador
app.listen(porta, () => { console.log('Servidor está vivo!')} )

