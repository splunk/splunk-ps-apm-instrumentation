require('dotenv').config();

const express = require("express");
const app = express();

// GET request
app.get("/api", (req, res) => {
    // Do something!
    res.sendStatus(200);
});

// Start the server
app.listen(3000, () => {
  console.log(`Server listening on 3000`);
});