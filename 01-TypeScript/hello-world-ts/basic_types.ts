
//primitive types
let age:number;
age = 30;

let username:string;
username = 'Shaimaa';

let active:boolean;
active = false;


// arrays
let names:string[];
names = ["Hamza","Omar","Ali"];

let ages:number[];
ages = [10,7,8];

let person:{
    name:string;
    age:number;
    active:boolean;
}


person = {
    name: 'Shaimaa',
    age: 30,
    active: false
}

let persons : {
    name:string;
    age:number;
    active:boolean;
}[];

persons = [
    {
        name: 'Hamza',
        age: 10,
        active: true
    },
    {
        name: 'Omar',
        age: 9,
        active: false
    },
    {
        name: 'Ali',
        age: 8,
        active: true
    }


]


type Person = {
    name: string
    age: number
    active: boolean
}

let p1: Person;
let pp: Person[];

p1 = {
    name: 'Aya',
    age: 20,
    active:true
}

pp = [
    {
        name: 'Ahmed',
        age: 30,
        active:true
    },
    {
        name: 'Ali',
        age: 20,
        active:false
    }

]

function add(a: number, b:number): number{
    return a+b;
}

function print(value: any){
    console.log(value);
}


function appendAtBeginning<T>(arr: T[],value: T){
    const newArr = [value, ...arr];
    return newArr;
}

export {};
