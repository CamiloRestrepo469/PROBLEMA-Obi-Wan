//  Manejo de la fuerza: Si el aprendiz es menor de 15 años
//  Manejo del sable de luz: Si el aprendiz es mayor de 15
// años
// Inicialmente, se debe programar una función que asocie los
// datos de: {nombre, planeta, edad y estatura} de 1 Padawan a un
// objeto y una vez este objeto sea creado se debe llamar a una
// función secundaria que clasifique y muestre en consola la
// actividad asignada al Padawan

let matricularAprendiz=(nombre,planeta,edad,estatura,clasificar) =>{
    let padawan= {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura
    }
    clasificar(padawan)
}
matricularAprendiz('camilo','tierra',13,180,(estudiante) => {estudiante.edad<15 ? console.log('Eres menor de la Edad exigida vas para Manejo de la fuerza ') : console.log (' Tienes la edad requerida para el Manejo del sable de luz')

});