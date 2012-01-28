How To Use This Example
--------

This particular example serves plain text back in response to an HTTP request
connection on port **3000** and serves some plain text back to the end-user.

However, this application also depends on the [slang](https://github.com/devongovett/slang) package being installed via [npm](http://npmjs.org/ "Node Package Manager") so there's an extra step involved.

To use this example, first start by installing the require npm packages, which can be done by:

    c:\introtonode\npm-packages> npm install slang

Or (this approach reads the list of dependencies from package.json and installs them)

    c:\introtonode\npm-pacages> npm install

Then start the application:

    c:\introtonode\npm-packages> node server.js
    c:\introtonode\npm-packages> starting server...

To test your application, simply visit http://127.0.0.1:3000 in your web browser or use curl if you have it:

    $ curl http://127.0.0.1:3000
    $ hello world!