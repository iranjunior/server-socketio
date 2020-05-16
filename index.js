const express = require('express');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(express.json());

let message = [];

io.on('connection', (socket) => {
    console.log('socket', socket.id);
    socket.on('sendMessage', (data) => {
        console.log('data', data)
    });
    socket.broadcast.emit('recivedMessage', {
        author: 'teste',
        message: 'hello',
    })
    
});

server.listen(3333, () => {
    console.log('server started');
})