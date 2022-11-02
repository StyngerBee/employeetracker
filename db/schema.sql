/* deletes database if it already exists, and creates new one for this program */
DROP DATABASE IF EXISTS universe_db;
CREATE DATABASE universe_db;

/*uses database for in dbeaver*/ 
USE universe_db;

/* tables with their attributes for each table type */ 
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  names VARCHAR(255) NOT NULL
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(255),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE manager (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  department_id INT,
  salary DECIMAL,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE SET NULL
);
