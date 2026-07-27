let password = document.getElementById("pwd")
let message =document.getElementById("pwdchk")
let lengthchk= document.getElementById("lengthchk")
let capchk= document.getElementById("capchk")
let numchk= document.getElementById("numchk")
let spclchk= document.getElementById("spclchk")

// let myForm=document.getElementById('myForm')

// myForm.addEventListener("submit",function(e){
password.addEventListener("keyup",function(){
    let value=password.value;
    // console.log(value);
    if(value.length<3){
        message.innerText="Enter Greater than 3"
        message.style.color="red"
    }
    if(!value.match(/[0-9]/)){
        message.innerText="Enter a number"
        message.style.color="red"
    }
    if(!value.match(/[A-Z]/)){
        message.innerText="Enter a Capital letter"
        message.style.color="red"
    }
    if(!value.match(/[a-z]/)){
        message.innerText="Enter a small letter"
        message.style.color="red"
    }
    if(!value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
        message.innerText="Enter a Special character"
        message.style.color="red"
    }

    if(!value.match(/[A-Z]/) || !value.match(/[0-9]/) || !value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
        message.innerText="Weak Password"
        message.style.color="red"
    }
    else{
        message.style.visibility="hidden";
        // message.innerText="Strong Passwword";
        // message.style.color="Green";
    }
})


var button = document.getElementById("btn")

button.addEventListener("click",()=>{
    if (password.type === "password") {
    password.type = "text";
    }
    else{
    password.type = "password";
}
})

button.onclick=()=>{

}

// Tasks:-
// Separate text messages for every validation
// Real time validation back and forth
// On sumbit
// Password visibility



// button.addEventListener('click',()=>{
    
// })