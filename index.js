var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function (req, res) {
  res.send(
    "<h1>Image version 21 - Simple Node App</h1><br /><a href='/about'>Go to the about page</a>"
  );
});

// setup another route to listen on /about
app.get("/about", function (req, res) {
  res.send("<h3>About</h3><br/>Author: Duc Tai Nguyen");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
