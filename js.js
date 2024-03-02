
let calculate = document.querySelector('#find');
let result = document.querySelector('#result');
let hgt=document.querySelector('#height');
let wgt=document.querySelector('#weight');

let a,b;

calculate.addEventListener('click',res);
function res()
{
    a=parseFloat(hgt.value); 
    b=parseFloat(wgt.value); 
    let bmi =b/(a*a);
    result.innerHTML=bmi.toFixed(4); 
}

let reset=document.querySelector('#reset');
reset.addEventListener('click',erase);
function erase()
{
    hgt.value="";
    wgt.value="";
    result.innerHTML="Result";
}







