var persona = {
    id: 1,
    nombre: 'Brauly',
    apellido: 'Perez',
    ubicacion: {
        nombre: 'Santo domingo',
        sector : 'Mendoza'
    },
    estudiante: true,
    estado_sentimental:{
        tiene_novia: 'no',
        tiempo_soltero: '3 diaz'
    },
    function(dinero){
        var diasSintrabajar =  2;
        var gastos_diarios = 500;
        for (let i= 2; i>0; i--) {
            var dinero = dinero- gastos_diarios;
            if(dinero <0){
                return 'no te queda ni uno manin'
            }
        }
        return dinero;
    }
}
var dinero = prompt ('cuanto tu tienes en tu cartera ?')
//var tostones = parseInt(catera);
console.log(persona.id)
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.ubicacion.nombre)
console.log(persona.ubicacion.sector)
console.log(persona.estudiante)
console.log(persona.estado_sentimental)
console.log(persona.function(dinero))

