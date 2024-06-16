// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let firstNamePrompt;
let firstNameArray = [];
let lastNamePrompt ;
let addLastNameText;
let lastNameArray = [];
let salaryPrompt ;
let salaryArray = [];
let averageSalary = [];
let continueOrCancel;

let employees = [
  {
    firstName: "",
    lastName: "",
    salary: ""
  }
];


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
    firstNameArray.push(firstNamePrompt)


  } else {
    console.log("Please Try Again");
    !btnClick;
   };

  if (lastNamePrompt) {
    salaryPrompt = prompt("Salary"); 
    const addTableText2 = document.createElement('td');
    tableAppend.appendChild(addTableText2);
    addLastNameText = addTableText2.textContent = lastNamePrompt;

   console.log(`The salary ${salaryPrompt} is logged`)
   lastNameArray.push(lastNamePrompt);

  

  } else {
    console.log("Please Try Again");
    !btnClick;
  };

  if (!isNaN(salaryPrompt) && salaryPrompt) {
    continueOrCancel = window.confirm("Click ok to continue to add another employee or click cancel to see employees listed")
    const addTableText3 = document.createElement('td');
  //  convert number to Dollar amount
   const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const dollarAmount = formatter.format(salaryPrompt);

    tableAppend.appendChild(addTableText3);
    addTableText3.textContent = dollarAmount;
    console.log(`You clicked OK ${continueOrCancel}`);

    salaryArray.push(salaryPrompt);

   averageSalary.push(salaryPrompt);
  } else {
    console.log("Please Try Again by adding a number");
    !btnClick;
  }

  if (continueOrCancel) {
    btnClick();   
  } else {
    console.log("Thank you!")

    // Sort employees alphabetically




  //  function sortTable(n) {
  //   let table1, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  //   table1 = table;
  //   switching = true;

  //   dir = "asc";

  //   while (switching) {
  //     switching = false;
  //     rows = table1.rows;

  //     for (i = 1; i < (rows.length - 1); i++) {
  //       shouldSwitch = false;

  //       x = rows[i].addTableText1[n];
  //       y = rows[i + 1].addTableText1[n];

  //       if (dir == "asc") {
  //         if ( x.lastNamePrompt.toLowerCase() > y.lastNamePrompt.toLowerCase()) {
  //           shouldSwitch = true;
  //           break;
  //         }
  //       } else if (dir == "desc") {
  //         if ( x.lastNamePrompt.toLowerCase() < y.lastNamePrompt.toLowerCase()) {
  //           shouldSwitch = true;
  //           break;
  //       }
  //     }

  //     if (shouldSwitch) {
  //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //       switching = true;
  //     }else {
  //       if (switchcount == 0 && dir == "asc") {
  //         dir = "desc";
  //         switching = true;
  //       }
  //   } 
  //   }
  //  };

  //  sortTable(addTableText2);


  // get random employee


  employeesArray = [tableAppend.innerText]
 

  const randomizeEmployees = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomizeEmployees];
  console.log("The random employee is", randomEmployee);


    // Calculate average of Employee Salaries

    const stringToNumbers = averageSalary.map(num => parseInt(num));

    const calculateAverage = function (numbers) {
      let sum = numbers.reduce((acc, curr) => acc + curr, 0);
      let averageSum = sum / numbers.length;
      return averageSum; 
    };
    const average = calculateAverage(stringToNumbers);

    const averageFormatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const averageDollarAmount = averageFormatter.format(average);

    console.log("The average salary of all the employee salaries is", averageDollarAmount);

   }

};









// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

};

collectEmployees.append

   // Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

displayAverageSalary();


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