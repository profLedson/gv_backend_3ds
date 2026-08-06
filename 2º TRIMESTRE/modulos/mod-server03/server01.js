// Importar módulos
const http = require('node:http')
const porta = 8001

// criar servidor e rotas
const server = http.createServer( (req, res) => {
    // rotas e conteúdos
})

// liberar porta no meu PC
server.listen(porta, () => {
   console.log(`Servidor rodando em http://localhost:${porta}`)
})