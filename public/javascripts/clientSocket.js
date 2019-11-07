var clientSocket = (function(){
    const socket = io()
        $('form').submit(() => {
          socket.emit('chat message', $('#msg').val())
          $('#msg').val('')
          return false
        })
        socket.on('chat message', (msg) => {
          $('#msgs').append($('<li>').text(msg))
        })

})()