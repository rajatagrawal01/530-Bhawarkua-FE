var inpt=document.getElementById("data")

inpt.onkeyup=function (e){
  // console.log("Event: ",e);
  console.log(inpt.value);
  var msg=document.getElementById("message")
  msg.innerText=inpt.value
  
}

var btn=document.getElementById("btn")
btn.onclick=function (e) {
    console.log(e);
    // alert("Welcome")
}


var pwd=document.getElementById("pwd")
var warn=document.getElementById("warning")

pwd.onkeyup=function (){
  var password=pwd.value;
console.log(password.length);

  if(password.length<6){
     warn.innerText="Enter Password more than 6"
  }else{
     warn.innerText=""
  }
}

















// inpt.addEventListener("keyup",
//     function(){
//         console.log(inpt.value);
//     }
// )

// var myform = document.getElementById("demo");
// myform.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var stuName = document.getElementById("stuName").value;
//   var agree = document.getElementById("agree");
//   if (!agree.checked) {
//     alert("You must accept terms");
//   }

//   if (stuName.length < 5) {
//     console.log("Enter greater than 5");
//   } else {
//     console.log("Great");
//   }
// });
