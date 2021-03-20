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


// let nombre="Chewbacca y Han"
// let planeta = "yavin4"
// let numeroserie= 5
// //tradicional con html 
// function consecutivos(planosfalsos) {
//     document.getElementById("nave").innerHTML = planosfalsos;  
//   }
//     function numerocorrecto() {
//       if(numeroserie>011&&numeroserie<=10){
//         consecutivos(nombre + "  estos planos son  verdaderos puede despegar,  esto lo sabemos por el numero de serie es :  "+ numeroserie);
//       }   
//     }
//     function falsonumero() {
//       if(numeroserie>=11){
//         consecutivos("estos planos son falsos No puede despegar de este planeta  "+ planeta +"   esto lo sabemos por el numero de serie es : "+ numeroserie);
//       }   
//     }

// falsonumero();  
// numerocorrecto();
// //no me da por consola 
// // console.log(onsecutivos(nombre,planeta,numeroserie)) 

// console.log(nombre,planeta,numeroserie);

// function robarPlanos(idplano){
//   if(idplano>0&&idplano<=10){
//     let mensaje="el plano que se consiguio fue el "+ idplano;
//     return(mensaje)

//   }else{
//     let error="pilas no te has robodo un plano real "
//     return(error);
//   }

// }
// operador ternario
let robarPlanos2=(idplano,despegar)=>{
  if(idplano>0&&idplano<=10){
    let mensaje="el plano que se consiguio fue el "+ idplano;
    despegar(null,mensaje)

  }else{
    let error="pilas no te has robodo un plano real "
    despegarn(error,null);
  }

}

console.log(robarPlanos(5));


robarPlanos2(5,function(error,mensajeOK){

  if(error){
    console.log(error);
    console.log("nos quedamos ");
  }else{
      console.log(mensajeOK);
      console.log("Estamos despegando");
  }
  



});



 
