let a = 5
const b = 6
var c =9

if(true){
    let a =4
    console.log('inner',a)

}

//console.log(a)


function one(){
    const username ="pavan"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    
    two()
}

one()



if(true){
    const username ='pavan'
    if(username=='pavan'){
        const website = ' youtube'
        console.log(username + website)
    }
}

  

 //  hoisting
console.log(sum(5))
function sum(number){
    return number +1
}

// function expression

sum1(9)     // error ,,, cannot access bofore initialization.
const sum1 = function(num){
    return num +2
}