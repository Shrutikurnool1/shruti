//everything in JS is Object

//object--property and method

//human--
//propert--height,weight,color
//method--walk(),talk()

//vehiclce--
//propert--type,colour,
//method --start()stop()

//bank
//property--customer,accno
//method-- deposit(),withdrawal

let names=["shruti","shreya","vaishnav"]
console.log(names[0])
console.log(names[1])
console.log(names[2])


//array--Object
// array - object 
// array will property and methods 
let aa = names.length
console.log(aa)

// methods - 23
// Gym ----  action - excercise ------ muscle


// object -- property and method 
// method - action and return type 

//               0       1       2        3
let fruits = ["apple","mango","banana","grapes"]
console.log(fruits.length) // 4


// push()
// action --- add the element to the end of array
// return - new length of array

let aaa=fruits.push("papaya")
console.log(aaa)
console.log(fruits)

//[ 'apple', 'mango', 'banana', 'grapes', 'papaya' ]
// unshift()
// action --- add the element to the start of array
// return - new length of array

let bbb = fruits.unshift('orange')
console.log(bbb) // 6
console.log(fruits) //

// [ 'orange', 'apple', 'mango', 'banana', 'grapes', 'papaya' ]
// pop()
// action - removes the last element
// return - return the element 

let ccc = fruits.pop()
console.log(ccc)
console.log(fruits)

// shift()
// action - removes the first element
// return - return the element 
//[ 'orange', 'apple', 'mango', 'banana', 'grapes' ]
let ddd = fruits.shift()
console.log(ddd)
console.log(fruits)


// push('a') , new length
//unshift('a') , new length
//pop() ,  // return the same element
//shift() // returns the same element


// includes
// action -- search for the element 
// return - if element is found return true 

//              0       1        2
let  cities = ["pune","mumbai","nagpur"]
let abc = cities.includes("pune")
console.log(abc)

//program

let birthyear =[1990,1989,2000,2001]
let ages =[]

for(let i=0;i<birthyear.length;i++){
    let ag=2022-birthyear[i]
    ages.push(ag)
}
console.log(ages)
