const { ClientSession } = require("mongodb")


const obj = {
    name: 'pavan',
    price: 99,
    welcomemessage: function () {
        console.log(`${this.name},welcome to website`)
    }
}

//obj.welcomemessage()



const add = (num1, num2) => {
    return num1 + num2
}
//console.log(add(5, 6));

// implsit return
const sub = (num1, num2) => (num1 - num2)
//console.log(sub(9, 6));

const sum = (num1, num2) => ({ username: 'pavan' })
//console.log(sum(3, 1))



    /// ** Immediately invoked function expression -- IIFE
    // to remove the global function pollution

    (function code(){
        console.log(`db connected one`);
    }) ();       ///// ;  <---

    ( () =>{
        console.log(`db connected`);
    }) ()

    