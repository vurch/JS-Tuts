
//Find dom element and assign it to a varaible
const errorMsg = document.querySelector('#error-msg');
const firstname = document.querySelector('#first-name');
const lastname = document.querySelector('#last-name');
const username = document.querySelector('#username');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const terms = document.querySelector('#terms');
const submitBtn = document.querySelector('#submit');



//Add event listener to submit button
submitBtn.addEventListener("click", ()=>{

        //Validate form elements
        function validateForm(){

            const validateEmail = (email) => {
                return email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            };


            if(
                firstname.value === "" && lastname.value === "" 
                && username.value ==="" && phone.value ==="" 
                && email.value ==="" && password.value ==="" 
                && confirmPassword.value ===""
            ){
                errorMsg.classList.add('error-msg');
                errorMsg.innerHTML = "Please fill in the form below";

            } else if(firstname.value === ""){

                errorMsg.classList.add('error-msg');
                errorMsg.innerHTML = "Please enter your firstname";

            } else if(lastname.value === ""){

                errorMsg.classList.add('error-msg');
                errorMsg.innerHTML = "Please enter your lastname";

            } else if(username.value === ""){

                errorMsg.classList.add('error-msg');
                errorMsg.innerHTML = "Please enter your username";

            } else if(phone.value === ""){

                errorMsg.classList.add('error-msg');
                errorMsg.innerHTML = "Please enter your phone";

            } else if(email.value === "" || !validateEmail(email.value)){

                errorMsg.classList.add('error-msg');
                errorMsg.innerHTML = "Please enter a valid email";

            } else if(password.value.length < 8 ){

                errorMsg.classList.add('error-msg');
                errorMsg.innerHTML = "Password length must be at least 8 characters";

            } else if(confirmPassword.value === "" || password.value != confirmPassword.value){

                errorMsg.classList.add('error-msg');
                errorMsg.innerHTML = "Password do not match";

            } else if(!terms.checked){

                errorMsg.classList.add('error-msg');
                errorMsg.innerHTML = "Accept our terms of use and privacy & policy";

            }
            else{

                errorMsg.classList.remove('error-msg');
                errorMsg.innerHTML = "";
                dashboard();

            }

        }

        //Dashboard functionalities
        function dashboard(){
            let form = document.forms;
            let dashboardFullname = document.getElementById("dashboard-fullname");
            let dashboardProfile = document.getElementById("profile");
            let dashboardProfileTitle = document.getElementById("profile-title");
            
            form[0].style = "display:none";

            dashboardFullname.innerHTML = `Welcome, ${firstname.value} ${lastname.value}.`;
            dashboardProfileTitle.innerHTML = "User Profile";
            dashboardProfile.innerHTML = `
            <li><strong>Firstname</strong>: ${firstname.value}</li>
            <li><strong>Lastname</strong>: ${lastname.value}</li>
            <li><strong>Username</strong>: ${username.value}</li>
            <li><strong>Phone</strong>: ${phone.value}</li>
            <li><strong>Email</strong>: ${email.value}</li>
            `;

        }
    

    return validateForm();

});
