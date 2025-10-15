//FUNCTION 

function myFunction(msg){
    // parameter : input 
    // console.log("good morning everyone");
    console.log(msg);
}
myFunction("i am learning JS");

function sum(x,y){
    s = x+y ;
    return s;
}
let val = sum(3,4);
console.log(val);

//ARROW FUNCTION

//sum function
function sum(a,b){
    return a+b;
}

const arrowSum = (a,b) => {
    console.log(a+b);
}

//multiplication function 
function mul(a,b){
    return a*b;
}
const arrowMul = (a,b) => {
    console.log(a*b);
}

//practice ques 1
function  countVowels(str){
    let count = 0;
    for(const char of str){
        if(char == "a" || char  == "e"|| char  == "i" || char == "o" || char  == "u"){
            count ++ ;
        }
    }
    return count ;
}

//for each loop
let arr=[21,89,62,84,12];

arr.forEach(function printVal(val){
    console.log(val);
})

// arr.forEach((val) => {
//     console.log(val);
// })

//higher order function/method :- return function

//practice ques 2
let arry = [1,2,3,4,5];
// arry.forEach((arr) => {
//     console.log(arr*arr);
// })
arry.map((arr) => {
    console.log(arr*arr);
})

//array methods filter
let array = [1,2,3,,4,5,6]

let evenArray = array.filter((val) => {
    // return  val %2 == 0 ;
    return val >3 ;
});

console.log(evenArray);

// array method reduce 
const output = array.reduce((res,curr) => {
    return res + curr ;
});

console.log(output)