var numer=[];
var valor;
for (let i = 1; i <= 100; i++) {
    if(i%3==0 && i%5 ==0){
        valor = 'FizzBuzz';
        numer[i-1] =valor;
    }else if(i%3==0 && i%5 !=0){
        valor = 'Fizz'
        numer[i-1]=valor;
    }else if (i%3!=0 && i%5 ==0){
        valor='Buzz'
        numer[i-1]=valor
    }else{
        valor=i
        numer[i-1]=valor
    }
}
console.log(numer)