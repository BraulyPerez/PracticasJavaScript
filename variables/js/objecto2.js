var studens = [
    {
        id:1,
        name:'Carlos',
        lastName:'Acosta'
    },{
        id: 2,
        name:'arian',
        lastName:'garcia',
        dinero:6000
    },{
        id: 3,
        name: 'Brauly',
        comida: 'picapollo',
        lastName:'Perez',
        dinero: 'en olla'
    }
];
for(var index of studens){
    if(index.id ==2){
        continue;
    }
    console.log(index)
}