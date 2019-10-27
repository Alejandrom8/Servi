const form = document.getElementById("register")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = formToJson(form)
    console.log(formData)
    if (formData.nombre == "" || formData.nombre.legth == null || /^\s+$/.test(nombre)) {
        alert('Rellene el campo porfavor');
    }
})