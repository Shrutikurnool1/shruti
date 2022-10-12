// function add(x,y){
//     return "hello"
// }
// let rrr= add(12,13)
// console.log(rrr)

// let one=[11,22,33,44,55]
// let two = 
// one.map(function(el,index,array){
//     return el*5 && el+10 && el-2
// })
// console.log(two)

//filter

// let aaa=[11,22,33,44,55,66,100,150]
// let aab=
// aaa.filter(function(el,index,array){
//     return el>40
// })

// console.log(aab)

//reduce is used to add

let marks=[50,20,30,40,80,10]
 let total=
marks.reduce(function(acc,el,index,array){
     return acc+el
 },0)

 console.log(total)

 //find()  
 let f=[1,2,3,4,5,6]
 let kkk=f.find(function(el,index,array){
     return el>4
 })

console.log(kkk)

let t=[1,2,3,4,5,6]
 let sss=t.findIndex(function(el,index,array){
     return el>4
 })

console.log(sss)

//some()

let o=[,11,22,33,45,89,46]
let ppp=
o.some(function(el,index,array){
    return el>90
})
 console.log(ppp)


//every

let Q=[,11,22,33,45,89,46,94]
let yyy=
o.every(function(el,index,array){
    return el<100
})
 console.log(yyy)
