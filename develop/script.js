// // Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');




let employeesArray = {
  addElem(elem) {
    [].push.call(this, elem);
  }

};

let objArray = [];




  
let firstName;
let lastName;
let salary;
let continueOrCancel;
let dollarAmount;
let salaryArray = [];



  


  const btnClick = addEmployeesBtn.onclick = function () {
   
   
   
  
   firstName = prompt("firstName")
  if (firstName) {
    lastName = prompt("Last Name")

    } else {
     console.log("First Name Canceled");
     !lastName;
    };
  if (lastName) {
      salary = prompt("salary")
      
     } else {
      console.log("Last Name Canceled");
      !salary;
    };

    if (!isNaN(salary) && salary) {
          continueOrCancel = window.confirm("Click ok to continue to add another employee or click cancel to see employees listed")
          //  convert number to Dollar amount
         const formatter = Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });
        dollarAmount = formatter.format(salary);

        salaryArray.push(salary);
        
        
        employeesArray.addElem({name: firstName, lastName: lastName, salary: dollarAmount});
        objArray = Object.values(employeesArray)
        objArray.sort((a, b) => {
          let nameA = a.lastName;
          let nameB = b.lastName;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1
          }
      
          return 0;
      
        });

        

        console.log(objArray);

    
          
        
      


    } else {
      console.log("Salary is canceled")
      !continueOrCancel;
    }

   if (continueOrCancel) {
    btnClick()
   
   

  
   } else {
  
    

    // add to table
    buildTable(objArray); 
    function buildTable(data) {
      let table = document.querySelector('thead');
      let x;
      
      for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                      <td>${data[i].name}</td>
                      <td>${data[i].lastName}</td>
                      <td>${data[i].salary}</td>
                  </tr>`
              table.innerHTML += row;
      }
    };

  
  




// sortEmployees();

    // select random employee
    selectRandomEmployee();

    // Calculate average of the salaries
    const stringToNumbers = salaryArray.map(num => parseInt(num));
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

    console.log("The average salary between the", salaryArray.length, "employee salaries is", averageDollarAmount);

  
    
   }
   
   
}

const selectRandomEmployee = function () {
  const randomizeEmployees = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomizeEmployees];
  console.log("Congratulations to", randomEmployee.name, randomEmployee.lastName, "our random drawing winner!");
}

      

  






// // Collect employee data
// const collectEmployees = function() {
//   // TODO: Get user input to create and return an array of employee objects

// };

// collectEmployees.append

// // const stringToNumbers = salaryArray.map(num => parseInt(num));
//    // Display the average salary
// const displayAverageSalary = function() {

// }
// // 
// // displayAverageSalary();



// Select a random employee








/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// // Display employee data in an HTML table
// const displayEmployees = function(employeesArray) {
//   // Get the employee table
//   const employeeTable = document.querySelector('#employee-table');

//   // Clear the employee table
//   employeeTable.innerHTML = '';

//   // Loop through the employee data and create a row for each employee
//   for (let i = 0; i < employeesArray.length; i++) {
//     const currentEmployee = employeesArray[i];

//     const newTableRow = document.createElement("tr");

//     const firstNameCell = document.createElement("td");
//     firstNameCell.textContent = currentEmployee.firstName;
//     newTableRow.append(firstNameCell);

//     const lastNameCell = document.createElement("td");
//     lastNameCell.textContent = currentEmployee.lastName;
//     newTableRow.append(lastNameCell);

//     const salaryCell = document.createElement("td");
//     // Format the salary as currency
//     salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
//       style:"currency",
//       currency:"USD"
//     });

//     newTableRow.append(salaryCell);

//     employeeTable.append(newTableRow);
//   }
// }

// const trackEmployeeData = function() {
//   const employees = collectEmployees();

//   console.table(employees);

//   displayAverageSalary(employees);

//   console.log('==============================');

//   getRandomEmployee(employees);

//   employees.sort(function(a,b) {
//     if (a.lastName < b.lastName) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });

//   displayEmployees(employees);
// }

// // Add event listener to 'Add Employees' button
// addEmployeesBtn.addEventListener('click', trackEmployeeData);