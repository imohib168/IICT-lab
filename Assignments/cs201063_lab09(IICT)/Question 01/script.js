var color = document.getElementById("inputColor");

function changeBgColor() {
    colorValue = color.value;
    document.body.style.backgroundColor = colorValue;
    console.log(colorValue);
}


var email = document.getElementById("email");
var tel = document.getElementById("tel");
var date = document.getElementById("date");

function showInputValues() {
    emailValue = email.value;
    telValue = tel.value;
    dateValue = date.value;

    if (emailValue == "" && telValue == "" && dateValue == "") {
        alert("Kindly fill the fields...")
    } else {
        alert(`
        Email: ${emailValue}
        Contact Number: ${telValue}
        Date: ${dateValue}
        `);
    }
}


function focusEmail() {
    alert("Type your Email here...");
}

function focusContact() {
    alert("Type your Contact number here...");
}

function focusDate() {
    alert("Date...");
}