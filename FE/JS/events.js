// var btn = document.getElementById("btn");

// btn.onclick = function () {
//     console.log("Welcome to our website");
//     console.log("You will learn FE here");
//     console.log("Its Fun loving");
// };


var uname=document.getElementById("userName")
uname.onkeyup=function(){
    var msg=document.getElementById('message');
    msg.innerText=uname.value
}