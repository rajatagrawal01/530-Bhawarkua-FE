var stuName=document.getElementById("userName");
var stuMob=document.getElementById("userMob");
var stuPassword=document.getElementById("userPassword");
var stuEmail=document.getElementById("userEmail");
var stuGender=document.getElementsByName("Gender");
var stuCourse=document.getElementsByName("Course");
var stuCity=document.getElementById("userCity");


function validateForm(e){
    e.preventDefault();
    if(stuName.value==""){
        alert("Please enter your name");
        return false;
    }
    if(stuMob.value==""){
        alert("Please enter your mobile number");
        return false;
    }
    if(stuPassword.value==""){
        alert("Please enter your password");
        return false;
    }
    if(stuEmail.value==""){
        alert("Please enter your email");
        return false;
    }
    if(stuGender[0].checked==false && stuGender[1].checked==false){
        alert("Please select your gender");
        return false;
    }
    if(stuCourse[0].checked==false && stuCourse[1].checked==false && stuCourse[2].checked==false){
        alert("Please select your course");
        return false;
    }  
    if(stuCourse[0].checked==true){
        alert(stuCourse[0].value);
        return false;
    }  
    if(stuCity.value==""){
        alert("Please select your city");
        return false;
    } 

    return true;
}
