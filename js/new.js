//function add(x,y){
//return "hello"
//}

//let rrr = add(12,13),
//console.log(rrr)

let nOne = [11,22,33,44,55]
let nTwo=
nOne.map(function(el,index,array){
    return el + 5
})
console.log(nTwo)

//filter 

let aaB = [22,33,44,55,66,11,22]
let aaac =
aaB.filter(function(el,index,array){
    return el>40
})
console.log(aaac)

//marks
//reduce === adds all elements

let markss = [22,33,44,55]
let qa=
markss.reduce(function(acc,el,index,array){
    return acc + el
},0)
console.log(qa)

//for each

let namesA = 
["shruti","reshab","shreya","vaishnav"]
namesA.forEach(function(el,index,array){
    console.log(`welcome ${el}`)
})

let namesB = 
["shruti","reshab","shreya","vaishnav"]
namesB.forEach(function(el,index,array){
    console.log(`how are you? ${el}`)
})

//let i = "chahaha"
//i = "ram"
//i[0] = 'r'  not understood

//find()

let f=[11,22,331,22,33,44]
let aaab = f.filter(function(el,index,array){
    return el>40

})
console.log(aaab)


let aaabc =
 f.find(function(el,index,array){
    return el>40

})
console.log(aaabc)   ///doubt why only 331 

let aaabd=
f.findIndex(function(el,index,array){
        return el>40
    
    })
    console.log(aaabd)


//some ///gives boolean value

let bn = [11,22,33,44,55,22,11,22,33]
let qqq = 
bn.some(function(el,index,array){
    return el>30
})
console.log(qqq)

let qqqq=bn.some(function(el,index,array){
    return el>3000
})
console.log(qqqq)

//............................................................


//define variable with let keyword

let x = 10
console.log(x)
x = 200
console.log(x)

//define variable with const

const y =300
//y=3000
console.log(y)


//primitive type
//number --->
//boolean
//string

//javascript is dynamically typed language

let numberOne = 10  //-12,22,33,5
let numberTwo = "hello" //collection of character
let numberThree = true //boolean

//type---------->properties,secondary method
//calm---speak less, less angry 
//aggresive--shouts,not calm

//type of- operator - to check type of variable

console.log(typeof numberOne)
console.log(typeof numberTwo)
console.log(typeof numberThree)

//arithmetic operation
//+-*/%

let a = 100
let b = 50
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let o = 45
let p =9

console.log(o+p)
console.log(o-p)
console.log(o*p)
console.log(o/p)
console.log(o%p)


//10 pair=====> 50 lines DRY

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

Calculator(30,5)
Calculator(90,45)


//basic type of function 
//function with parameter and with return type

function add(){
    console.log(9+9)
}
add()
add()
add()
add()

//function with parameter and without return 
function add2(x,y){
    
}