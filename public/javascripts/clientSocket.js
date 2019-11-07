$(() => {
    const socket = io()
    $('form').submit(() => {
      socket.emit('chat message', $('#msg').val())
      $('#msg').val('')
      return false
    })
    socket.on('chat message', (msg) => {
      console.log(msg)
      $('#msgs').append($('<li>').text(msg))
    })
})

var textarea = document.getElementById('editor');
var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    lineWrapping: true,
    theme: "eclipse",
    val: textarea.value
});