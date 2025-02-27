const user = {
    firstName: "Álvaro",
    lastName: "Morón",
    age: 30,
    nationality: "Morocco",
}
  
function isForeign(user) {
    const {nationality, age} = user;
    const COUNTRY_SPAIN = "Spain";
    const hasRequiredAge = 30;

    if (nationality !== COUNTRY_SPAIN && age === hasRequiredAge) {
        return "Apto para la ayuda del gobierno";
    }

    return "No es apto para la ayuda del gobierno";
}

const result = isForeign(user);
  
console.log(result);