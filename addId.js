var username=[];
var pass=[];
var uni=1;

function addit()
{
    
var name=document.getElementById("uname");
var password=document.getElementById("upassword");
var cpassword=document.getElementById("ucpassword");

    if(password.value===cpassword.value)
    {
console.log(name.value);
        localStorage.setItem(name.value,password.value);
        var profnamesender =encodeURIComponent(name.value);
           
        window.location.href="main.html"+"?data="+profnamesender;
           
    alert("Signed Up successfully");
    }
    else{
        alert("Password and Confirm Password does not match");
    }

}
function login(){
    let name1=document.getElementById("usertxt");
let pass1=document.getElementById("passtxt");
window.abc=1;
         
for(let i=0;i<localStorage.length;i++)
    {
        if((localStorage.key(i)==name1.value)&&(localStorage.getItem(localStorage.key(i))==pass1.value))
        {
           var profnamesender =encodeURIComponent(localStorage.key(i));
           window.abc=2;
           window.location.href="main.html"+"?data="+profnamesender;
              }
        else if((localStorage.key(i)==name1.value)&&(localStorage.getItem(localStorage.key(i))!=pass1.value))
        {
     window.abc=3;
        }
        
    }
    if(window.abc==3)
    {
        alert("Wrong Password");
    }
    if(window.abc==1)
    {
        alert("No account,Please sign up");

    }
 }
 var arr=["panipat.jpg","prithviraj.jpg","pushpa.webp","animal.jpg"];
var order=0;
var hc1=document.getElementById("hc1");
var hc2=document.getElementById("hc2");
var hc3=document.getElementById("hc3");
var hc4=document.getElementById("hc4");
var a1=document.getElementById("a1");
var hc=[hc1,hc2,hc3,hc4];
var arrplayt=["Panipat","Prithviraj Chauhan","Pushpa","Animal"];
var playt=document.getElementById("playt");
function slideR()
{
if(order<4)
{
    order++;
a1.src=arr[order];
hc[order].style.color="white";
hc[order-1].style.color="gray";
playt.innerText=arrplayt[order];
}
else{
    order=0;
    a1.src=arr[order];
    hc[order].style.color="white";
    hc[order+3].style.color="gray";
    playt.innerText=arrplayt[order];
}
}
function slideL()
{
    if(order>0)
    {
        order--;
    a1.src=arr[order];
    hc[order].style.color="white";
    hc[order+1].style.color="gray";
    playt.innerText=arrplayt[order];
    }
    else{
        order=3;
        a1.src=arr[order];
        hc[order].style.color="white";
        hc[order-3].style.color="gray";
        playt.innerText=arrplayt[order];
    }
    
}
function play(){
    document.location.assign("video.html");
fetch("https://api.themoviedb.org/3/movie/157336?api_key=ef5a26280bf6632f489dcd8d2284336b").then(res =>{
    return res.json();}).then(data =>{
        let div=document.createElement('div');
        div.id="check";
        div.style.color="white";

        div.innerHTML=data;
        document.body.append("div");
    })
}
