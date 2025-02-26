const User = {
    firstName: "Pedro",
    lastName: "Sánchez",
    age: 45,
    profession: "Barro man",
}

const result = userName(User);
console.log(result);
  
function userName(user) {
    const {firstName, lastName} = user;

    if(!firstName || !lastName){
        return "doesn't have first name or last name"
    }

    return `Me llamo ${firstName} ${lastName}` ;
}