

let firstName = "chinmay"
console.log(firstName)


let fullName = "chinmay deshpande"
let fullName2 = 'poorva vyas'
let fullName3 = `abhisha dani`

console.log(fullName)
console.log(fullName2)
console.log(fullName3)


let nme = "chinmay deshpande"
let age = 10
console.log("My name is "+nme+ " My age is "+age)
console.log(`My name is ${nme} My age is ${age}`)


// javascript 
//(Number , Boolean , String)
let x = 10
let y = '10'
let k = true

// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof k)


// javascript 

// number + number ===> number 
// string + number ===> string
// string + string ====> string 
// number + string ====> string


let a = 10
let b = 20
let c = 'hello'
console.log(a + b)
console.log(c+a)
console.log(c+c)
console.log(b+c)
console.log(a+b+c) // 30hello
console.log(c+a+b)




console.log("chinmay")
console.log('chinmay')
console.log(`chinmay`)


console.log("chinmay's book")
console.log(' "try try but donot try" ')
console.log(` chinmay's book "quote"`)

let h = "chinmay"
console.log(typeof h)
console.log(h)


let h1 = 'chinmay'
let h2 = "chinmay"
let h3 = `chinmay d`


console.log(h1)
console.log(h2)
console.log(h3)


// Object -- property and method
// string -- object --- property and method
let Name = "chinmay"
let rollNo = 12
let isAdult = true

console.log(typeof Name)
console.log(typeof rollNo)
console.log(typeof isAdult)

// string -- 
let h1a = 'chinmay'
let h2a = "chinmay"
let h3a = `chinmay d`








let city = "Pune"


let aaa = city.length
console.log(aaa)

let city2 = "Nagpur"
let bbb = city2.length
console.log(bbb)

let city3 = "Pune"

// 0   1    2    3
// P   u    n    e

console.log(city3[0])
console.log(city3[1])

let city4 = "Ahemadnagar"
console.log(city4[0])


// Loop  ===> loop

// for(intialization ; conditionCheck ; increment/decrement){
//     statements
// }


for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5
    console.log(i) // 0 , 1  , 2 , 3 , 4 
}

for(let i = 1 ; i < 3 ; i++){ // 2 // 3
    console.log(i) // 1 // 2
}

let city5 = "wardha"

//   0    1    2   3   4   5 
//   w    a    r   d   h   a

console.log(city5.length)
//console.log(city5[0])

for(let i = 0 ; i < city5.length ; i++){
    //console.log(i)
    console.log(city5[i])

    // 1st loop i = 0
    // 2nd loop i = 1
    // 3rd loop i = 2
    // 4th loop i = 3
    // 5th loop i = 4
    // 6th loop i = 5
}


let city6 = "jaipur"

for(let i = 0 ; i < city6.length ; i++){
   // console.log(i)
   console.log(city6[i])
}

// reverse printing
for(let i = 5 ; i >= 0  ; i-- ){
    //console.log(i)
    console.log(city6[i])
}
let kbc = "shruti"
for(let i=5; i>=0; i--){
    console.log(kbc[i])
}