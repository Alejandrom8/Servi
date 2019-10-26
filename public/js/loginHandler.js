const form = document.getElementById("login")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = formToJson(this)
    console.log(formData)
})
