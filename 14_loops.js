for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element)
    
}


for (let i = 0; i < 10; i++) {
    //console.log(`outer loop:${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(i + '*' + j + '=' + i*j)
        
    }
    
}


// ***** break and continue

// for (let index = 0; index < 15; index++) {
//     if(index == 9){
//         console.log("9 is detected")
//         break
//     }
//     console.log(`the value of i is:${index}`);
    
// }


// for (let index = 0; index < 15; index++) {
//     if(index == 9){
//         console.log("9 is detected")
//         continue
//     }
//     console.log(`the value of i is:${index}`);
    
// }


// *** while loop ***

let i = 0;
while(i <=10){
    //console.log(i)
    // 
    i = i+2
}

let myArr =['ironman','batman','spiderman']

let arr = 0;
while(arr<myArr.length){
    //console.log(myArr[arr])
    arr = arr  +1
}


// **Do While loop ***

// let score =15

// do{
//     console.log(score)
//     score++
    
// } while(score <=10)


    // *** for of loop ***


    const numbers = [1,2,3,4,8];

    for(let num of numbers){
        //console.log(num)

    }



const greetings = 'hello world'

for(const greet of greetings){
   // console.log(greet)
}


// maps 

const map = new Map()

map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')

//console.log(map)


// *** for in loop for object ***

const obj = {
    name :"pavan",
    roll:977,
    email:"pavan@485"
}

for(let key in obj){
   //
   //console.log(key)
}


const programming = ['js','java','c++','ruby']

for(let key in programming){
   // console.log(programming[key])
}