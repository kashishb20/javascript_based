// let q = 7;
// do{
//     console.log("radha soami ji");
//     console.log("qwerty ji");
//     q++;
// }while (q<=10);
 


// let num  = 20;

// let userNum = prompt("guess the random number = ");

// while (userNum != num){
//     userNum= prompt("you entered wrong number, try again :- ");
// }

// console.log( "congratulations , you entered right number");



//template literals 


// alert("INTERNET CONNECTION");
// let name = prompt("enter your name");
console.log(name)

for (let i=0;i<4;i++){
    console.log("good morning");
}
console.log("loop ended")

//calculate sum of first n natural number 
let n = parseInt(prompt("enter the natural number n = "));
let sum = n*(n+1)/2;
console.log("sum of n natural numbers = ",sum);

//print 1 to n numbers 
let k = prompt("enter any number = ");
let  i=1 ;
while(i<=k){
    console.log("k = ",i);
    i++ ;
}
//use of DO - WHILE :-
let w = 1;
do{
    console.log("you are great");
    w++;
}while(w<10);

//using for-of loop for printing a string 
let size =0 ;
let str ="javascript";
for(let i of str){
    console.log("i=",i);
    size ++;
}
console.log("string length = ",size);

//for in loop
let student = {
    fullName : "kashish ",
    age : 19 ,
    year : 2 ,
};
for (let key in student ){
    console.log(key);
}

// ques1 print all even number 0 to 100
for (let i = 0 ; i<=100;i++){
    if( i%2 == 0){
        console.log(i);
        i++ ;
    }
}

//ques 2
// create a game where u start with a random number 
// and let the user guess the number and play until tey reach the correct one 
