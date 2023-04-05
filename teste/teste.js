const form = document.getElementById("form")
const lista = document.getElementById("listaCadastrados")
const cadastros = JSON.parse(localStorage.getItem("cadastros")) || []

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements["name"].value
    const email = evento.target.elements["email"].value

    const cadastro = {
        "nome": nome,
        "email": email
    }

    criaCadastro(cadastro)

    cadastros.push(cadastro)

    localStorage.setItem("cadastros", JSON.stringify(cadastros))

})

function criaCadastro(cadastro){
    const li = document.createElement("li")
    li.classList.add("item")
 
    const strong = document.createElement("strong")
    strong.innerHTML = cadastro.nome

   
    li.appendChild(strong)
    li.innerHTML += cadastro.email

    lista.appendChild(li)
}