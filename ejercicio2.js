 const arr = ["primero","segundo","tercero","cuarto","quinto"];
 const num = [1,2,3,4];
 const animales = ["León","Gato","Perro","Panda", ["Lobo", "Buho"]];

 arr.forEach(e => console.log(e));

 const funcionFlecha = (e) => {
    e.forEach(a => console.log(a));
 };

 funcionFlecha(num);
 funcionFlecha(arr);

 const btn = document.getElementById("btn");

 btn.addEventListener("click", () => {
    document.write("<h1>Esto funciona</h1>");
 });

 console.log("<<<<<<<<<>>>>>>")

 for(let i = 0; i < animales.length; i++){

    if(Array.isArray(animales[i])){
        funcionFlecha(animales[i]);
    }else{
    console.log(animales[i]);
    }
    
 }

