// landing page code


let form = document.querySelector(".signup-form");
let lsd = JSON.parse(localStorage.getItem("signup"))|| [];
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#email").value;
    console.log(name, email, pass)
   


        let obj = {
            name: form.name.value,
            email: form.email.value,
            pass: form.pass.value
        }
        console.log(obj)
        if (obj.name == "" || obj.email == "" || obj.email == " ") {
            alert("Please fill all the details")
        } else {
        lsd.push(obj);
        localStorage.setItem("signup", JSON.stringify(lsd));
        window.location.href="login.html";
    };


})








