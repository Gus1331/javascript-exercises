let x = "a"
function test(){
    console.log(this);
}
// test(x);         <- não imprime o valor de x
// test(true);      <- não imprime o valor de x
// test.bind(x);    <- não imprime o valor de x
let y = test.bind(x); // <-empurra x como 'this' para a função test
y();