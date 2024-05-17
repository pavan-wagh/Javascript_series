// *** filter ***
const numbers = [1,2,3,4,5,6,7,8,9,10]

const newNum =numbers.filter((num)=>{
    return num > 6        // if u open scope then u should use retun
    
})

//console.log(newNum)



// *** map ***


// const data = [10,20,30,40,50,60,70]
// const  result = data.map((item)=>  item + 10 )
// console.log(result)


const data = [10,20,30,40,50,60,70]
const  result = data
                 .map((item)=>  item * 10 )
                 .map((item)=> item + 1)
                 .filter((item)=> item >= 220)

console.log(result)

