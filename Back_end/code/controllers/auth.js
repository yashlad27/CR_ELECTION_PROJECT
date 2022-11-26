const sql = require('mysql');

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cr_election_project',
    password: 'MySQL@22'
});

exports.login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    var qry = "SELECT * FROM cr_election_project.login_list WHERE ï»¿Email= ? AND Password=?";
    connection.query(qry, [email, password], (err, result) => {
        if(err) throw err;
        console.log(result);
        if(result.length > 0)
        {
            console.log("Record Found");
            res.render('card');
        }
        else
        {
            res.render('login', {
                message: "Email or Password is incorrect"
            })
        }
    })
    
}