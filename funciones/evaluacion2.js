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

let robarPlanos2=(idplano,despegar)=>{
  if(idplano>0&&idplano<=10){
    let mensaje="el plano que se consiguio fue el "+ idplano;
    despegar(null,mensaje)

  }else{
    let error="pilas no te has robodo un plano real "
    despegarn(error,null);
  }

}

console.log(robarPlanos(2));

// flecha
robarPlanos2(33,function(error,mensajeOK){

  if(error){
    console.log(error);
    console.log("nos quedamos ");
  }else{
      console.log(mensajeOK);
      console.log("Estamos despegando");
  }
  



});
console.log(robarPlanos2(55));



 
