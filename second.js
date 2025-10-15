//  arithemetic operators 
let a = 10 ;
let b = 20 ;

console.log("a+b");
console.log(a+b);
console.log("a + b =",a+b) ;
console.log("a * b =",a*b) ;
console.log("a / b =",a/b) ;
console.log("a % b =",a%b) ;
console.log("a ** b =",a**b) ;

//unary opertor ;


// a = a+1 ;
a++ ;
// console.log(a) ;
// console.log(b) ;
console.log("++a =" , ++a) ;
console.log(a) ;
console.log("a++ =" , a++) ;
console.log(a) ;

//assignment operator 
b += 2 ;//22
b *= 2 ;//22X2
console.log(b) ;

//comparison operator 
let x = 12;
let y = 21 ;
let z ="12" ;
// console.log( x == z);
// console.log( x != y);
// console.log( x === z);
// console.log( x !== z);

//logical operators 
let t = false ;
let f = true ;
console.log(t || f);
console.log(t && f);

//conditional statements 

let age = 14;
if(age>=18){
    console.log("can get license");
}
if(age <18){
    console.log("can't get license")
}

let mode ="dark";
let color ;
if(mode == "dark"){
    color ="black";
}
if( mode == "light"){
    color ="white";
}
console.log(color);

let agee = 16;
if(agee>=18){
    console.log("can vote");
}else {
    console.log("can't vote ")
}

//ternary operator 

let length = 11;
let result = length >=18 ? "adult" : "not adult";
console.log(result);

//practice ques 1
// alert("hello guys ")
// let number = prompt("enter a number ") ;
// if (number %5 ==0){
//     console.log("multiple of 5");
// }else {
//     console.log("not multiple of 5");
// } 

let numb = prompt("enter a number :- ");
if (numb%2 == 0){//even number
    console.log(numb, "is even");
}
else {
    console.log(numb,"is odd");
}

//practice ques 2 
let grades = prompt("enter your score");
if(grades >=90 && grades <=100){
    console.log("you got grade A")
}else if(grades >= 70 && grades <=89){
    console.log("you got grade B");
}else if(grades >= 60 && grades <= 69){
    console.log("you got grade c");   
}else if(grades >= 50 && grades <= 59){
    console.log("you got grade D");
}else {
    console.log("fail");
}