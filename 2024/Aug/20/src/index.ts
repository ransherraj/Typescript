// let y : string = "object";

// if(y === 'object'){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// console.log(y)

// let x : number = 10;
// console.log(x)

// Array

let num = [1, 2, 3];
let num2:number[] = [1, 2, 3]
let x : number[] = [];
x[0]=1
x[2]=3
console.log(x)

let numstr : [number, string] = [1, 'str']
let multivar : [number, string, boolean, number] = [1, 'str', true, 0]



// function
function render(h:any) {
    console.log(h)
};

// touple
let user:[number, string, boolean] = [1, 'raj', false]

//all methods of number
let a = user[0].toString(10)

// all methods of string
let b = user[1].length

//all methods of object
user.push(1, 3, 5)
user.push('raj', 'aniket', 'ayush')
user.push(1.1, true)
user.push(a, b)

console.log(user)


// enums

// no need of these variables
// const small = 1
// const medium = 2
// const large = 3

enum Size {Small, Medium, Large} // small = 1, medium = 2, large = 3 and so on ... by default

let mySize: Size = Size.Medium
console.log(mySize)

//Functions

function GetTaxRate(name: string, surname:string) : number{
    return 8.5 + name.length + surname.length
}
let rate : number = GetTaxRate('raj', 'raman')
console.log(rate)

//Objects  => are dynamic

let emp : {
    id : number,
    name : string
} = {id : 1, name : 'raj'}

let emp2 : {
    id : number,
    name? : string
} = {id : 1}   // not preferred

let emp3 : {
    readonly id : number,
    name : string
} = {id: 1, name:'raj'}  // name cannot be changed 

//emp3.id = 2    // cannot be changed
emp3.name = 'Anurag'

let emp4 : {
    readonly id : number,
    name : string,
    retire : (date : Date) => void
} = {id : 1, name : 'raj', retire: (date : Date) => {console.log(date)}}


// Advanced Typescript

//type Alias
type Employee = {
    readonly id : number,
    name : string,
    retire : (date : Date) => void
}

let emp5 : Employee = {id : 1, name : 'raj', retire: (date : Date) => {console.log(date)}}


//union types
function kgToLbs(weight : number | string) : number{
    //narrowing
    if(typeof weight === 'number'){
        return weight*2.2
    }
    else{
        return parseInt(weight) * 2.2
    }
}


//intersection types

type Draggable = {
    drag : () => void
}

type Resizable = {
    resize : () => void
}

type UIWidget = Draggable & Resizable

let textBox : Draggable & Resizable = {
    drag : () => {console.log("drag")},
    resize: () => {console.log("resize")}
}


// Literal Types
type Quantity = 50 | 100
let quantity : Quantity = 100 

type Metric = 'cm' | 'inch'


//nullable types

function Greet(name : string | null | undefined){
    if(name){
        console.log(name.toLocaleUpperCase())
    }else{
        console.log("Hi")
    }
}
Greet(null)


//Optional Chaining

//situation 1

// type Customer = {
//     birthday : Date
// }

// function getCustomer(id : number): Customer | null | undefined{
//     return id === 0 ? null :{birthday : new Date()}
// }

// let customer = getCustomer(0);

// console.log(customer?.birthday)

//situation 1

type Customer = {
    birthday? : Date
}

function getCustomer(id : number): Customer | null | undefined{
    return id === 0 ? null :{birthday : new Date()}
}

let customer = getCustomer(0);

console.log(customer?.birthday?.getFullYear)

// Optional element access operator
// customers?.[0]

// Optional Calls
let log : any = null
//log('a')  // crash
log?.('a')