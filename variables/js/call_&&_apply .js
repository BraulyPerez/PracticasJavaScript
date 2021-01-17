/* var obj = {
    name:"Brauly",
    apellido: 'perez',
    fnu: function(age){
        debugger
        console.log('hola '+ this.name + ' tu edad es: '+age)
        debugger
    },
   
}
var persona = {
    name: "confeli perez "
}
obj.fnu.call();
 */


function Persona( name, lastname){
    this.name = name;
    this.lastname = lastname;

    this.greet =function(){
        return 'Hola '+ this.name +' tu apellido es ' +this.lastname;
    }
}
var carlo = new Persona('lucas', 'castillo');
console.log(carlo) 


