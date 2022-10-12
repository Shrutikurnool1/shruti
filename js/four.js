// method split

let info="shruti kurnool 7507196591"
let aaa= info.split(' ');
console.log(aaa);

let bbb= info.split('r');
console.log(bbb);

//method replace

let info2= "i am learning javascript"
let ccc=info2.replace("javascript","python");
console.log(ccc);

let info3= "i am singing"
let d=info3.replace("singing","dancing");
console.log(d);

//method repeat

let info4= "shruti "
let e= info4.repeat(4)
console.log(e)


//check true false

let vegetable="tomato"
let qqq=vegetable.startsWith('t')
console.log(qqq)

let sss=vegetable.startsWith('y')
console.log(sss)

let ppp=vegetable.endsWith('to')
console.log(ppp)

let rrr=vegetable.charAt(1)
console.log(rrr)

//if else statement

let numberofticket =5

if(numberofticket<=5){

    console.log('discount 10%')
}
else if(numberofticket>5){
    console.log('discount 20%')
}


