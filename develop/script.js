// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let firstNamePrompt;
let lastNamePrompt ;
let salaryPrompt ;
let continueOrCancel;
let employeesArray = [""];


// const btnClick = addEmployeesBtn.onclick = function() {
//   firstNamePrompt = prompt("First Name");
// };




const btnClick = addEmployeesBtn.onclick = function () {

  firstNamePrompt = prompt("First Name");
  console.log(`The first name ${firstNamePrompt} is logged`)

  if (firstNamePrompt) {
     lastNamePrompt = prompt("Last Name");
     console.log(`The last name ${lastNamePrompt} is logged`)
  } else {
    alert("Please try again");
  };

  if (lastNamePrompt) {
   salaryPrompt = prompt("Salary"); 
   console.log(`The salary ${salaryPrompt} is logged`)

  } else {
    alert("Please try again");
  };

  if (!isNaN(salaryPrompt)) {
    continueOrCancel = window.confirm("Click ok to continue to add another or click cancel to see employees listed")
    console.log(`You clicked OK ${continueOrCancel}`)
  } else {
    alert("please try again");
  }

  if (continueOrCancel) {
    btnClick();
  } else {
    alert("Thank you!")
  }

}; 










// make window.confirm buttons either coninue function or add list to page


// Collect employee data
const collectEmployees = function() {
//   // TODO: Get user input to create and return an array of employee objects
//   if (firstNamePrompt) {
//     employeesArray = firstNamePrompt;
//     return employeesArray;
//   }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);