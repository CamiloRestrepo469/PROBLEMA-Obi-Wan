//RETO DEL FIZZ BUZZ (200 numeros enteros)

/*Escribe, un programa que muestre en pantalla los números del 1 al 200, 
sustituyendo los múltiplos de 3 por el palabro “Fizz” y, a su vez, los múltiplos 
de 5 por “Buzz”. Para los números que, al tiempo, son múltiplos de 3 y 5, utiliza el combinado 
“FizzBuzz*/


for (let i=1;i<=200;i++){
    
    let result='';
    if(i % 3 == 0){

        result +='Fizz';
    }
    if(i % 5 == 0){
        result +='Buzz';
    }
  console.log(result||i);
}
