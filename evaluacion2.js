// PROBLEMA: Han solo y Chewbacca deben infiltrarse en el
// planeta yavin4 para robar uno de los planos de una de las 10
// estrellas de la muerte, como distractor el imperio ha creado
// planos falsos y se tiene el dato de que el número de serie de
// estos planos falsos comienza por encima del número 10; es decir
// todos los planos falsos tienen números de serie consecutivos
// comenzando desde el #11. SOLO si se obtiene un plano verdadero
// Chewbacca y Han pueden abordar su nave y ejecutar un mensajeen
// consola avisando que han despegado
// Configure la rutina necesaria para despegar la nave utilizando
// callbacks


let nombre="Chewbacca y Han"
let planeta = "yavin4"
let numeroserie= 5
//tradicional con html 
function consecutivos(planosfalsos) {
    document.getElementById("nave").innerHTML = planosfalsos;  
  }
    function numerocorrecto() {
      if(numeroserie<11){
        consecutivos(nombre + "  estos planos son  verdaderos puede despegar " +"   esto lo sabemos por el numero de serie es :  "+ numeroserie);
      }   
    }
    function falsonumero() {
      if(numeroserie>=11){
        consecutivos("estos planos son falsos No puede despegar de este planeta  "+ planeta +"   esto lo sabemos por el numero de serie es : "+ numeroserie);
      }   
    }

falsonumero();  
numerocorrecto();
//no me da por consola 
// console.log(onsecutivos(nombre,planeta,numeroserie)) 

console.log(numeroserie);

 
