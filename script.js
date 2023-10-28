function passwordValidation () {
  var passValue = document.getElementById("password");
  console.log(passValue.value)
  var confpassValue = document.getElementById("password_conf");
  console.log(confpassValue.value)
  var passwordError = document.getElementById("password_error");
  if (passValue.value !== confpassValue.value) {
    passValue.classList.add('wrong_pass')
    confpassValue.classList.add('wrong_pass')
    passwordError.innerText = "*passwords do not match.";
    passwordError.style.display = 'block';
  }
  else {
    passValue.classList.remove('wrong_pass')
    confpassValue.classList.remove('wrong_pass')
    passwordError.innerText = "";
    passwordError.style.display = 'none';
  }
}