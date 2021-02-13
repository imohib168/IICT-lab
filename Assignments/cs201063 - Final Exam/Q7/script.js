var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var pass = document.getElementById("pass");
var code = document.getElementById("code");
var num = document.getElementById("num");
var showImg = document.getElementById("showImg");
var img = document.getElementById("img");

var research = document.getElementById("research");

function checker() {
    var fnameValue = fname.value;
    var lnameValue = lname.value;
    var passValue = pass.value;
    var codeValue = code.value;
    var numValue = num.value;

    if (fnameValue == "") {
        alert("Kindly, Enter First Name...");
    } else if (lnameValue == "") {
        alert("Kindly, Enter Last Name...");
    } else if (passValue == "") {
        alert("Kindly, Enter Password");
    } else if (passValue.length >= 0) {
        if (passValue.length < 10) {
            alert("Password should at least 10 characters long...");
        } else {
            var pattern = /^[a-z]/;
            if (passValue.match(pattern)) {
                if (codeValue == "" && numValue == "") {
                    alert("Kindly, Enter Number...");
                } else if (codeValue.length >= 0 && numValue.length >= 0) {
                    if (codeValue.length != 4) {
                        alert("Code should must contain 4 Numbers");
                    } else if (numValue.length != 7) {
                        alert("Number should must contain 7 Numbers");
                    } else {
                        if (research.value == "select") {
                            alert("Kindly Select the Area of Research");
                        } else {
                            alert("Form Submitted");
                            document.getElementById("fname").value = "";
                            document.getElementById("lname").value = "";
                            document.getElementById("pass").value = "";
                            document.getElementById("code").value = "";
                            document.getElementById("num").value = "";
                            document.getElementById("img").src = "";
                        }
                    }
                }
            } else {
                alert("Password can only contain small letters");
            }
        }
    }
}

function ImageShow() {
    if (research.value == "IP") {
        img.src = "imgProc.jfif";
    } else if (research.value == "DL") {
        img.src = "deepLearning.jfif";
    } else if (research.value == "ML") {
        img.src = "machineLearning.jfif";
    } else {
        img.src = "";
    }
}