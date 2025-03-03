interface Bird {
    name : string;
    canEat : boolean;
    canDrink : boolean;
    canSleep : boolean;
    canFly : boolean;
};

class Husky {
    name : string; 
    constructor(){
        this.name = "Husky";
    }
};
class Labrator {
    name : string;
    constructor(){
        this.name = "Labrator";
    }
};
class Chucho {
    name : string;
    constructor(){
        this.name = "Chucho";
    }
};

interface Dog extends Bird{
    race : Husky | Labrator | Chucho;
    age : string;
};

const animal : Bird = {
    name : 'Polly',
    canEat : true,
    canDrink : true,
    canSleep : true,
    canFly : false
};

console.log(animal);

const huskyDog : Dog = {
    name: 'Husky Dog',
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: Husky,
    age: '1 year'
};

console.log(huskyDog);

type cat = {
    name : string;
    color : string;
    canSleep : boolean;
}

type snake = {
    canEat : boolean;
    canDrink : boolean;
    canSleep : boolean;
}