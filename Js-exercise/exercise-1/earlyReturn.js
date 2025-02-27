const Person = {
    name : "Carlo",
    lastname: "Doe",
    age: "58",
    email: "carlodoe@gmail.com"
}

const isPerson = (person) => {
    const {name, lastname} = Person;

    if(!Person){
        return "Not is a person";
    }
    if(!name || !lastname){
        return "No name or lastname";
    }

    return `me llamo ${name} ${lastname}`;
}

const fullName = isPerson(Person);

console.log(fullName)