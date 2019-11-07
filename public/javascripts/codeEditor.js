var textarea = document.getElementById('editor')
var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    lineWrapping: true,
    theme: "eclipse",
    val: textarea.value
})