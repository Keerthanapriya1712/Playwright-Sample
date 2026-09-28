// If statement 

let age: number = 20;
if(age>=15){
    console.log("Eligible for voting");
}

// If-Else statement

let marks: number = 75;
if(marks>=60){
    console.log("You have passed the exam");
}       
else{
    console.log("You have failed the exam");
}

let num:number=20;

if(num%2==0){
    console.log(`${num} is an even number`);
    //$-> will get the value of num and print it in the console
    //`->backtick is used to print the value of num in the console

}
else{
    console.log(`${num} is an odd number`);
}

//Nested If-Else statement

let marks1:number=85;       

if(marks>=90 && marks<=100){
    console.log("Grade A");
}
else if(marks>=80 && marks<90){
    console.log("Grade B");
}
else if(marks>=70 && marks<80){
    console.log("Grade C");
}
else{
    console.log("Grade D");
}

//Switch statement

let day:number=3;
switch(day){
    case 1: 
    Console.log("Monday");
    break;      
    case 2:
    console.log("Tuesday");
    break;  
    case 3:
    console.log("Wednesday");
    break;      
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;  
    case 7:
    console.log("Sunday");
    break;  
    default:
    console.log("Invalid day");
}
