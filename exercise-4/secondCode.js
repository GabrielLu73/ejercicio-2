const Users = {
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
  
    return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
  }
  
  console.log(userData(Users));