function hello(name)
{
    console.log("hey peeps");
    console.log("my name is " + name);
}
hello("remal");
hello("Arif");
function sum(num1, num2){
    var x = num1 + num2
    console.log ("the sum of " + num1 + "and " + num2 + "is " + x);
    return x
}
sum(3, 2);
function helloAge(name, age){
    let dif = 2021-age
    
    let output = "hello " + name + "you're now " + dif +" and you're so young too" ;
    return output
}
console.log(helloAge ("Arif",2003))
console.log(helloAge ("Remal",2000))