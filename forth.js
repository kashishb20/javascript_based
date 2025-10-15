//ARRAY --> mutable (that means it can be changed)
//STRING --> immutable
let physics = [98,87,35,75,53];
console.log(physics);
console.log(physics.length);

let heroes = ["ironman","thor" ,"shaktiman", "spiderman"];
// for(i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }

for(let hero of heroes){
    console.log(hero);
    console.log(hero.toUpperCase());
}
console.log(heroes.length);
console.log( typeof physics);

//practice ques 1
let marks= [85,97,44,37,76,60];
let n = marks.length ;
let sum = 0;
for(i=0;i<n;i++){
    sum += marks[i];
}
let average= sum / n;
console.log( `avg marks of the class = ${average}` );

//practiice ques 2
let items = [250,645,300,900,50]
// let discount = 0 ;
let finalArray = 0;
for (let i=0;i<items.length;i++){
    let discount = items[i] / 10 ;
    items[i] = items[i] - discount ;
    console.log( `value after offer is ${items[i]}`);
}

//array methods 
let vegetable = ["potato","tomato" , "ladyfinger" , "beans ", "brinjal"];
console.log(vegetable);
// vegetable.push("capsicum");
// vegetable.pop();
// console.log(vegetable.toString());

let fullNames =  ["kashish","aniket","jiya"];
let fullnames = ["siya","raghav"]
fullNames.unshift("KRISHVI")
console.log(fullNames)
let reqd = fullNames.concat(fullnames);
console.log(reqd);

//practice ques 1 
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// console.log(companies);
companies.splice(2,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);