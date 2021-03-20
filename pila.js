// console.log("hola")
// let suma=(2+5)
// console.log(suma)

// console.log("cero")

// function uno(){
//     setTimeout(() => 
//      console.log("uno")
    
//     ),0

    
// }
// console.log("dos")

// function tres(){
//     console.log("tres")
// }

function uno(auxiliar,dos){
    setTimeout(function(){
        console.log("uno"+auxiliar)
        dos();
    },2000)
        
    }
    // function dos(){
    //     
    // }


uno(5,function(){
    console.log("dos")
});

