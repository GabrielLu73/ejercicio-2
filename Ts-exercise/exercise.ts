interface Bird {
    name : string;
    canEat : boolean;
    canDrink : boolean;
    canSleep : boolean;
    canFly : boolean;
};

const animal : Bird = {
    name : 'Polly',
    canEat : true,
    canDrink : true,
    canSleep : true,
    canFly : false
};

type DogRace = 'Husky' | 'Labrador' | 'Chucho'; 

interface Dog extends Bird{
    race : DogRace;
    age : number;
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

type Cat = Pick<Bird, "name" |  "canSleep"> & { color : string }

type Snake = Pick <Bird, "canDrink" | "canEat" | "canSleep">

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