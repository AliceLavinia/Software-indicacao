const app = document.getElementById("app")

const formAction = () => {
    const form = document.getElementById("form")
    form.onsubmit = (event) => {
       event.preventDefault()
       const formData = new formData(form)
    }
}
const startApp = () => {
    const content = `
    <form id="form" >
    <input type="email" name="email" placeholder="E-mail">
    <input type="text" name="phone" placeholder="Telefone">
    <button>
        Confirmar
    </button>
</form>
   `

   app.innerHTML = content
}

startApp()