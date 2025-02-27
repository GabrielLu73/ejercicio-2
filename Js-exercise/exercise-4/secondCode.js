const user = {
  firstName: "Pedro",
  lastName: "Sánchez",
  age: 45,
  salary: 1000,
  profession: "Barro man",
}
  
const userData = (user) => {
  const {firstName, lastName, salary} = user;
  const annualSalary = salary * 12;
  const fullName = `${firstName} ${lastName}`;

  if(!firstName || !lastName || !salary){
      return console.log("First name, last name, or salary is missing");
  }
  
  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

const result = userData(user);
  
console.log(result);