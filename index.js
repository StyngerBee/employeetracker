const inquirer = require('inquirer');
const mysql = require('mysql2');

// connects to universe_db database //
const db = mysql.createConnection(
    {
        user: 'root',
        password: 'Rowling#15',
        database: 'universe_db'
    },
    console.log(`Connected to the universe_db.`)
);