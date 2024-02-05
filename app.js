let copy = document.querySelector(".fa-regular");
let passwordText = document.getElementById("Password");
let generatePassBtn = document.getElementById("generatePass");
let passGenePast = document.querySelector(".pass-gene-past");
let pass_generated = 0;
copy.addEventListener("click", () => {
  if (passwordText.innerText != "") {
    copy.classList.remove("fa-regular");
    copy.classList.add("fa-solid");
  } else {
    alert("noooo! password is not generated");
  }
  navigator.clipboard.writeText(passwordText.innerText);
});

generatePassBtn.addEventListener("click", () => {
  pass_generated += 1;
  let pass_words =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = Math.floor(Math.random() * 10 + 8);
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * pass_words.length);
    password += pass_words.substring(randomNumber, randomNumber + 1);
  }
  passwordText.innerHTML = password;
  passGenePast.innerHTML += `<span class="pass-span">${password}</span>`;
  copy.classList.add("fa-regular");
  copy.classList.remove("fa-solid");
  if (pass_generated > 20) {
    alert("you cant generate more your password will delete in 5 sec please take screenshot from your passwords");
    setTimeout(()=>{
        location.reload()
    },5000)
  }
});
