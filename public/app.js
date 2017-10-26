(function() {
    var socket = io();

    document.forms['chat'].addEventListener("submit", function(e) {
        e.preventDefault();
        var input = document.getElementById('msg');
        socket.emit('chat message', input.value);
        input.value = '';
    });

    socket.on('chat message', function(msg) {
        var li = document.createElement('li');
        li.textContent = msg;
        document.getElementById('messages').append(li);
    });
})();