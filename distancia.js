// let cornadaFinalx=70
// let cornadaFinaly=-50

// let cornadainicialx=0
// let cornadainicialy=0

// //funcion
// function calculardistancia(xinicial,xfinal,yinicial,yfinal){
//     let cordenadasx=xfinal-xinicial
//     let cordenadasy=yfinal-yinicial

//     let cuadradox=Math.pow(cordenadasx,2)
//     let cuadradoy=Math.pow(cordenadasy,2)

//     let sumatotal=cuadradox+cuadradoy

//     let distancia=Math.sqrt(sumatotal)

//     return (distancia)



// }
// console.log(calculardistancia(cornadainicialx,cornadaFinalx,cornadainicialy,cornadaFinaly)) 


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



let codigosSara="ARQ2555"
let codigosNodin="ARQ2556"
let codigosFinn="ARQ2557"
    
function myFunction() {
    let codigo = prompt('Por favor ingresa códigos de acceso.');
    if (codigo==codigosSara){
        let palabraclave = "ARQ2555 :Sara Bel-Sun";
    let respuesta = palabraclave.split("ARQ2555",3);
    document.getElementById("nave").innerHTML = respuesta;
    
    }else if(codigo==codigosNodin){
        let palabraclave = "ARQ2556 :Nodin Chavdri";
    let respuesta = palabraclave.split("ARQ2556",3);
    document.getElementById("nave").innerHTML = respuesta;

    }else if(codigo==codigosFinn){
        let palabraclave = "ARQ2557 :Finn";
    let respuesta = palabraclave.split("ARQ2557",3);
    document.getElementById("nave").innerHTML = respuesta;

    }
    else{
        document.getElementById("nave").innerHTML =" Este codigo No existe ";
        
    }
    
  }

//   La luna de Endor pierde temperatura día a día,
// para ello hay que hacer un monitoreo constante, Cree una
// función de flecha que permita calcular la temperatura media de
// la luna a partir de la temperatura máxima y mínima de cada día 

