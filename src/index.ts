let id:number = 6
let names:string = 'venky'
let gender:boolean = true
let ids:any = 14

type listOfArray = [number,number,number,number,string]
let arr:listOfArray = [1,2,4,5,'venky'] // this is tuple array , bec we know fixed elements
let arr1:any[] = [1,4,6,'venky',false]
let arr2:number[] = [1,2,4,6]
let arr3:boolean[] = [true,false]


let school: string | number |null |undefined = undefined

enum employe{
    name = 'venky',
    age = 27,
    school = 'Jaya',
    college = 'Veltech',
    office = 'Preqin'
}

// console.log(id)
// console.log(arr)
// console.log(employe.name)
// console.log(employe['age'])

let str:string = employe["name"]
str = 'yousuf'
//console.log(str)
//console.log(employe["name"])

enum shape{
    circle,rectangle,square=5,polygen
}

console.log(shape)

type upload = {
    id:number,name:string, readonly school:string,job?:string
}
let obj:upload = {
    id:6,name:'venky',school:'Jaya'
}

obj.name = 'vicky'
//obj.school = 'ibm' // cannot be changed bec it is readonly
// type is for primitive and interface for non-primitive .. type is declared then use = to assign, interface no equal to
// union is used to declare many data types .. number | string |boolean |null | undefined
interface profile{
    id?:number,
    age?:number,
    name:string
}
let obj2:profile = {
    name:'venky'
}

type incoming = string | number
function abc(str:incoming):void{
    console.log(str)
}

// abc('abc')

enum Countries {
    AUSTRALIA = 'australia',
    INDIA = 'Inda',
    SRILANKA = 'Srilanka'
}

enum Sectors  {
    INDUSTRY = 'Industry',
    ESTATE = 'Estate'
}
console.log(Object.values(Sectors))
let result = {
    countries:Countries,
    sectors: Sectors
}

//console.log(Object.values(result['countries']))
let newArr:string[][] = [
    ['venky','vicky'],['new','new2'],
    ['venky','vicky'],['new','new2'],
    ['venky','vicky'],['new','new2'],
]

console.log(typeof(newArr))
let a:any = 10
let b =<number> a
// console.log(typeof(a))
// console.log(typeof(b))

interface employee{
    name:string,age:number
}
let emp =<employee> {}
emp.name = 'venky'
emp.age = 32
//emp.school = 'Jaya'
console.log(emp)

interface numberType{
    (number1:number , number2:number):number
}
const method1:numberType = (number1:number , number2:number):number =>{
    return number1 + number2
}

method1(5,6)