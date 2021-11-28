export {}
let message=  'let"s Nacho'




let name: string= 'manish'
let isHandsome : boolean = true
let age: number = 24

let sentence :string = `My name is ${name}
I am a beginner in TS`


let n:null = null
let u:undefined =undefined

let cost : number = undefined
let isNew: boolean  = null


let arr1 : number[] = [1,2,3,4,5]
let arr2 : Array<number> = [12,24,36]

let mixArray : [string,number] = ['name', 20]


enum Color { Red, Green, Blue}

let c: Color = Color.Blue

let inputFromUser: any
inputFromUser = true
// inputFromUser() is allowed


let random: unknown
// random() is not allowed
// random.name is not allowed

// (random as string).toUpperCase()


let a;
a = 20
a= 'coding'



// when we initialize var it type get fixed at that time (type inference)
let b = 'serious'
//  b =30 through us an error - Type 'number' is not assignable to type 'string'.ts(2322)


let multiType : string | number
multiType = 'naming'
multiType = 35
// multiType = true  error - Type 'boolean' is not assignable to type 'string | number'.ts(2322)



function add(num1:number, num2?:number,num3:number=10):number{
   return num1+ (num2?num2:0) +num3
}


interface Person{
    firstName: string,
    lastName?: string
}


function fullName(person : Person ){
    console.log(person.firstName ,'-', person.lastName);
    
}

fullName({firstName:'brucee', lastName:'wayne'})

class Employee{
    employeeName: string

    constructor(name: string){
        this.employeeName = name
    }

    greet(){
        console.log(`Welcome ${this.employeeName}`);   
    }
}

let emp1 = new Employee('Manish')
emp1.greet()



class Manager extends Employee{
    constructor(managerName: string){
        super(managerName)
    }

    delegateWork(){
        console.log('manager');
        
    }
}

let manager1  = new Manager('nikhil')
manager1.delegateWork()
manager1.greet()
console.log('manager1.employeeName',manager1.employeeName);

console.log(add(3,10));
console.log(add(3));












