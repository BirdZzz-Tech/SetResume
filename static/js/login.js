const btnsignin = document.querySelector("#signin")
const btnsignup = document.querySelector("#signup")

const body = document.querySelector("body")

btnsignin.addEventListener("click", function(){
    body.className = "sign-in-js"
})

btnsignup.addEventListener("click", function(){
    body.className = "sign-up-js"
})



