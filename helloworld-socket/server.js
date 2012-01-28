/* Echo server using the Node.JS 'Net' module */
var net = require('net');
var server = net.createServer(function(conn){ //Method listens for incoming connections
    console.log('connection received from ' + conn.address().address + ' ' + conn.address().port);

    //Set the encoding for all incoming data we receive so it can be printed to console
    conn.setEncoding('utf8');

    conn.on('end', function(){ //Event is raised when the server is terminated
        console.log('connection terminated');
    }); 
    
    conn.on('data', function(data){ //event handler for whenever data is received on the socket
        console.log(data); //Log the data to console
        conn.write(data); //Send the data back to the user
    });
});

/* Uses a port assigned by the node.exe host process */
server.listen(1818, function(){
    console.log('server listening on ' + server.address().address + ' ' + server.address().port);
});