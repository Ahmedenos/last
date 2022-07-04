let head=document.querySelector('h1');
let firstColor=document.getElementById('first');
let seconedColor =document.getElementById("seconed");
let body=document.body
let changeP=document.getElementsByClassName('change')[0]
function changeColor(){
    body.style.backgroundImage=`linear-gradient(90deg, ${firstColor.value},${seconedColor.value})`;
    changeP.innerHTML=`linear-gradient (${firstColor.value}),(${seconedColor.value})`
    localStorage.main=firstColor.value
    localStorage.seconed=seconedColor.value
}
    firstColor.value=localStorage.main
    seconedColor.value=localStorage.seconed
changeColor()




    





