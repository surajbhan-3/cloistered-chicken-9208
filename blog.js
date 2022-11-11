//




let form=document.querySelector("form");
let lsd= JSON.parse(localStorage.getItem("blog-subs"))||[];

form.addEventListener("submit", function(event){
    event.preventDefault();
    let sub=document.querySelector("input").value;
    let obj={
        sub:form.email.value
    }
    lsd.push(sub);
    localStorage.setItem("blog-subs", JSON.stringify(lsd))
    alert("your  subscribed to newsletter")
})