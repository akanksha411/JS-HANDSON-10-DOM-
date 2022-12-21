console.log('Q1');
let a=document.getElementById('text')
console.log(a);

console.log('Q2');
let b=document.getElementsByTagName('h1')
console.log(b);

console.log('Q3');
let c=document.getElementsByClassName('box')
console.log(c);

console.log('Q4');
let d=document.getElementsByTagName('h2')
d[0].innerText="Hello World"
console.log(d);

console.log('Q5')
var e1=document.createElement('div')
var e2=document.createElement('div')
var e3=document.createElement('div')
document.getElementById('con').style.display="flex"
document.getElementById('con').style.flexDirection="row"
document.getElementById('con').appendChild(e1)
document.getElementById('con').appendChild(e2)
document.getElementById('con').appendChild(e3)
e1.className="card"
e2.className="card"
e3.className="card"
var e4=document.getElementsByClassName('card')
e1.style.backgroundColor="cadetblue"
e1.style.height="100px"
e1.style.width="100px"
for(var i=0;i<e4.length;i++){
    e4[i].style.backgroundColor="cadetblue";
    e4[i].style.height="100px"
    e4[i].style.width="100px"
    e4[i].style.margin='1rem'
}
var e5=document.createElement('button')
e5.id='btn'
e5.setAttribute('value','change')
document.getElementById('con').appendChild(e5)
e5.style.height='20px'
e5.style.width='70px'
document.getElementById('btn').addEventListener('click',change)
function change(){
    if(document.getElementById('con').style.flexDirection==="row"){
        document.getElementById('con').style.flexDirection="column"
    }
    else{
        document.getElementById('con').style.flexDirection="row"
    }
}

console.log('Q6');

console.log('Q7');

var g=document.getElementsByTagName('h3')
console.log(g[0]);
g[0].innerHTML='<h1>Hello</h1>'
g[0].style.color='red'
g[0].id='heading'

console.log('Q8');
var h=document.getElementById('h')
console.log(h);
document.getElementById('btn1').addEventListener('click',cl)
function cl(){
    if(h.innerText==="Hello World"){
        h.innerText='Welcome To Elevation Academy'
    }
    else{
        h.innerText="Hello World"
    }
}

console.log('Q9');
function displayTime(){
    let dt = new Date();
    let hrs = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    // console.log(hrs,min,sec);

    document.getElementById("hrs").innerHTML=hrs + ":"
    document.getElementById("min").innerHTML=min + ":"
    document.getElementById("sec").innerHTML=sec
}
setInterval(displayTime,1000);

console.log('Q10');
let selection = document.querySelector('select');
let year = document.querySelector('#output');
selection.addEventListener('change',() =>{
    year.innerText = selection.options[selection.selectedIndex].text;
})
function formvalidate(){
    let x = document.forms["formmy"]["fname"].value;
    let mail = document.getElementById("mail").value;
    let num = document.getElementById("phnum").value;
    let yr = document.getElementById("dofb").value;
    console.log(fname,mail,num,yr);
}