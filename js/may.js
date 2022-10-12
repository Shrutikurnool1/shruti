// //program

// for(let i=0; i<5 ;i++)
// console.log(i)

// //break 
//  for(let i=0; i<5; i++){
//     if(i==2){
//         break;
//     }
//     console.log(i)
//  }

//  //continue
//  for(let i=0; i<5; i++){
//     if(i==2){
//      continue;
//     }
//     console.log(i)
//  }


//while loop

//  let o=10
//  while(o >=0){
//     console.log(o)
//     o--
//  }
//break
//  let pp=5
//  while(pp>=0){
//     if(pp==2){
//         break
//     }
//     console.log(pp)
//     pp--
//  }

//  //continue
//  let k=6
//  while(k>=0){
//     if(k==2){
//         continue
//     }
//     console.log(k)
//     k--
//  }


// console.log(Math.floor(12.7))
// console.log(Math.ceil(22.3))
// console.log(Math.round(22.4))
// console.log(Math.round(22.5))
// console.log(Math.round(22.6))


//0-1
//0.1,0.2,0.3,0.4,0.34,0.09
//program1

// let randomnumber=Math.floor(Math.random()*6) +1
// console.log(randomnumber)

// let randomnumber2 = Math.floor(Math.random() * 6) + 1

// //console.log(randomnumber2)

// let userinput = prompt('enter the number')
// console.log(userinput)

// if (randomnumber2 == userinput) {
//     console.log('your guess is correct')
// }
// else {
//     console.log('your guess is incorrect')
// }

// let randomnumber2 = Math.floor(Math.random() * 6) + 1
// for(let i=0;i<3;i++){
//     let userinput = prompt('enter the number')
//     if(userinput===randomnumber2){
//         break
//     }
//      else{
//         console.log('incorrect guess')
//     }
// }

//while

let randomnumber2 = Math.floor(Math.random() * 6) + 1
let userinput = prompt('enter the number')

while(randomnumber2!=userinput){
    userinput=prompt('enter the number')
    if(userinput==randomnumber2){
        break
    }

}