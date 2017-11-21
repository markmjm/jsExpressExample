var express = require("express");
var app = express();


app.get("/", function (req, res) {
    res.send("Hi there");
})

app.get("/bye", function (req, res) {
    res.send("GoodBye");
})

app.get("/dog", function (req, res) {
    res.send("Woof!!");
})

///r/anything will come here
//http://localhost:3000/r/dog
app.get("/r/:something", function (req, res) {
    res.send("you asked for a: " + req.params["something"] );
})

// http://localhost:3000/r/dog/comments/xxx/eee
app.get("/r/:book/comments/:id/:title/", function (req, res) {
    console.log(req.params)
    res.send("you asked for a: " + req.params["book"] + " book ... with id: " + req.params["id"] + " and title: " + req.params["title"] );
})


//must be last
app.get("*", function (req, res) {
    res.send("Invalid request");
})

//if you want to use a different port
//in DOS command : set PORT=8000 for example.
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});