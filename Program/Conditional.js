"use strict";
// If statement 
let age = 20;
if (age >= 15) {
    console.log("Eligible for voting");
}
// If-Else statement
let marks = 75;
if (marks >= 60) {
    console.log("You have passed the exams");
}
else {
    console.log("You have failed the exam");
}
let num = 20;
if (num % 2 == 0) {
    console.log(`${num} is an even number`);
    //$-> will get the value of num and print it in the console
    //`->backtick is used to print the value of num in the console
}
else {
    console.log(`${num} is an odd number`);
}
//Nested If-Else statement
let marks1 = 85;
if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
}
else if (marks >= 80 && marks < 90) {
    console.log("Grade B");
}
else if (marks >= 70 && marks < 80) {
    console.log("Grade C");
}
else {
    console.log("Grade D");
}
