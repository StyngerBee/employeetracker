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

// runs questions for adding a department //
const addDept = function () {
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is the department name?',
        },
    ])
        .then(answers => {
            db.query(`INSERT INTO department SET ?`, answers, function (err, result) {
                console.log(`${answers.name} added to Departments.`);
                initialQuestion();
            });
        })
}