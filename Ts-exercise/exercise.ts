//Excercise 1
interface Bird {
    name : string;
    canEat : boolean;
    canDrink : boolean;
    canSleep : boolean;
    canFly : boolean;
};

//Exercise 2
type DogRace = 'Husky' | 'Labrador' | 'Chucho'; 

interface Dog extends Bird{
    race : DogRace;
    age : number;
};

//Exercise 3
type Cat = Pick<Bird, "name" |  "canSleep"> & { color : string }
type Snake = Pick <Bird, "canDrink" | "canEat" | "canSleep">

//usage examples
const animal : Bird = {
    name : 'Polly',
    canEat : true,
    canDrink : true,
    canSleep : true,
    canFly : false
};

const huskyDog : Dog = {
    name: 'Husky Dog',
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Chucho",
    age: 5
};

const cat : Cat  = {
    name : "gato",
    canSleep : true,
    color : "blanco y negro"
}

const snake : Snake = {
    canDrink : true,
    canEat : true,
    canSleep : true
}

console.log(animal);
console.log(huskyDog);
console.log(cat);
console.log(snake);