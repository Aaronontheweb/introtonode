How To Use This Example
--------

This particular example listens for an incoming TCP socket 
connection on port **1818** and simply echos the response back to the server.

To use this example, start the application:

    c:\introtonode\helloworld-socket> node server.js
    c:\introtonode\helloworld-socket> server listening on 0.0.0.0 1818

And then use telnet to connect to the TCP server:

    c:\> telnet localhost 1818

### Enabling Telnet on Windows ###
Telnet is installed on all Windows XP / Vista / 7 machines but is disabled by default.

To enable it:

1. Go to **Start Menu**
2. Search for **Turn Windows Features On or Off**
3. Scroll down to **Telnet Client** and check the box