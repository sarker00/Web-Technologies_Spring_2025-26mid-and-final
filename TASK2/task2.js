let wrongCount = 0;

function validateForm() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;

    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";

    if (email.indexOf("@") == -1) {
        document.getElementById("emailError").innerHTML =
            "Email must contain @";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passError").innerHTML =
            "Password must be at least 6 characters";
        valid = false;
    }

    if (password.indexOf("#") == -1) {
        document.getElementById("passError").innerHTML =
            "Password must contain #";
        valid = false;
    }


    if (!valid) {

        wrongCount++;

        document.getElementById("count").innerHTML = wrongCount;

    }
    else {

        alert("Login Successful");

    }
    return false;

}