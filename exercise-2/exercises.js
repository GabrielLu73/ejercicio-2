console.log(a);  // <- Undefined
var a = "hola";

console.log(b);  // <-  Cannot access 'b' before initialization
let b = "hola";

console.log(c);  // <- Cannot access 'b' before initialization
const c = "hola";

sayHi();  //  <- Hola desde sayHi!

function sayHi() {
  console.log("Hola desde sayHi!");
}

function sayBye() {
    console.log("Adios desde sayBye!");
}
  
sayBye();  // <-  Adios desde sayBye!
