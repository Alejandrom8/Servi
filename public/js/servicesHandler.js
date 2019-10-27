const box = document.getElementById("services-container");
const servidores = [
    {
        "title": "Carpinteria",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
        "img": "carpinteria.jpg"
    },
    {
        "title": "Construccion de Huertos urbanos",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
        "img": "carpinteria.jpg"
    },
    {
        "title": "Trabajos de herreria",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
        "img": "carpinteria.jpg"
    },
    {
        "title": "Carpinteria",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
        "img": "carpinteria.jpg"
    },
    {
        "title": "Carpinteria",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
        "img": "carpinteria.jpg"
    },
    {
        "title": "Carpinteria",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
        "img": "carpinteria.jpg"
    },
    {
        "title": "Carpinteria",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
        "img": "carpinteria.jpg"
    },
    {
        "title": "Carpinteria",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
        "img": "carpinteria.jpg"
    }
];

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
        const request = await fetch("http://www.mocky.io/v2/5db5af403200005a0018bff9", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });

        if(request.ok){
            return await request.json()
        }else{
            throw new Error("Request invalida")
        }
    }catch(e){
        console.log(e)
    }
}

(async ()=> {
    const servidores = await getDataFromApi();
    let finalHtml = "";

    servidores.forEach( serv => {
        finalHtml += convertToHtml(serv)
    });http://www.mocky.io/v2/5db5ad4a3200006e0018bff8

    box.innerHTML = finalHtml;
})();

const searcher = document.getElementById("query")

async function getDataFromApiForSearch(data){
    try{
        const request = await fetch("http://www.mocky.io/v2/5db5af403200005a0018bff9", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if(request.ok){
            return await request.json()
        }else{
            throw new Error("Request invalida")
        }

    }catch(e){
        console.log(e)
    }
}

searcher.addEventListener("keyup", async function (){
    
});

// (async function(){
//     await getDataFromApi();
// })();

