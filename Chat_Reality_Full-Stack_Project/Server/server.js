const cors = require('cors');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(cors())

// Define a pasta public como a pasta raiz do servidor
app.use(express.static(path.join(__dirname, 'public')))

// Rota para servir o arquivo index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Recebendo uma conexão é retornando ela
io.on('connection', (socket)=>
{
    socket.on('chat message', (msg)=>
    {
        io.emit('chat message', msg)
    });
});

http.listen(3001 , ()=>console.log('IS OPEN'))