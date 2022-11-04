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
            type: 'input',
            name: 'name',
            message: 'What is your department?',
        },
    ])
        .then(answers => {
            db.query(`INSERT INTO department(names) VALUES('${answers.name}')`, function (err, results) {
                console.log(`${answers.name} added to departments.`);
                firstQuestion();
            });
        })
}

// function to inquire about role and it's salary, and adds it to a department
const addRole = function () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: `What is your role?`,
        },
        {
            type: 'input',
            name: 'salary',
            message: `What is your salary?`
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
        db.query(`INSERT INTO roles(title, salary, department_id) VALUES('${answers.title}, ${answers.salary}, ${answers.department}')`, function (err, results) {
            console.log(`${answers.title} added to employees.`);
            firstQuestion();
        });
    })
}

// addEmployee function to inquire about employee data such as first name/ last name and their role/department
const addEmployee = function () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: `What is their first name?`,
        },
        {
            type: 'input',
            name: 'last_name',
            message: `What is their last name?`
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of this employee?',
            choices: [
                'Hobbit',
                'Wizard',
                `Brother of the Night's Watch`,
                'Fire Nation',
                'Water Nation',
                'Earth Nation'
            ]
        },
        {  
            type: 'list',
            name: 'manager',
            message: 'Who is your manager?',
            choices: [
                'Avatar Aang',
                'Gandalf the Grey',
                'Albus Dumbledore',
                'Bran Stark'
            ]
        }
    ])
    .then(answers => {
        db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('${answers.first_name}, ${answers.last_name}, ${answers.role}, ${answers.manager}')`, function (err, results) {
            console.log(`${answers.first_name} ${answers.last_name} added to roles.`);
            firstQuestion();
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
                'View departments',
                'View roles',
                'View employees',
                'Add department',
                'Add role',
                'Add employee',
                'Finished editing'
            ],
        }
    ])
    .then(answers => {
        console.log(answers);

        if (answers.todo === 'Add department') {
            addDept();
        } 
        else if (answers.todo === 'Add role') {
            addRole();
        } 
        else if (answers.todo === 'Add employee') {
            addEmployee();
        } 
        else if (answers.todo === 'View departments') {
            db.query('SELECT * FROM department', function (err, department) {
                console.table(department);
                firstQuestion();
            });
        } 
        else if (answers.todo === 'View roles') {
            db.query('SELECT * FROM roles', function (err, role) {
                console.table(role);
                firstQuestion();
            });
        } 
        else if (answers.todo === 'View employees') {
            db.query('SELECT * FROM employee', function (err, employee) {
                console.table(employee);
                firstQuestion();
            });
        }
        else if (answers.todo === 'Finished editing'){
             
        }
    });
};


// initializes program
firstQuestion();