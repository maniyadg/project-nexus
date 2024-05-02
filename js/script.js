const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})

// Log-In Form Validation
function validationLogForm() {
    console.log('working')

    const email = document.getElementById('email').value
    const password = document.getElementById("password").value;

    const emailError = document.getElementById(
        "email-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );

    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }


    if(isValid){
        console.log({email,password})
        alert('Login Succesfully')
    }

    return isValid;
}

// Register Form Validation
function validationRegForm() {
    console.log('working')

    const email = document.getElementById('email1').value
    const password = document.getElementById("password1").value;
    const confirmPass = document.getElementById("confirmPassword").value;


    const emailError = document.getElementById(
        "email-error1"
    );
    const passwordError = document.getElementById(
        "password-error1"
    );
    const confirmPassError = document.getElementById(
        "confirmPass-error1"
    );

    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPassError.textContent = "";


    let isValid = true;

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (confirmPass === "" || password.length < 6) {
        confirmPassError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (password === confirmPass) {
        confirmPassError.textContent =
            "Password and Confirmation Password do not match. ";
        isValid = false;
    }
     
    if(isValid){
        console.log({email,password,confirmPass})
        alert('Register Succesfully')
    }


    return isValid;
}

