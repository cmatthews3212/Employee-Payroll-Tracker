// // Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// let firstNamePrompt;
// let firstNameArray = [];
// let lastNamePrompt ;
// let addLastNameText;
// let lastNameArray = [];
// let salaryPrompt ;
// let salaryArray = [];
// let averageSalary = [];
// let continueOrCancel;


// let employees = [
//   {
//     firstName: "",
//     lastName: "",
//     salary: ""
//   }
// ];


// const firstTable = document.querySelector('#first-name');
// const lastTable = document.querySelector('#last-name');
// const salaryTable = document.querySelector('#salary');

// const table = document.querySelector('thead');
// let tableAppend;

// let employeesArray = [];




// const btnClick = addEmployeesBtn.onclick = function () {

//   tableAppend = document.createElement('tr')
//   table.appendChild(tableAppend);
//   // let array = [tableAppend.innerText]



//  console.log(tableAppend)
// //  console.log(array);
//  employeesArray.push(tableAppend);
//  console.log(employeesArray);
  

 

//   firstNamePrompt = prompt("First Name");
//   console.log(`The first name ${firstNamePrompt} is logged`)


//   if (firstNamePrompt) {
//     lastNamePrompt = prompt("Last Name");
//     const addTableText1 = document.createElement('td');
//     tableAppend.appendChild(addTableText1);
//     addTableText1.textContent = firstNamePrompt + " ";
//     console.log(`The last name ${lastNamePrompt} is logged`)
//     firstNameArray.push(firstNamePrompt)

  
    

    
  

//     // employeesArray.push(firstNamePrompt)
//     // employeesArray = employeesArray + firstNamePrompt



//   } else {
//     console.log("Please Try Again");
//     !btnClick;
//    };

//   if (lastNamePrompt) {
//     salaryPrompt = prompt("Salary"); 
//     const addTableText2 = document.createElement('td');
//     tableAppend.appendChild(addTableText2);
//     addLastNameText = addTableText2.textContent = lastNamePrompt + " ";

//    console.log(`The salary ${salaryPrompt} is logged`)
//    lastNameArray.push(lastNamePrompt);
//    lastNameArray.sort();
  

//   //  employeesArray.push(lastNamePrompt);

//   //  employeesArray = employeesArray + lastNamePrompt

//  console.log("These are the last names", lastNameArray)
 


  

//   } else {
//     console.log("Please Try Again");
//     !btnClick;
//   };

//   if (!isNaN(salaryPrompt) && salaryPrompt) {
//     continueOrCancel = window.confirm("Click ok to continue to add another employee or click cancel to see employees listed")
//     const addTableText3 = document.createElement('td');
//   //  convert number to Dollar amount
//    const formatter = Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   });
//   const dollarAmount = formatter.format(salaryPrompt);

//     tableAppend.appendChild(addTableText3);
//     addTableText3.textContent = dollarAmount;
//     console.log(`You clicked OK ${continueOrCancel}`);

//     // salaryArray.push(salaryPrompt);

//     // employeesArray.push(salaryPrompt);
//     // employeesArray = employeesArray + salaryPrompt


//    averageSalary.push(salaryPrompt);
//   } else {
//     console.log("Please Try Again by adding a number");
//     !btnClick;
//   }

//   if (continueOrCancel) {
//     btnClick();   
//   } else {
//     console.log("Thank you!")

//     console.log(employeesArray)
    


// // order Alphabetically


// console.log(lastNameArray);

// if (lastNameArray) {
//   employeesArray.sort(function (a, b) {
//     if (a.lastNameArray < b.lastNameArray) {
//       return -1
//     } else {
//       return 1;
//     }
//   })
// } else {
//   console.log("Its not working")
// };

// // employeesArray.sort(function(a,b) {
// //   if (a.lastNamePrompt < b.lastNamePrompt) {
// //     return -1;
// //   } else {
// //     return 1;
// //   }
// // });

//  console.log(employeesArray.sort());
  



// // pick random employee


     
//   const randomizeEmployees = Math.floor(Math.random() * employeesArray.length);
//   const randomEmployee = employeesArray[randomizeEmployees];
//   console.log("Congratulations to", randomEmployee.textContent, "our random drawing winner!");


//     // Calculate average of Employee Salaries

//     const stringToNumbers = averageSalary.map(num => parseInt(num));

//     const calculateAverage = function (numbers) {
//       let sum = numbers.reduce((acc, curr) => acc + curr, 0);
//       let averageSum = sum / numbers.length;
//       return averageSum; 
//     };
//     const average = calculateAverage(stringToNumbers);

//     const averageFormatter = Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     });
//     const averageDollarAmount = averageFormatter.format(average);

//     console.log("The average salary between the", employeesArray.length, "employee salaries is", averageDollarAmount);

//    }

  


// };




  let employeesArray = {
    addElem(elem) {
      [].push.call(this, elem);
    }
  };
  
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
     
      


    } else {
      console.log("Salary is canceled")
      !continueOrCancel;
    }

   if (continueOrCancel) {
    btnClick()
    buildTable(employeesArray); 
    function buildTable(data) {
      let table = document.querySelector('thead');
      
      for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                      <td>${data[i].name}</td>
                      <td>${data[i].lastName}</td>
                      <td>${data[i].salary}</td>
                  </tr>`
              table.innerHTML += row;
      }
    
    };
   

  
   } else {
    console.log("you hit cancel")
    selectRandomEmployee();
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

console.log(employeesArray);
console.log(salaryArray)
      

  






// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

};

collectEmployees.append

// const stringToNumbers = salaryArray.map(num => parseInt(num));
   // Display the average salary
const displayAverageSalary = function() {
  // TODO: Calculate and display the average salary
    // const calculateAverage = function (numbers) {
    //   let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    //   let averageSum = sum / numbers.length;
    //   return averageSum; 
    // };
    // const average = calculateAverage(stringToNumbers);

    // const averageFormatter = Intl.NumberFormat('en-US', {
    //   style: 'currency',
    //   currency: 'USD',
    // });
    // const averageDollarAmount = averageFormatter.format(average);

    // console.log("The average salary between the", salaryArray.length, "employee salaries is", averageDollarAmount);

}

displayAverageSalary();



// Select a random employee

const selectRandomEmployee = function () {
  const randomizeEmployees = Math.floor(Math.random() * employeesArray.length);
  console.log(randomizeEmployees);
  const randomEmployee = employeesArray[randomizeEmployees];
  console.log("Congratulations to", randomEmployee.name, randomEmployee.lastName, randomEmployee.salary, "our random drawing winner!");
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