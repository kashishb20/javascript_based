let btn1 = document.querySelector("#btn1");
btn1.onclick =() => {
    console.log('button was clicked');
    let a =25 ;
    a++ ;
    console.log(a);
}
let box = document.querySelector("div");
box.onmouseover = () =>{
    console.log('you are inside div');
}

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX ,evt.clientY);
}