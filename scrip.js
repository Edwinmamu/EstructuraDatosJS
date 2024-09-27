// dentro de los corchetes puede ir cualquier tipo deinformacion 

// let numero = 23 
// let varibleCosas = [23,true,"jaime", function name(params) {},[],numero]
// let otroArreglo = []
// // impresion del arreglo 

// console.log(varibleCosas)
// console.log (otroArreglo)

// // impresion de las posiciones del arreglo 

// console.log(varibleCosas[0] * varibleCosas[5]);
// console.log([1])
// console.log([5])
// console.log([3])
// console.log(otroArreglo)

// RECORRIDO EN LOS ARREGLOS 

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //.length determina cuantos elemetos hay en el arreglo y termina en la ultima posocion 
// for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index] % 2 == 0) {
//         console.log(numeros[index])

//     }




// LLENADO EN LOS ARREGLOS 

let nombres = []
for (let index = 0; index < 5; index++) {
    nombres[index] = prompt('ingrese su nombre:')
    
}
 //RECORRIDO LUEGO DE LLENAR EL ARREGLO
 for (let index = 0; index < nombres.length; index++) {
   console.log(nombres[index])
    
 }
