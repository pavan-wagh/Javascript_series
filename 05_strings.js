let str = "pavan"

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(2));
console.log(str.indexOf('v'));
console.log(str.slice(1,3))
console.log(str.slice(-4,3))
console.log(str.substring(0,3))

let newStr = "  pavan  "
console.log(newStr)
console.log(newStr.trim())  // remove white spaces.

let splitStr = "Hello, world"
console.log(splitStr.split())
console.log(splitStr.split(''))
console.log(splitStr.split(' '))
console.log(splitStr.split(','))
console.log(splitStr.split('-'))