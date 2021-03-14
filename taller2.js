//   La luna de Endor pierde temperatura día a día,
// para ello hay que hacer un monitoreo constante, Cree una
// función de flecha que permita calcular la temperatura media de
// la luna a partir de la temperatura máxima y mínima de cada día 

// Mínima 40 K (-233 °C) Media (día) 380 K (107 °C) Media (noche) 120 K (-153 °C) Máxima 396 K (123 °C)
//tradicional 
let temperaturaMaxima=123
let temperaturaMinima=-233

function calculartemperaturaluna(temperaturainicial,tempuraturafinal){
    let temperaturamedia=(temperaturainicial+tempuraturafinal/2)
     return (temperaturamedia)

}
console.log(calculartemperaturaluna("temperatura media de la luna en grados C = ",temperaturaMaxima,temperaturaMinima))

console.log("------------------------------------------------------------------------------------------------------")

//flecha 
let calculartemperaturalunas2=(temperaturainicial,tempuraturafinal)=>{
    return(temperaturainicial+tempuraturafinal/2)
}

console.log(calculartemperaturalunas2("temperatura media de la luna en grados C = ",temperaturaMaxima,temperaturaMinima));




// console.log("la formula esta en C : ",(123 + (-233)/2))



