otp={
    otpval: Math.floor(Math.random()*1000000)
}
function getotp(){
    let eme=document.getElementById("em");
    
let embody= `The OTP for email verification for Cineinsight is ${otp.otpval}`;
    console.log(eme.value);
    Email.send({
            Host : "smtp.elasticemail.com",
Username : "sampractice3210@gmail.com",
Password : "64A33E739A3A032E894A97DC1A78F6A096B6",
    
            To: eme.value,
            From: "sampractice3210@gmail.com",
            Subject: "OTP for Email verification",
            Body: embody
        }).then(function (message) 
        {
            console.log(eme.value);
            alert("OTP has been sent to your email. You may check your spam folder");
            var otpbtn=document.getElementById("otpbtn");
var getstarted=document.getElementById("button");
var otptext=document.getElementById("otptext");

    otptext.style.visibility='visible';
    otpbtn.style.visibility='visible';
    getstarted.style.visibility='hidden';
    
            });
    }
function redirect()
    {
        if(otptext.value==otp.otpval)
        {
          window.location.assign("idcreation.html");  
        }
        else {   
            alert("Invalid OTP");
            
        }
    }



    function printit(){
    console.log("ji");
}

