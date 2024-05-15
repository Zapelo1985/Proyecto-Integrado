const mysql = require('mysql');

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Raxila2021as',
    database: 'habit_games',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');

});



module.exports = connection;