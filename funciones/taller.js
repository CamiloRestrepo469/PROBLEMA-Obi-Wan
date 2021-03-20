// Obi-Wan Kenobi, necesita clasificar diferentes
// códigos de acceso a las naves de guerra los cuáles reposan en
// la base de datos central, para ello debe programar una función
// que permita recibir la palabra clave de cada nave y separar
// imprimiendo solo el nombre del piloto asignado a cada nave.
// Tenga en cuenta que el formato de todos los datos es el
// siguiente:
// • ARQ2555: Sara Bel-Sun
// • ARQ2556: Nodin Chavdri
// • ARQ2557: Finn


// let palabraclave = "ARQ2555: Sara Bel-Sun";
// let respuesta = palabraclave.split();


//tradicional 
let textSara="ARQ2555: Sara Bel-Sun";
let textNodin="ARQ2556: Nodin Chavdri";
let textFin="ARQ2557: Finn"

let split=textSara.split(": ")[1];
console.log(split);

//flecha
let palabraclave=(codigo)=>console.log(codigo.split(": ")[1]);
palabraclave(textNodin);
