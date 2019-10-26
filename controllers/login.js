const express = require("express")
const router = express.Router()
// const loginModel = require("../models/login")
// const { Trabajador } = require("./entities/trabajador.js")


router.get("/login", (req, res) => {
    res.render("login/index")
})

exports.get = router;

router.post("/login", async (req, res) => {
    console.log(req.body)
    const data = req.body;

    if(data.email != "" && data.password != ""){
        res.render('services')
    }else{
        res.send("No se han llenado los campos correctamente");
    }

    res.setHeader("Content-Type", "application/json")
    res.send(response)
});

exports.post = router;

