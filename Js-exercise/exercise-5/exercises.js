const myMap = new Map();

const user = {};
const user2 = {};

function findAnimal(){};

myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal());
myMap.set("color","color")

for (const [key, values] of myMap.entries()){
    console.log(key, values);
}

for (const key of myMap.keys()){
    const KEY_MOROSO = "moroso";
    if(myMap.has(KEY_MOROSO)){
        console.log(key);
        break;
    }
}

const isKey = myMap.has("hola");
console.log(isKey);

const mapSize = myMap.size;
console.log(mapSize);

myMap.forEach((value, key) => {
    console.log(key, value);
});

myMap.delete("agarrado");
console.log(myMap);

myMap.clear();
console.log(myMap);