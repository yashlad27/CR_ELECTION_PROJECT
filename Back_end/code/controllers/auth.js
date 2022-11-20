const sql = require('mysql');
const jwt = require('jsonwebtoken'); 

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cr_election_project',
    password: 'MySQL@22'
});

exports.login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    
}