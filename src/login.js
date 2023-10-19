const container = document.querySelector(".container");
pwShowHide = document.querySelectorAll(".showHidePw");
pwFields = document.querySelectorAll(".password");
signUp = document.querySelector(".signup-link");
login = document.querySelector(".login-link");

 

// Eye Icon//

pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{
            if(pwField.type ==="password"){
                pwField.type = "text";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                });
            }else{
                pwField.type = "password";
                
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                });
            }
        });
    });
});

// javascript code to appear Login & Sign-up form

signUp.addEventListener("click", ()=>{
    container.classList.add("active");
});

login.addEventListener("click", ()=>{
    container.classList.remove("active");
});

// const button= document.querySelector("#Registerbutton");

// Registerbutton.addEventListener("click", function(){
//     console.log("the button is clicked");
// });