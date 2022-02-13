// Main backend file
// Side note I have a bunch of stuff commented out don't worrk about it
// I'll fix them up

// Needed imports
var express = require("express");
var app = express();
var render = require('./components/render')
var http = require('http');

// Render all webpages
//app.use('*', render);

// Create the server
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.send('/');
        return;
    }
    if(req.url == '/howitWorks'){
        res.send('/howitWorks');
        return;
    }
    if(req.url == '/whoweAre'){
        res.send('/whoweAre');
        return;
    }
    if(req.url == '/contactUs'){
        res.send('/contactUs');
        return;
    }
    res.end('');
})

// Set port for backend
app.set('PORT', process.env.PORT || 8080);

// Start listening on port 8080
app.listen(app.get('PORT'), function(){
    console.log('Server started on port: ' + app.get('PORT'));
})

/* // Render file for each webpageb 

app.get("/", function(req, res){
    console.log("Connected to AFCPlushies home");
    res.send("/");
});

app.get("/howitWorks", function(req, res){
    console.log("Connected to AFCPlushies how it works");
    res.send("/howitWorks");
})

app.get("/whoweAre", function(req, res){
    console.log("Connected to AFCPlushies who we are");
    res.send("/whoweAre");
})

app.get("/contactUs", function(req, res){
    console.log("Connected to AFCPlushies contact us");
    res.send("/contactUs");
})

module.exports = router; */