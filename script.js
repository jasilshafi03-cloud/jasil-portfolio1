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

const toggle=document.querySelector(".contact-toggle");
const menu=document.querySelector(".contact-menu");

toggle.addEventListener("click",()=>{
menu.style.display=menu.style.display==="flex"?"none":"flex";
});
