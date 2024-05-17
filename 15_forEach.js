const data = ['js','java','ruby','c']

data.forEach( function(items){
    //console.log(items)
})

data.forEach((items,index,arr)=>{
    //console.log(items,index,arr)
})

function printMe(items){
    //console.log(items)
}

//data.forEach(printMe)

let myObj =[{
    languageName:'js',
    languageFile:'javascript',
},
{
    languageName:'java',
    languageFile:'java'
},
{
    languageName:'python',
    languageFile:'py'
},

]

myObj.forEach( (items)=>{
    console.log(items.languageName)
})



// *** reduced ***
const mynum = [1,2,3]
const total = mynum.reduce((acc,curr)=>{
    return acc + curr
},0)