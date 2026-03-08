particlesJS("particles-js",{

particles:{
number:{value:80},
color:{value:"#38bdf8"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
line_linked:{
enable:true,
distance:150,
color:"#38bdf8",
opacity:0.4,
width:1
},
move:{enable:true,speed:2}
}

});

const texts=[
"Biomedical Engineering Student",
"AI Healthcare Developer",
"Medical Device Innovator"
];

let index=0;
let charIndex=0;
let currentText="";
let isDeleting=false;

function typeEffect(){

const typing=document.querySelector(".typing");

if(!typing)return;

if(!isDeleting && charIndex<=texts[index].length){
currentText=texts[index].substring(0,charIndex++);
typing.textContent=currentText;
}

if(isDeleting && charIndex>=0){
currentText=texts[index].substring(0,charIndex--);
typing.textContent=currentText;
}

if(charIndex===texts[index].length){
isDeleting=true;
setTimeout(typeEffect,1000);
return;
}

if(isDeleting && charIndex===0){
isDeleting=false;
index=(index+1)%texts.length;
}

setTimeout(typeEffect,isDeleting?50:100);
}

typeEffect();

const toggle=document.querySelector(".contact-toggle");
const menu=document.querySelector(".contact-menu");

toggle.addEventListener("click",()=>{
menu.style.display=menu.style.display==="flex"?"none":"flex";
});
