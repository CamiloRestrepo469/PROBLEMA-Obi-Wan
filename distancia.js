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
