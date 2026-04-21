// Variable type
// let, const, var
// const is blocked-scoped and cannot be reassigned
const name = "John";
// name = "Doe"; // Error: Assignment to constant variable
let age = 30;
age = 31; // Allowed: age can be replaced
// let age = 31 // Error

var isActive = true; // var is function-scoped amd can be reassigned
var isActive = false; // Allowed: var can be redeclared and reassigned

console.log(city);

// scoped variables
if(true){
    const lastname = "Doe"; //Blocked-scoped variable
    let firstname = "Ram"; //Blocked-scoped variable
    var city = "Kathmandu"; //Function-scoped variable
    console.log(lastname); //Output: Doe
    console.log(firstname); //Output: Ram
    console.log(city); //Output: Kathmandu
}
//console.log(lastname); //Error: lastname is not defined
//console.log(firstname); //Error: firstname is not defined
console.log(city); //Output: Kathmandu

//Data types [commonly used]
let stringVar = "Hello World!"; //String
let numberVar = 42;
let longNumberVar = 9007199n; //BigInt
let booleanVar = "true"; //Boolean
let nullVar = null; //Null
let undefinedVar; //Undefined
let symbolVar = Symbol("uniquw"); //Symbol
let symbolVar2 = Symbol("unique"); //Different symbol, even with the same description


console.log(stringVar, typeof stringVar);
console.log(numberVar, typeof numberVar);
console.log(longNumberVar, typeof longNumberVar);
console.log(booleanVar, typeof booleanVar);
console.log(undefinedVar, typeof undefinedVar);
console.log(nullVar, typeof nullVar); // Note: typeof null returns "object"
console.log(symbolVar, typeof symbolVar);
console.log(symbolVar === symbolVar2); // Output: false, because symbols are unique

//if else if else
let score = 85;
if(score >= 90) {
    console.log("Grade: A");
} else if(score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: F");
}
// ternary operator
// condition ? turth : false;
let grade = score < 40 ? "Fail" : "Pass";
console.log("Grade:",grade);

// swith
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); 
        break;
        default:
        console.log("Other day");
}
// =, ==, ===
let num1 = 5;
let num2 = "5";
console.log(num1 == num2);//true
console.log(num1 === num2);//false

const arr1 = ["apple", "mango", "watermelon"];
console.log(arr1[0]); //Output: apple
arr1.push("banana"); //Adds "banana" to the end of the array
arr1.unshift("grape"); //Adds "grape" to the beginning of the array
console.log(arr1)


//iterating array
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}
//for of loop(iterate element/value)
for(const fruit of arr1){
    console.log(fruit)
}
//for in loop(iterate index/key)
for(const index in arr1){
    console.log(arr1[index])
}


//Create an array of students
const stu1 = {
    name: "Ram",
    age: 21,
    
}