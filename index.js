const { prompt } = require("inquirer");
const db = require("./connection");
require('console.table')



function loadMainPrompts() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Departments",
          value: "VIEW_ALL_DEPARTMENTS",
        },
        {
          name: "View All Roles",
          value: "VIEW_ALL_ROLES",
        },
        {
          name: "View All Employees",
          value: "VIEW_ALL_EMPLOYEES",
        },
        {
          name: "Add a Department",
          value: "ADD_A_DEPARTMENT",
        },
        {
          name: "Add a Role",
          value: "ADD_A_ROLE",
        },
        {
          name: "Add an Employee",
          value: "ADD_AN_EMPLOYEE",
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Exit",
          value: "EXIT",
        },
      ],
    },
  ]).then(function (answer) {
    switch (answer.choice) {
      case "VIEW_ALL_DEPARTMENTS":
        viewAllDepartments();
        break;
      case "VIEW_ALL_ROLES":
        viewAllRoles();
        break;
      case "VIEW_ALL_EMPLOYEES":
        viewAllEmployees();
        break;
      case "ADD_A_DEPARTMENT":
        addADepartment();
        break;
      case "ADD_A_ROLE":
        addARole();
        break;
      case "ADD_AN_EMPLOYEE":
        addAnEmployee();
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole();
        break;
      case "EXIT":
        db.end();
        break;
    }
  });
}

function viewAllDepartments() {
  db.query("select * from department", (err, res) => {
    if (err) throw err;
    console.table(res);
    loadMainPrompts();
  });
}

function viewAllRoles() {
  db.query("select * from role", (err, res) => {
    if (err) throw err;
    console.table(res);
    loadMainPrompts();
  });
}

function viewAllEmployees() {
  db.query("select * from employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    loadMainPrompts();
  });
}

function addADepartment() {
  prompt([
      {
        type: "input",
        message: "Add a department",
        name: "department",
      }]).then((data) => {
      db.query("insert into department set ?", {
        name: data.department,
      })
      loadMainPrompts()
    })
}

function addARole() {
  
    prompt([
      {
        type: "input",
        message: "Enter new role",
        name: "role",
      },
      {
        type: "input",
        message: "Enter Salary",
        name: "salary",
      },
      {
        type: "list",
        message: "What is the department id?",
        name: "department_id",
        choices: [1, 2, 3, 4, 5, 6, 7],
      },
    ])
    .then((data) => {
      db.query("insert into role set ?", {
        title: data.role,
        salary: data.salary,
        department_id: data.department_id,
      });
      loadMainPrompts();
    });
}

function addAnEmployee() {
  prompt([
      {
        type: "input",
        message: "Enter first name",
        name: "first_name",
      },
      {
        type: "input",
        message: "Enter last name",
        name: "last_name",
      },
      {
        type: "list",
        message: "Enter role ID",
        name: "role_id",
        choices: [1, 2, 3, 4, 5, 6, 7],
      },
    ])
    .then((data) => {
      db.query("insert into employee set ?", {
        first_name: data.first_name,
        last_name: data.last_name,
        role_id: data.role_id,
      });
      loadMainPrompts();
    });
}

function updateEmployeeRole() {
  prompt([
      {
        type: "input",
        message: "Enter employee ID to update role",
        name: "employee_id",
      },
      {
        type: "input",
        message: "Enter new employee ID",
        name: "role_id",
      },
    ])
    .then((data) => {
      console.log(data);
      db.query(
        "UPDATE employee set role_id = ? where id = ?",
        [data.role_id, data.employee_id],
        (err, result) => {
          if (err) throw err;
          console.log("Successful", result);
          loadMainPrompts();
        }
      );
    });
}

loadMainPrompts();
