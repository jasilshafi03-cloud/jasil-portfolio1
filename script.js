/* ===== PARTICLES BACKGROUND ===== */

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

move:{
enable:true,
speed:2
}
}

});

/* ===== SKILL TABS ===== */

function openTab(event,tabName){

let tabs=document.querySelectorAll(".tab-content");
let buttons=document.querySelectorAll(".tab-button");

tabs.forEach(tab=>{
tab.classList.remove("active");
});

buttons.forEach(btn=>{
btn.classList.remove("active");
});

document.getElementById(tabName).classList.add("active");

event.currentTarget.classList.add("active");

}

/* ===== FLOATING CONTACT BUTTON ===== */

const toggle=document.querySelector(".contact-toggle");
const menu=document.querySelector(".contact-menu");

toggle.addEventListener("click",function(){

if(menu.style.display==="flex"){
menu.style.display="none";
}else{
menu.style.display="flex";
}

});
