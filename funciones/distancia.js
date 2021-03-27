let cornadaFinalx=70
let cornadaFinaly=-50

let cornadainicialx=0
let cornadainicialy=0

//funcion
function calculardistancia(xinicial,xfinal,yinicial,yfinal){
    let cordenadasx=xfinal-xinicial
    let cordenadasy=yfinal-yinicial

    let cuadradox=Math.pow(cordenadasx,2)
    let cuadradoy=Math.pow(cordenadasy,2)

    let sumatotal=cuadradox+cuadradoy

    let distancia=Math.sqrt(sumatotal)

    return (distancia)



}
console.log(calculardistancia(cornadainicialx,cornadaFinalx,cornadainicialy,cornadaFinaly))

// ********************************************************************************************************
// flecha

let calculardistancia2 = (xinicial,xfinal,yinicial,yfinal)=>Math.sqrtRAIZ(POTENCIA(xfinal-xinicial)+POTENCIA(yfinal-yinicial));
console.log("la distancia es   :  " + calculardistancia2(cornadainicialx,cornadaFinalx,cornadainicialy,cornadaFinaly));