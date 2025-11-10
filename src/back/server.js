const express = require("express");

const app = express();

const port = 2030;

app.listen(port, (req, res) => {
  console.log(` in the  ${port}`);
});
