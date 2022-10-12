// program 1 

//            0     1   2    3
let years = [1989,1990,1991,1993]
let ages = []
// [33,32,31,29]
// 2022 - 1989  ==> age

for(let i = 0 ; i < years.length ; i++){
    //console.log(i)
    //console.log(2022 - years[i])
    let calA = 2022 - years[i]
    ages.push(calA)
}
console.log(ages)

// program 2
//             0  1  2  3 4  5  6
let numbers = [22,33,44,11,22,33,4]
//[22,33,44,22,33]

let above20 = []

for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    if(numbers[i] > 20){
        above20.push(numbers[i])
    }
}

console.log(above20)

// program3 
//           0  1  2
let total = [11,22,33] // 6 
let sum = 0
for(let i = 0 ; i < total.length ; i++){
    //console.log(i)
    //console.log(total[i])
    sum = sum + total[i]
    //     0   +    11    ==> 11 
    //     11  +    22  ===>  33
    //     33  +    33   ===>  66
}
console.log(sum)

// program 4

//              0          1     2      3
let names2 = ["chinmay","sham","ram","hari"]
for(let i = 0 ; i < names2.length ; i++){
    // console.log(i)
    // console.log(names2[i])
    console.log(`welcome ${names2[i]}`)
}