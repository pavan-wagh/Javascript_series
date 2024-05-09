// Var:- it can reassigned and redeclared and its a  function scope.
var x = 10;
if(true){
    var x =20;
    console.log(x)
}

console.log(x)

// let :- it can be reassigned but not redecleared within the same block scope

let y = 1;
if (true){
    let y =2
    console.log(y)
}

console.log(y)



// const:- canot be redeclared or reassigned.
const z = 10;
