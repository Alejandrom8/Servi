const express = require("express")
const router = express.Router();

router.get("/profile", (req, res) => {
    res.render("profile", {
        nombre: "Juan Pérez",
        img: "juanperez.jpg",
        servicios: {
            0:{
                title: "Carpinteria",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
                img: "carpinteria.jpg"
            },
            1:{
                title: "Cración de huertos urbanos",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
                img:"huertos.jpg"
            },
            2:{
                title: "Arreglo de zapatos",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
                img:"zapateria.jpg"
            }
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat in turpis sollicitudin aliquet nec ut mauris.",
        points: 5
    })
});