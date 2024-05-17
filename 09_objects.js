const obj = {
    name:'pavan',
    age : 24,
    email: 'pavan@123',
    id:6
}

// console.log(obj.name)
// console.log(obj["email"])

obj.myfunc = function(){
    console.log('Hello js user')
}

obj.myfunc2 = function(){
    console.log(`Hello js user ${this.name}`)
}

// console.log(obj.myfunc())
// console.log(obj.myfunc2())

const obj2 = {
    email:"abc@655",
    currentUser:{
        userInfo:{
            name:'pavan',
            lastname:"wagh"

        }
    }
}

// console.log(obj2.currentUser.userInfo.name)

const marks = {
    a:78, b:96
}

const marks2 ={c:26,d:92}

const marks3 = Object.assign({},marks,marks2)
console.log(marks3)

const marks4 = {...marks,...marks2} // spread
console.log(marks4)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))



// de-structure

const info ={
    cousre:"js",
    fees:200,
    instructor:"hitesh"
}

const {instructor} = info
console.log(instructor)