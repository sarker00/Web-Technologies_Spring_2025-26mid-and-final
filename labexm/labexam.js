let registrants = [];

let virtualCount = 0;
let inPersonCount = 0;

function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let company = document.getElementById("company").value;

    let type = document.querySelector('input[name="type"]:checked');

    let valid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("typeError").innerHTML = "";


       if (name.length < 6 || name.length > 100) {
        document.getElementById("nameError").innerHTML =
            "Name must be between 6 and 100 characters.";
        valid = false;
    }


    
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        document.getElementById("emailError").innerHTML =
            "Please enter a valid professional email address.";
        valid = false;
    }

    if (!type) {
        document.getElementById("typeError").innerHTML =
            "Please select your attendance type.";
        valid = false;
    }


    if (valid) {

        registrants.push(name);

        if (type.value == "Virtual") {
            virtualCount++;
        } else {
            inPersonCount++;
        }

        document.getElementById("total").innerHTML = registrants.length;
        document.getElementById("virtual").innerHTML = virtualCount;
        document.getElementById("inperson").innerHTML = inPersonCount;

        alert("Registration Successful!");

        document.getElementById("regForm").reset();
    }

}


function toggleAnalytics() {

    let panel = document.getElementById("analytics");
    let btn = document.getElementById("analyticsBtn");

    if (panel.style.display === "none") {
        panel.style.display = "block";
        btn.innerHTML = "Hide Event Analytics";
    } else {
        panel.style.display = "none";
        btn.innerHTML = "Show Event Analytics";
    }

}
