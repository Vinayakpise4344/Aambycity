// var butt= document.querySelector(".ht1")
// var heart= document.querySelector("i")

// butt.addEventListener("Click",function () {
//     heart.style.font='blue'
//     heart.innerHTML="helllp"
// })
 
var a= document.querySelector(".btn2")
var b=document.querySelector(".text")
var flag=0; 
a.addEventListener("click" ,function(){
    if(flag==0){
    b.innerHTML="29000 INR";
    b.style.color='black';
    b.style.font='12px';
     flag=1;
    }
    else{
        b.innerHTML="";
    b.style.color='white';
    b.style.font='0px';
    flag=0;
    }
})

var c= document.querySelector(".btn3")
var d=document.querySelector(".text1")
var flag1=0; 
c.addEventListener("click" ,function(){
    if(flag1==0){
    d.innerHTML="31000 INR";
    d.style.color='black';
    d.style.font='22px';
     flag1=1;
    }
    else{
        d.innerHTML="";
    d.style.color='white';
    d.style.font='0px';
    flag1=0;
    }
})

var e= document.querySelector(".btn6")
var f=document.querySelector(".text3")
var flag2=0; 
e.addEventListener("click" ,function(){
    if(flag2==0){
    f.innerHTML="26000 INR";
    f.style.color='black';
    f.style.font='84px';
     flag2=1;
    }
    else{
    f.innerHTML="";
    f.style.color='white';
    f.style.font='0px';
    flag2=0;
    }
})
