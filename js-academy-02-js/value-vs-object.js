let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"

let result = s_prim.charAt(0)
console.log(result);
console.log(typeof result)

let result2 = s_obj.charAt(0)
console.log(result2);
console.log(typeof result2)

let s1 = '2 + 2'              // creates a string primitive
let s2 = new String('2 + 2')  // creates a String object
console.log(typeof eval(s1))         // returns the number 4
console.log(typeof eval(s2))         // returns the string "2 + 2"