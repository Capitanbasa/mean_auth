const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');
mongoose.connect(config.mongohost, { useMongoClient: true });
mongoose.Promise = global.Promise;
const app = express();

const users = require('./routes/users');

const port = 3000;

//cors middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
//body parser middleware
app.use(bodyParser.json());
app.use('/users', users);

app.get('/',(req,res)=>{
    res.send("the port: "+port);
});
app.listen(port, () => {
    console.log("server serve at "+port);
});
