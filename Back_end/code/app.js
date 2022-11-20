var express = require('express');
var app = express();
var sql = require('mysql');
var path = require('path');


const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cr_election_project',
    password: 'MySQL@22'
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

// GET URL ENCODED DATA FROM THE FORM
app.use(express.urlencoded({ extended: false }));
// STORE THE FORM DATA IN JSON 
app.use(express.json());

app.set('view engine', 'hbs');

connection.connect((err) => {
    if(err) console.log(err);
    console.log("Database connected successfully")
});


// ROUTES
app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'));




// START A LOCALHOST SERVER
app.listen(3000, function(){
    console.log("Server started at localhost");
});


