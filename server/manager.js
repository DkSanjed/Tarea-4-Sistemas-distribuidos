const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
const port = 3000;

const getUsers = './get'
const postUser = './post'
const deleteUser = './delete'

app.use('/', require(getUsers))
app.use("/",require(postUser))
app.use("/",require(deleteUser))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
