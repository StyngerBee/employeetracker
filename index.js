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

const addRole = function () {
    inquirer.prompt([
        {
            name: 'title',
            message: 'What is the role\'s title?',
        },
        {
            name: 'salary',
            message: 'What is the role\'s salary?'
        },
        {
            type: 'list',
            name: 'department',
            message: 'What department does this role belong to?',
            choices: [
                'Middle Earth',
                'Hogwarts',
                'Westeros',
                'The Four Nations',
                
            ]
        }
    ])
    .then(answers => {
        db.query(`INSERT INTO role SET ?`, answers, function (err, result) {
            console.log(`${answers.title} added to Employees.`);
            initialQuestion();
        });
    })
}

const addEmployee = function () {
    inquirer.prompt([
        {
            name: 'first_name',
            message: 'What is the employee\'s first name?',
        },
        {
            name: 'last_name',
            message: 'What is the employee\'s last name?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of this employee?',
            choices: [
                'Hobbit',
                'Wizard',
                'Brother of the Night\'s Watch',
                'Fire Nation',
                'Water Nation',
                'Earth Nation'
            ]
        }
    ])
    .then(answers => {
        db.query(`INSERT INTO employee SET ?`, answers, function (err, result) {
            console.log(`${answers.first_name} ${answers.last_name} added to Roles.`);
            initialQuestion();
        });
    })
}

// function for running the first question to begin inquirer  //
const firstQuestion = function () {

    inquirer.prompt([
        {
            type: 'list',
            name: 'todo',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee',
            ],
        }
    ])