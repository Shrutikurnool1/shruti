//touppercase 
//to lower case

let jk1="hello";
let aaa=jk1.toUpperCase();
console.log(aaa);

let bbb=jk1.toLowerCase();
console.log(bbb);

let vegetable= "tomato";
let ccc=vegetable.includes("to");
console.log(ccc);

//trim

let city2=" pune ";
let ddd=city2.trimStart();
console.log(ddd);
console.log(city2.length);
console.log(ddd.length);

let eee=city2.trimEnd();
console.log(eee);

let ggg=city2.trim();
console.log(ggg);
console.log(ggg.length);

//slice
 
let country="INDIA";
// 0 1 2 3 4
// I N D I A
// -5 -4 -3 -2 -1
//country.slice(start index.end index (notincluded))

console.log(country.slice(1));
console.log(country.slice(1,4));
console.log(country.slice(-4));
console.log(country.slice(-4,3));

//for loop
for(let i=0;i<3;i++){
    console.log(i)
};

let vegetable2= "potato"
for(let i=0;i<vegetable2.length;i++){
    console.log(vegetable2[i])
};

//reverse

let city4="satara"
//satara===>aratas
let rev=""
for(let i=0;i<city4.length;i++){

    rev=city4[i] + rev

    console.log(rev);

}