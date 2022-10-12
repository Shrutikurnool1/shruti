// // const str1="GeeksforGeeks"
// //  const str2=str1.slice(2,5)
//   //console.log(str2)

// //   var geeks = {

// //     name : "ABC",
    
// //     printFunc: function(){
    
// //     document.write(this.name);
    
// //     }
    
// //     }

// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

//.....................................................................................................................................

//let sides of triangle= a,b,c

// let a=5;
// let b=6;
// let c=7;

// let s=(a+b+c)/2
// let area= Math.sqrt(s*(s-a)*(s-b)*(s-c))

// console.log(area)

// // let string="w3resource"

// // string.rot

// // function simpleArraySum(ar) {
// //     var sum=0
// //     for(var i=0;i<ar.length;i++){
// //         if(typeof ar[i]=='number')sum+=ar[i]
// //     }
// //     return sum;
// // }
// // console.log(simpleArraySum([1,2,3,4,10,11]))


// function sockMerchant(n, ar) {
//     // Array validation
//     if (!ar || ar.length !== n) {
//       return 0;
//     }
  
//     // Counting pairs
//     let pairs = 0;
//     let counterObj = {};
  
//     for (let sock of ar) {
//       if (!counterObj[sock]) {
//         counterObj[sock] = 1;
//       } else {
//         counterObj[sock] = counterObj[sock] + 1;
  
//         if (counterObj[sock] === 2) {
//           pairs++;
//           counterObj[sock] = 0;
//         }
//       }
//     }
//     return pairs;
//   }

let x1 =2
let v1 =1
let x2 =1
function staircase(n) {
  // Write your code here
  
  n=6
  var line = '';
  for(let i = 1; i <n +1; i++) {
      line += Array(n-i).fill(' ').join('')
      line += Array(i).fill('#').join('')
      console.log(line)
      line = ''
  }

  
}
//two set problem
let multiple = a[0], 
factors = b[0], 
k = 1,
count = 0;
for(let i = 1; i < a.length; i++) {
multiple = ((a[i] * multiple) / (findfactors(a[i], multiple)));                                     
               
}

for(let i = 1; i < b.length; i++) {
factors = findfactors(factors, b[i]);
}

while(true) {
if(multiple * k > factors) return count;
if((factors % (multiple * k++)) === 0) count++;
}
return count;
}