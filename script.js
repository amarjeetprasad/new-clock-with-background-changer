var color=document.getElementById("color");
var clock=document.getElementById("container");
color.onchange=function (){
  clock.style.backgroundColor=color.value;
}