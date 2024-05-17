function myFunc(){
    console.log("p")
    console.log("a")
    console.log("v")
    console.log("a")
    console.log("n")
}

//myFunc()

function addNumbers(num1,num2){
    console.log(num1 + num2)
}

// addNumbers(6,3)
// addNumbers(6,8,"6")

function addNumbers(num1,num2){
    return num1 + num2

}

const result = addNumbers(5,8)
//console.log(result);

function loginUser(userName){
    return `${userName} is logged in`
}


//console.log(loginUser("pavan"));


function addCart(...num){    // rest operator
    return num
}

console.log(addCart(10,457,495,2000))


const obj = {
    username:"pavan",
    roll:369
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username},and roll number is ${anyObject.roll}`)
}

//handleObject(obj)


const arr = [10,20,30,41]

function anyArray(myarr){
    return myarr[2]

}

console.log(anyArray(arr))