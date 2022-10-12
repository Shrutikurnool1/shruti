
// object - property  and method
// human

// property - height weight color
// method - walk() , talk() , running()


// vehicle 
// property - type color , regNo
// method - start()  stop()

// Bank
// property - customerName , accNo 
// method - depoist() , withdrawl()

//              0         1         2       3
let names = ["chinmay","poorva","sarika","sham"]
console.log(names[0])
console.log(names[1])

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

let aaa = fruits.push("papaya")
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
let abc = cities.includes('pune')
console.log(abc)



// program

let birthyear=[1990,1989,2000,2001]
let ages=[]

for(let i=0;i<birthyear.length;i++){
let ag= 2022-birthyear[i]
ages.push(ag)

}
console.log(ages)

// map 
// action 
// return type

birthyear=[1990,1989,2000,2001]
 let iii = birthyear.map(function(el,index,array){
     //console.log(el,index,array)
     return 2022-el
 })
     console.log(iii)
  
let numbers=[11,22,33,44,55]
//add +2
//[13,24,35,46,57]

let ii3=numbers.map(function(el,index,array){
    return el+2
})
console.log(ii3)

//programm 2

//filter

let numbersA=[22,33,44,55,6]
let above40=[]
for(let i=0;i<numbersA.length;i++){
    if(numbersA[i]>40){
    above40.push(numbersA[i])
}
}
console.log(above40)

//filter 

let iii4=numbersA.filter(function(el,index,array){
    return el>40
})
console.log(iii4)

//total
let mark =[11,22,33]
 let total=0
 for(let i=0;i<mark.length;i++){
     total=total+mark[i]
 }
 console.log(total)

//reduce method
//mark.reduce(fn,0)
let jkl=mark.reduce(function(acc,el,index,array){
    return acc+el
},0)
console.log(jkl)


//program 4

let names2=["shruti","shreya","vaishnav"]
for (let i=0;i<names2.length;i++){
    console.log("welcome"+names2[i])
}

//new method--forEach
names2.forEach(function(el,index,array){
    console.log(`welcome ${el}`)
})


//program 5 (operation)

let n=[11,22,33,44,55]                   
let ii5=n.map(function(el,index,array){
    return el * 11
})
console.log(ii5)

let ii6= ii5.filter(function(el,index,array){
    return el > 300
})
console.log(ii6)


let ii7=ii6.reduce(function(acc,el,index,array){
    return acc+el
},0)
 console.log(ii7)

 let nm=[22,33,55,66]

 nm.forEach(function(el,index,array){
     console.log(el + 2)
 })


//map---array
//filter--array
//reduce---single value
//forEach---nothing