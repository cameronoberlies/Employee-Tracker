

INSERT INTO department
    (name)
VALUES

('Jedi'),
('Sith'),
('Administration'),
('Royalty'),
('Droids'),
('Bounty Hunter'),
('Smuggler');

INSERT INTO role
    (title, salary, department_id)
VALUES
('Jedi', 110000, 1),
('Sith Lord', 75000, 2),
('Smuggler', 100000, 3),
('Jedi Master', 75000, 1),
('Administrator of Cloud City', 90000, 4),
('Princess', 180000, 5),
('Bounty Hunter', 150000, 6),
('Protocol Droid', 165000, 7);


INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
('Obi', 'Wan', 1, 1),
('Darth', 'Vader', 2, NULL),
('Anakin', 'Skywalker', 3, 3),
('Lando', 'Calrissian', 4, NULL),
('Han', 'Solo', 5, 5),
('Leia', 'Organa', 6, NULL),
('Boba', 'Fett', 7, 7),
('C3', 'PO', 8, NULL);

