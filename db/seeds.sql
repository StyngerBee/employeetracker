INSERT INTO department (names)
VALUES  ('Middle Earth'),
        ('Hogwarts'),
        ('Westeros'),
        ('The Four Nations');

INSERT INTO roles (title, salary, department_id)
VALUES ('Hobbit', 10.00, 1),
       ('Wizard', 0, 2),
       ("Brother of the Night's Watch", 1.00, 3),
       ('Fire Nation', 0.00, 4),
       ('Water Nation', 0.00, 4),
       ('Earth Nation', 0.00, 4);

INSERT INTO manager (first_name, last_name, department_id, salary)
VALUES ('Avatar', 'Aang', 4, 0.00),
       ('Gandalf', 'The Grey', 1, 15.00),
       ('Albus', 'Dumbledore', 2, 100.00),
       ('Bran', 'Stark', 3, 200.00);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Toph', ' ', 6, 1),
       ('Sokka', ' ', 5, 1),
       ('Katara', ' ', 5, 1),
       ('Zuko', ' ', 4, 1),
       ('Frodo', 'Baggins', 1, 2),
       ('Jon', 'Snow', 3, 4),
       ('Harry', 'Potter', 2, 3);


    