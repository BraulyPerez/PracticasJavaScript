var entrada = prompt('cuantos nombres tienes ?');
let matriz =[]

for (let i=0; i<entrada; i++){
    var nombre = prompt(i+1 + ' nombre:')
    matriz[i] =  nombre;
}
console.log(matriz);

let anuncio = prompt('quieres entrar algun otro nombre mas ?')
if (anuncio === 'si'){
    let entrada1 = prompt('cuantos nombre quieres entrar?')
    for (let j = 0 ; j<entrada1; j++){
        entrada1 = prompt(j+1 +' nombre')
        matriz.push(entrada1)
    }
}
console.log(matriz);