// Variables veri tipleri

// Primitive veri tipleri - yalnizca kendisi

//number
//let a = 10; 
//console.log(typeof a)

//string
//let b = "yiğit"; 

// boolean

// null - hicbir deger tasimiyor
//let c = null 

//undefined - henuz deger verilmemis
//let d; 
//Any variable can be emptied, by setting the value to undefined. 
//The type will also be undefined.
//car = undefined;    Value is undefined, type is undefined

// reference veri tipleri

//array
//let numbers = [1,2,3,4,5] 

//object
//const person = {
//    firstName: "John",
//    lastName : "Doe",
//    id       : 5566,
//    fullName : function() {
//      return this.firstName + " " + this.lastName;
//    }
//};  

//Accessing Object Properties
//You can access object properties in two ways:
//objectName.propertyName or objectName["propertyName"]
//You access an object method with the following syntax:
//objectName.methodName()

//fonskiyon
//let merhaba = function(){
//    console.log("merhaba")}

//JavaScript Arithmetic

//If you put a number in quotes, the rest of the numbers will be treated as strings, 
//and concatenated.
//let x = 2 + 3 + "5";

// JavaScript Logical Operators
// && logical and
// || logical or
// ! logical not

//String Methods and Properties

//The length property returns the length of a string:
//let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//let length = txt.length;

//slice() extracts a part of a string and returns the extracted part 
//in a new string.
//The method takes 2 parameters: 
//the start position, and the end position (end not included).
//let str = "Apple, Banana, Kiwi";
//let part = str.slice(7, 13);
//console.log(part) -> banana
//let part = str.slice(-12, -6); -> counted from the end of the string.

//substr() is similar to slice().
//The difference is that 
//the second parameter specifies the length of the extracted part.
//let str = "Apple, Banana, Kiwi";
//let part = str.substr(7, 6);

//The replace() method replaces a specified value with 
//another value in a string:
//let text = "Please visit Microsoft!";
//let newText = text.replace("Microsoft", "W3Schools");

//Looping Array Elements
//One way to loop through an array, is using a for loop:
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//let fLen = fruits.length;
//
//let text = "<ul>";
//for (let i = 0; i < fLen; i++) {
//  text += "<li>" + fruits[i] + "</li>";
//}
//text += "</ul>";

//You can also use the Array.forEach() function:
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//
//let text = "<ul>";
//fruits.forEach(myFunction);
//text += "</ul>";
//
//function myFunction(value) {
//  text += "<li>" + value + "</li>";
//}

//if (age < 18) text = "Too young to buy alcohol";


//Conditional (Ternary) Operator
//Syntax
//variablename = (condition) ? value1:value2 
//let voteable = (age < 18) ? "Too young":"Old enough";


//if else koşullu durumlar
//if (time < 10) {
//    greeting = "Good morning";
//} else if (time < 20) {
//  greeting = "Good day";
//} else {
//  greeting = "Good evening";
//}

//for loop
//for (let i = 0; i < cars.length; i++) {
//    text += cars[i] + "<br>";
//}

//for in loop - can be used in objects and arrays
//const numbers = [45, 4, 9, 16, 25];
//
//let txt = "";
//for (let x in numbers) {
//  txt += numbers[x];
//}

//while (i < 10) {
//    text += "The number is " + i;
//    i++;
//  }

//The break statement "jumps out" of a loop.
//The continue statement "jumps over" one iteration in the loop.