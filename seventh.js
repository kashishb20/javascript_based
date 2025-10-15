let div = document.querySelector("div");
// console.dir(div)
console.log(div)

let ids = div.getAttribute("id")
console.log(ids)

let parah = document.querySelector("p");
console.log(parah.setAttribute("class","newClass"));

let divs = document.querySelector("div");

div.style.backgroundColor="blue" ;
// div.style.fontSize= "26px" ;
// div.innerText="hello guys";

let newButton = document.createElement("button");
newButton.innerText="click me!";
newButton.style.backgroundColor= "purple";
newButton.style.color ="white";
console.log(newButton);

// div.append(newButton);    (add at the end )
// div.prepend(newButton);    (add in the beginning )
// div.before(newButton);
// div.after(newButton);

let newHead = document.createElement("h1");
newHead.innerHTML = "<i>Hi , I am a freshner ! </i>";

document.querySelector("body").prepend(newHead);

let parapk = document.querySelector("para");
// para.remove();

newHead.remove();


//practice ques1
let newbut = document.createElement("button");
newbut.innerText = "click me please!" ;
newbut.style.backgroundColor ="green";
newbut.style.color = "pink";
document.querySelector("body").prepend(newbut);

//practice ques 2
 
let para = document.querySelector("p");
