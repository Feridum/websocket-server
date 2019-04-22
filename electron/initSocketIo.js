
const createSocketIoServer = (port) =>{
    const io = require('socket.io')(port);
    return io;
}


module.exports = createSocketIoServer;