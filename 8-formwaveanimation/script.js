const divs = document.querySelectorAll("div");

const emailLabel = document.querySelector(".email")
const emailInput= document.querySelector(".e-mail")

const passwordLabel = document.querySelector(".password")
const passwordInput= document.querySelector(".pass-word")


emailInput.addEventListener("click",() =>{
        emailLabel.classList.add("focus")
})

emailLabel.addEventListener("click",() => {
    emailLabel.classList.add("focus")
    passwordInput.value.length == 0  ? passwordLabel.classList.remove("focus") : null;
})



passwordLabel.addEventListener("click",() => {
    passwordLabel.classList.add("focus")
    emailInput.value.length == 0  ? emailLabel.classList.remove("focus") : null;
})

passwordInput.addEventListener("click",() =>{
passwordLabel.classList.add("focus")
})



