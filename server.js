/* Initialize the Modules */
var express= require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    mongoose = require("mongoose");

/* Initialize Express */
var app = express();

/* Init DB Setting */
require('./config/db');

/* Set up Routes */
const crudM = require('./routes/crud');
const index = require('./routes/index');

/* Setup View Engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

/* Body Parser Middelware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/* Define Rotues */
app.use('/',index);
app.use('/crudM',crudM);

/* Port Listen */
app.listen(3000,function(){ console.log("3000 Port Stated!"); })
