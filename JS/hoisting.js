//HOISTING - first called next declared
//VARIABLE HOISTING

console.log(a) //a is called before declared
var a = 10 // output is undefined if a is var -  var (Global Variable)

console.log(b)
let b = 2 //output is Reference error(can't access a b4 initialization) b - Local variable

//FUNCTIONAL HOISTING
konguClg() //Reference Error - konguClg() is not defined

KEC()
function KEC(){

} // Output is nothing because nothing inside KEC(), but called b4 declared - similar to VAR usage
