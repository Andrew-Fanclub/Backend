// Main backend file
// Side note I have a bunch of stuff commented out don't worrk about it
// I'll fix them up

// Needed imports
import express from 'express'
import render from './components/render.js';
import * as http from 'http';
import * as path from 'path';
import {fileURLToPath} from 'url';
// In ES6 module notation:
import Database from 'better-sqlite3';
/*
Brad: I get the error:
SyntaxError: Cannot use import statement outside a module
UPDATE 3/24/2022: now i get
SyntaxError: The requested module './components/mailer.js' does not provide an export named 'default'
UPDATE: "ReferenceError: body is not defined"
*/
//import Mailer from './components/mailer.js';

// ES modules do not have these, so we declare them
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// sql database
const db = new Database('data.db', { verbose: console.log });

// Set backend port
app.set('PORT', process.env.PORT || 8080);

/*
BRAD: what does this do? Why are we serving pages from the frontend?
Let React web server serve the pages?
*/
// Render webpages
// app.use(path.join(__dirname, '../../Website/Website/frontend/build'));

app.get("/", function(req, res) {
  console.log();
  res.sendFile(path.join(__dirname, 'build', 'main'));
})

app.get("/howitWorks", function(req, res) {
  console.log();
  res.sendFile(path.join(__dirname, 'build', './routes/howitWorks'));
})

app.get("/aboutus", function(req, res) {
  console.log();
  res.sendFile(path.join(__dirname, 'build', './routes/whoweAre'));
})

app.get("/contact", function(req, res) {
  console.log();
  res.sendFile(path.join(__dirname, 'build', './routes/contact'));
})

// Mailer section for contact page
app.post('/process?contactUs', function(req, res) {
  Mailer();
})

// Start listening on port 8080
app.listen(app.get('PORT'), function() {
  console.log('Server started on port: ' + app.get('PORT'));
})

/*
// Create the server
const server = http.createServer((req, res) => {
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
})

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
