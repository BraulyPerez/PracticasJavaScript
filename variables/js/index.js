//var variable= 1;
//var nombre= 'carlos';
//console.log(window);
function sayHello() {
    var minombre = 'carlos'
    var tuNombre = 'papotico'
    console.log('soy ' + minombre + ' y tu nombre es ' + tuNombre)
}
var calculo = function (firthNumer, seconNumer) {
    if (firthNumer == 0) {
        return 'no puede estar mandado 0 ruyio'
    }
    var sumatoria = firthNumer + seconNumer;
    return sumatoria;
}

function Nombre(nombre){
    return function apellido(apellido){
        return 'Hola ing ' +nombre+' '+apellido
    }
}
var primervalor = Nombre('Brauly')('Perez');
//console.log(primervalor);

function ejecutar(funcion){
    console.log('hola mano ')
    funcion();
}

ejecutar(Hola);

function Hola(){
 console.log('ps mira que si se puede puto')
}