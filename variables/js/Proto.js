var studens = [
    {
        name: 'Marlun'
    },
    {
        name: 'alexis'
    },
    {
        name: 'jefrry'
    },
    {
        name: 'Franklin'
    },
    {
        name: 'Brauly',
        apellido: 'perez'
    },
    {
        name: 'manuel'
    }
]

Array.prototype.estudiantes = function (key, value) {

    const response = this.filter(elem => elem[key] === value);
    if (response.length === 0) {
        return 'No se ha encontrado'
    } else {
        return response;
    }
}
/* console.log(studens.estudiantes('apellido', 'perez')) */

Number.prototype.encontrar = function (numero) {
    if (numero == 1 || numero == 0) {
        return null;
    }
    for (let i = 0; i <= numero; i++) {
        if (numero %i == 0) {
            var salida = i + 1 + 'el numero: '+ numero+'es divisaible por: ' + i;
            console.log(salida); 
        }
    }
}
/* var entrada = prompt('ingresa el numero') */
/* prototype.encontrar(entrada); */

var animal = {
    type:'perro',
    color:'Negro',
    age: 22,
    /* sayHello: function(){
        console.log('hola del animal '+this.color)
    } */
}

var gatito = new animal();
gatito.__proto__.sayHello = function(){
    console.log('hola');
}
gatito.sayHello();
