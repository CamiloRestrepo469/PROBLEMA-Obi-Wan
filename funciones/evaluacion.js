//  Manejo de la fuerza: Si el aprendiz es menor de 15 años
//  Manejo del sable de luz: Si el aprendiz es mayor de 15
// años
// Inicialmente, se debe programar una función que asocie los
// datos de: {nombre, planeta, edad y estatura} de 1 Padawan a un
// objeto y una vez este objeto sea creado se debe llamar a una
// función secundaria que clasifique y muestre en consola la
// actividad asignada al Padawan



let nombre="ooootor"
let planeta = "nepturnoort"
let edad = 16
let estatura = "2.50mt"

//tradicional con html 
function llamar(asocie) {
    document.getElementById("nave").innerHTML = asocie;
    
  }
   function myFuerza() {
      if(edad<15){
          llamar("nombre: "+nombre+"  planeta:  "+ planeta +"  edad: "+edad+ "  estatura: "+ estatura + "  eres menor de la exigida vas para Manejo de la fuerza");
      }   
    }
   function mySable() {
      if(edad>=15){
          llamar("nombre: "+nombre+"   planeta: "+planeta+"    edad: "+ edad +"   tienes la edad requerida para el Manejo del sable de luz");
      }   
  }
  mySable();
  myFuerza();

  console.log(nombre, planeta, edad, estatura);

//   //flecha con html 
//   let array=['ooootor','nepturnoort','14','2.50mt']=array.forEach(name, index => {
//       console.log(index + 1+'. '+name)
      
//   });