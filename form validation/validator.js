<<<<<<< HEAD
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function dom() {
  var x = document.forms["dom"];
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text = text + x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

function validateForm() {
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var gender = document.contactForm.gender.value;
  var nameErr = (emailErr = mobileErr = genderErr = true);

  if (name == "") {
    printError("nameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  if (gender == "") {
    printError("genderErr", "Please select your gender");
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  if ((nameErr || emailErr || mobileErr || genderErr) == true) {
    return false;
  } else {
    var preview =
      "You've entered the following details: \n" +
      "Full Name: " +
      name +
      "\n" +
      "Email Address: " +
      email +
      "\n" +
      "Mobile Number: " +
      mobile +
      "\n" +
      "Gender: " +
      gender +
      "\n";

    // alert(preview);
  }
}
=======
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function dom() {
  var x = document.forms["dom"];
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text = text + x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

function validateForm() {
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var gender = document.contactForm.gender.value;
  var nameErr = (emailErr = mobileErr = genderErr = true);

  if (name == "") {
    printError("nameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  if (gender == "") {
    printError("genderErr", "Please select your gender");
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  if ((nameErr || emailErr || mobileErr || genderErr) == true) {
    return false;
  } else {
    var preview =
      "You've entered the following details: \n" +
      "Full Name: " +
      name +
      "\n" +
      "Email Address: " +
      email +
      "\n" +
      "Mobile Number: " +
      mobile +
      "\n" +
      "Gender: " +
      gender +
      "\n";

    // alert(preview);
  }
}
>>>>>>> 76f9d24 (updated changes)
