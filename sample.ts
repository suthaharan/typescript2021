export {};
let message = "Hello World!";
console.log(message);

// let vs const
let aa = 10;
const title = "Sample Program";
// // cannot redeclare block level variable. Below statement is invalid
// let a = 20; 
// // cannot assign new value to title as it is constant
// title = "New title";

// JS Types
let name:string = "Don";
let departmentId:number = 100;
let isEmployed:Boolean = true;
let description:string = `Employee name is ${name} belonging to Dept ${departmentId}.
Status of Employment: ${isEmployed}`;
console.log(description);

// Array declaration
let departments: string[] = ["IT", "Sales", "HR"];
let divisions: Array<string> = ["Sales1", "Sales2"];


// Tuples: For values of mixed types
let employee: [string, number] = ["Adam", 28];

// Enums
enum race { asian=3, african, caucasian };
let myrace: race = race.african;
console.log(myrace)

// Any type
let newVariable: any;
newVariable = "Welcome to my Club!";
newVariable.toUpperCase();
console.log(newVariable);

// unknown type
let newVariable2: unknown;
newVariable2 = "Welcome to my Club!";
(newVariable2 as string).toUpperCase();
console.log(newVariable2);

//
let a;
a=10;
a=true;
let b=20;
//b=true; // will not work

let myType : number | boolean;
myType = 10;
myType = true;

// simply multiply
function multiply(a: number, b: number):number{
    return a * b;
}
// Multiply with optional parameters
function multiply2(a: number, b?: number):number{
    if(b){
        return a * b;
    }else{
        return a;
    } 
}
// Multiply with default assignment
function multiply3(a: number, b: number=10):number{
    return a * b;
}


class person{
    name: string;
    title: string;
    constructor(n: string, t: string){
        this.name = n;
        this.title = t;
    }
    greet(){
        console.log( `Welcome ${this.title}.${this.name}!` );
    }
}

let p = new person('Van', 'Mr');
let m = p.greet();

class customer extends person{
    loyaltymember: boolean;
    year: number;
    constructor(n: string, t:string, l:boolean, y:number){
        super(n,t);
        this.loyaltymember = l;
        this.year = y;
    }
    isLoyal(){
        if(this.loyaltymember){
            console.log(`${this.name} is a loyal member since ${this.year}`);
        }else{
            console.log(`${this.name} is not a loyal member`);
        }
    }
}

let c = new customer('Van', 'Mr', true, 1976);
c.greet();
c.isLoyal();