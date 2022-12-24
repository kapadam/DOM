let text1=document.getElementById("text");
console.log(text1.innerText);

let h=document.getElementsByTagName("h1");
console.log(h[1].innerText);
// console.log(h[2].innerText);
h[2].innerText="Hello World";
let box=document.getElementsByClassName("box");
console.log(box[0]);

function numberFormat(n){
    return n > 9 ? "" + n: "0" + n;
}
function timer(){
    let hour=document.getElementById("hr");
    let minute=document.getElementById("min");
    let second=document.getElementById("sec");
    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    hour.innerText=`${numberFormat(hr)}`;
    minute.innerText=`${numberFormat(min)}`;
    second.innerText=`${numberFormat(sec)}`;
    if(hr>=12 && min>=00 && sec>=01){
        let am=document.getElementById("am");
        am.innerText="PM";
    }
    else{
        am.innerText="AM";
    }
}
setInterval(function(){
    timer()
},1000);
let flexbutton=document.getElementById("flexbutton");
flexbutton.addEventListener("click",function(){
    document.getElementById("flex").style.flexDirection="column";
})
document.getElementById("replace").addEventListener("click",function(){
    document.getElementById("h2").innerHTML="Welcome to Elevation academy";
})
