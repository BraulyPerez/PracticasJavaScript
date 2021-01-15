var entrada = prompt('cuantos nombres tienes ?');
let matriz = new Array(entrada.length)

for (let i=0; i<entrada; i++){
    var nombre = prompt(i+1 + ' nombre:')
    matriz[i] =  nombre;
}
console.log(matriz);