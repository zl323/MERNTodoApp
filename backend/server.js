const express = require('express');
const app = express();
const bodyParser = require('body-parser')//middleware
const cors = require('cors'); //middleware
const PORT = 4000;
//use middleware
app.use(cors());
app.use(bodyParser.json());

//start server
app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);
});