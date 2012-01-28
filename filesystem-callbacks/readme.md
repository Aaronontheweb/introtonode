How To Use This Example
--------

This particular example serves static HTML content form the filesystem back in response to an HTTP request
connection on port *3000*.

One particularly important thing to note with this example is that you need to execute *node server.js* from the filesystem-callbacks directory, as the local filesystem module depends on the path of the current working directory in its search to find the require HTML files.

To use this example, start the application:
    c:\introtonode\filesystem-callbacks> node server.js
    c:\introtonode\filesystem-callbacks> starting server...

To test your application, simply visit http://127.0.0.1:3000 in your web browser or use curl if you have it:
    $ curl http://127.0.0.1:3000
    <html>
    <head>
        <title>Sample Node.JS Application Serving Up Content</title>
    </head>
        <body>
            <h1>Sample Response</h1>
            <p>Guess you should probably
            <a href="https://github.com/Aaronontheweb">follow Aaronontheweb on Github.</a></p>
        </body>
    </html>