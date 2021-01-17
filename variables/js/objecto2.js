var studens = [
    {
        id: 1,
        name: 'Carlos',
        lastName: 'Acosta'
    }, {
        id: 2,
        name: 'arian',
        lastName: 'garcia',
        dinero: 6000
    }, {
        id: 3,
        name: 'Brauly',
        comida: 'picapollo',
        lastName: 'Perez',
        dinero: 'en olla'
    }
];
for (var index of studens) {
    if (index.id == 2) {
        continue;
    }

}
var myObj = {
    bar: 'foo',
    func: function () {
        /* var self = this; */  
        console.log('1- ' + this.bar);
            (function () {
                console.log('2- ' + self.bar)
            })();
        var miSegundaFuncion = function () {
            debugger
            console.log('3- ' + this.bar)
        }
        console.log('4- ' +this.bar)
        miSegundaFuncion();
    }
};
myObj.func();