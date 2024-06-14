// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let firstNamePrompt;
let lastNamePrompt ;
let salaryPrompt ;
let continueOrCancel;


const firstTable = document.querySelector('#first-name');
const lastTable = document.querySelector('#last-name');
const salaryTable = document.querySelector('#salary');

const table = document.querySelector('thead');
let tableAppend;





const btnClick = addEmployeesBtn.onclick = function () {

  tableAppend = document.createElement('tr')
  table.appendChild(tableAppend);

  firstNamePrompt = prompt("First Name");
  console.log(`The first name ${firstNamePrompt} is logged`)


  if (firstNamePrompt) {
    lastNamePrompt = prompt("Last Name");
    const addTableText1 = document.createElement('td');
    tableAppend.appendChild(addTableText1);
    addTableText1.textContent = firstNamePrompt;
    console.log(`The last name ${lastNamePrompt} is logged`)

  } else {
    console.log("Please Try Again");
   };

  if (lastNamePrompt) {
    salaryPrompt = prompt("Salary"); 
    const addTableText2 = document.createElement('td');
    tableAppend.appendChild(addTableText2);
    addTableText2.textContent = lastNamePrompt;

   console.log(`The salary ${salaryPrompt} is logged`)

  } else {
    console.log("Please Try Again");
  };

  if (!isNaN(salaryPrompt)) {
    continueOrCancel = window.confirm("Click ok to continue to add another or click cancel to see employees listed")
   const addTableText3 = document.createElement('td');
    tableAppend.appendChild(addTableText3);
    addTableText3.textContent = salaryPrompt;
    console.log(`You clicked OK ${continueOrCancel}`);
  } else {
    console.log("Please Try Again");
  }

  if (continueOrCancel) {
    btnClick();   
  } else {
    console.log("Thank you!")
   };

};






// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
//   for(let i = 0; i < 1; i++) {
//     firstNamePrompt;
//     // firstArray.push(firstNamePrompt);
//   }

//   // addtable1a.textContent = firstNamePrompt;
//   console.log(firstArray)

//   for(let i = 0; i < 1; i++) {
//     lastNamePrompt;
//     lastArray.push(lastNamePrompt);
//   }

//   console.log(lastArray)

//   for(let i = 0; i < 1; i++) {
//     salaryPrompt;
//     salaryArray.push(salaryPrompt);
//   }

//   console.log(salaryArray)

};

collectEmployees.append

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
