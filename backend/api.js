const bodyParser = require('body-parser');
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use('/controller',require('./api/controller'));

mongoose.connect('mongodb://localhost/DatingSite',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected'))
.catch((err)=> console.log(err));
  
 app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
 });


  app.listen(3001, () => {
    console.log("server started on port 3001");
  });