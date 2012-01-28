/* Sample HTTP server that serves up a piece of static content from the filesystem */
var http = require("http")
  , fs = require("fs"); //Module used to access the filesystem

function onRequest(req, res){
    console.log("Receiving request...");
    fs.readFile(process.cwd() + "/content/index.html", function(error, file){
        console.log("File received from file system");
        if(error) {
            console.log(error.message);
            //Set the HTTP status code to 500 (internal server error)
            res.writeHead(500, {"Content-Type":"text/plain"}); 
            res.write(error + "\n");
            res.end();
        } else{
            console.log("File received successfully");
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(file); //Write the HTML file directly to the output stream
            res.end();
        }
    });
    //console.log("Response written."); //Example to show off async
}

//Start the server
var server = http.createServer(onRequest).listen(3000);