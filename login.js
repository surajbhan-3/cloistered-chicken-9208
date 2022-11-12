//


let form=document.querySelector("form")
form.addEventListener("submit", function(event){
     event.preventDefault()
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

        let lsd=JSON.parse(localStorage.getItem("signup"))
        lsd.forEach(function(elem){
            if(obj.name==elem.name && obj.email==elem.email && obj.pass==elem.pass){
                alert("login sucessfull")
                window.location.href="/index.html"
            }else{
                alert("wrong credentials")
            }
        })
})