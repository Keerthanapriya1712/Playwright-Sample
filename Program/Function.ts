//Named Functions with no parameters and no return type

function Display():void{
    console.log("Welcome to Named Functions");
}
Display();

//Named Functions with parameters and no return type

function addNumbers(x:number, y:number):number{
    return x + y; 
}
let result: number = addNumbers(5, 10);
console.log(result);

//console.log(addNumbers(5, 10));

//Named Functions with Rest parameters

function add