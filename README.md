## TypeScript 2021
==================

#### Quick Intro
- Open source programming language from MS
- Superset of JS
- Compiles down to plain JS
- Extended JS
- Optional static typing and inference. When you don't refer to type, typescript will still point the issues in your code. Enables programmers to easily identify their issues in the code as they code. 
- Javascript supports dynamic typing which means errors are found at runtime


#### Setup
```
$ node -v
$ npm install -g typescript
$ tsc -v
```

#### Sample program
```javascript
// If you do not have an empty export, declared variable will be in global scope and you will notice typescript error related to that effect "cannot redeclare block scope variable"
export {};
let message = "Hello World!";
console.log(message);

```


* Using the watch option of the TypeScript compiler to automatically compile TypeScript files when a change is made to a file
  * $ tsc sample --watch 
  * TypeScript file gets transpiled into javascript

#### Variable declaration
- "let" and "const" is used in TypeScript for variable declaration
- JS has global and function scope and there is NO block level scope. This is the main difference to keep in mind.
- You can redeclare the same variable multiple times in JS. With the usage of __let__ and __const__ you cannot redeclare the same variable. They support block level scoping.
- "let" can be declared without a value and "const" requires the variable to be initialized. Once values are assigned to "const", values cannot be reassigned to it. 

```javascript
let a = 10;
const title = "Sample Program";
// cannot redeclare block level variable. Below statement is invalid
let a = 20; 
// cannot assign new value to title as it is constant
title = "New title";
```

```javascript

```

#### Variable types
* Basic JS types: Boolean, Number, String
* Template strings can span multiple lines and can have expressions
* Types for variables help in type checking when coding. TypeScript helps with static type checking. TypeScript has intellisense which enables programmers to identify associated functionalities.
* Other two types: null and undefined. They are classified as sub types of all other types

```javascript
let name:string = "Don";
let departmentId:number = 100;
let isEmployed:Boolean = true;
let description:string = `Employee name is ${name} belonging to Dept ${departmentId}.
Status of Employment: ${isEmployed}`;
console.log(description);

let info:string = null;
let identifier:number = undefined;

```

* Building on top of types and sub-types you can create an array. 
```javascript
let departments: string[] = ["IT", "Sales", "HR"];
let divisions: Array<string> = ["Sales1", "Sales2"];
```

* To create values of mixed types, tuples are used. In tuples, number of elements in the array are fixed.
```javascript
let employee: [string, number] = ["Adam", 28];
```

* Enum is used to give friendly names to number values
```javascript
enum race { asian=3, african, caucasian };
let myrace: race = race.african;
console.log(myrace)
```
* Any type is used if you are not able to determine the type of the variable. Especially used in API calls or when migrating from JS to TypeScript. It encompasses values of all types and does not constrain variable to any type. It is most forgiving. 
```javascript
let newVariable: any;
newVariable = "Welcome to my Club!";
newVariable.toUpperCase();
console.log(newVariable);
```

* From TypeScript 3, there is another type called "unknown" which literally means the same definition as "any" type. Unlike "any", when variables are declared as "unknown" then no associated methods for the variable type can be chosen. Type assertion (similar to type casting) can be used in the case when such kind of a scenario occurs.
```javascript
let newVariable2: unknown;
newVariable2 = "Welcome to my Club!";
(newVariable2 as string).toUpperCase();
console.log(newVariable2);
```