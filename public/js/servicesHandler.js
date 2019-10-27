const box = document.getElementById("services-container");

function convertToHtml(object){
    return `<div class="service-box row">
                <div class="description col-sm-8">
                    <h4>${object.title}</h4>
                    <p>${object.description}</p>
                </div>
                <div class="media col-sm-4 row">
                    <div class="col-md-12">
                        <center><img class="section-icon" src="img/${object.img}"></center>
                    </div>
                    <div class="col-md-12">
                    <br>
                        <button class="btn btn-primary btn-block">Ver</button>
                    </div>
                </div>
            </div>`;
}

async function getDataFromApi(){
    try{
        const request = await fetch("http://www.mocky.io/v2/5db5364c3200005c0018bf0c", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });

        if(request.ok){
            console.log(await request.json())
        }else{
            throw new Error("Request invalida")
        }
    }catch(e){
        console.log(e)
    }
}

(async function(){
    await getDataFromApi();
})();