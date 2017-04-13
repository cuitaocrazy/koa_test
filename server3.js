const net = require('net')

net.createServer(socket => {
    socket.on("error", err => {
        console.error("ERROR CT:")
        console.error(err.stack)
    })
})