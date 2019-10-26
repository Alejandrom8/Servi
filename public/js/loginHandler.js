const form = document.getElementById("login")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const formData = formToJson(form)
    console.log(formData)
    const response = await sendData(formData)
    manageResponse(response)
});

async function sendData(data){
    try{
        const res = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(res.ok){
            return await res.json()
        }else{
            throw new Error("Hubo un error al mandar los datos del login")
        }
    }catch(e){
        console.log(e)
    }

    return null
}

function manageResponse(res){
    console.log(res)
}
