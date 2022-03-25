// Render file for each webpage

import express from 'express'
const app = express();

function router() {
  app.get("/", function(req, res) {
    console.log("Connected to AFCPlushies home");
    res.send("/");
  });

  app.get("/howitWorks", function(req, res) {
    console.log("Connected to AFCPlushies how it works");
    res.send("/howitWorks");
  })

  app.get("/whoweAre", function(req, res) {
    console.log("Connected to AFCPlushies who we are");
    res.send("/whoweAre");
  })

  app.get("/contactUs", function(req, res) {
    console.log("Connected to AFCPlushies contact us");
    res.send("/contactUs");
  })
}
export {
  router as default
};
