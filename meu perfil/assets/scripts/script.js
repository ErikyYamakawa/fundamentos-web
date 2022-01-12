let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")


nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3) {
        txt.innerHTML = "Nome Imvalido"
        txt.style.color ="red"
    } else {
        txt.innerHTML= "Nome Valido"
        txt.style.color = "green"
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@")== -1 || email.value.indexOf(".")== -1 ){
        txtEmail.innerHTML = "Email invalido"
        txt.style.color ="red"
    } else {
        txtEmail.innerHTML = "Email valido"
        txt.style.color ="green"
    }

}