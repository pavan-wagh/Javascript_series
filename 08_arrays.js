let arr = [1,2,3,4,5,6]
// arr.push(8)
// arr.pop()
// arr.unshift(0)
// arr.shift()

console.log(arr)

// console.log(arr.includes(5))
// console.log(arr.indexOf(6))

// const newArr = arr.join()
// console.log(newArr)


const myNew = arr.slice(1,3)
console.log(myNew)

const myArr = arr.splice(1,3)
console.log(arr)
console.log(myArr)


let fruits = ["apple","banana","graphes","chiku"]
let fruits2 =["orange","papya","mango","lemon"]

// const result = fruits.concat(fruits2)
// console.log(result)

const rel = [...fruits,...fruits2]  // spread 
console.log(rel)
