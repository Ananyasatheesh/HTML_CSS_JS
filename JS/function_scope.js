//Function without ret and argument type
function greet(){
    console.log("Good Morning");
}
greet()

//Function without ret and with argument type
function odd_even(a,b){
    for (i=a;i<b;i++) {
        if (i%2==0) {
            console.log(i, "is even")
        } else 
            console.log(i, "is even")
    }
}
odd_even(5,10)

//function with ret type and argument
function hii(a) {
    if (a>0 && a<100) {
        return a;
    }
    else 
        return -1;
}
console.log(hii(23));

//function with ret and without argument
function arg(){
    return "helloo";
}
console.log(arg())


//Scoepes - local and global
var a =10;
{
    let a = 5;
    let b = 2
    console.log(a)
    console.log(b)
}
console.log(a);
// console.log(b) - Refernce error

var a =10;
{
    a = 5;
    let b = 2
    console.log("a is redeclared")
    console.log(a)
    console.log(b)
}
console.log(a);