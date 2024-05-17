if (2 == "2") {
    console.log('Excute')
}
else {
    console.log('not excuted');
}


let score = 200

if (score > 100) {
    const power = "fly"
    console.log(power)
} else {
    console.log("no power")
}


const userLoggedIn = true
const debitCard = true

const userloginGoogle = false
const userLoginMail = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log('You can buy a cousre')
}
else {
    console.log('you cant buy a cousre');
}

if (userloginGoogle || userLoginMail) {
    console.log("you can login")
}


// switch statements

const month = 2
switch (month) {
    case 1:
        console.log('january')
        break;
    case 2:
        console.log('febuary')
        break;
    case 3:
        console.log('march')
        break;
    case 4:
        console.log('april')
        break;
    case 5:
        console.log('may')
        break;
    case 6:
        console.log('june')
        break;

    default:
        console.log('default case match')
        break;
}


/// ** Falsy values
 // false ,0,-0, bigint 0n ,null ,undefined, NaN, ""

 // **** truthy values *** 
  // "0", " ",[], {} ,"false" , function(){}


  const emptyArr = []

  if(emptyArr.length===0){
    console.log('array is empty')
  }


  const objEmpty = {}

  if(Object.keys(objEmpty).length===0){
    console.log("object is empty")
  }



  // terniary operator

  let price =100

  price> 99? console.log("price is greater than 100") : console.log("price is less than 100");