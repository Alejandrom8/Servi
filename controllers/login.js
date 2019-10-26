const express = require("express")
const router = express.Router()
const { serviceResponse } = require("./responseModel")
const loginModel = require("../models/login")
// const { Trabajador } = require("./entities/trabajador.js")


router.get("/login", (req, res) => {
    res.render("login/index")
})

exports.get = router;

router.post("/login", async (req, res) => {
    const response = new serviceResponse();
    console.log(req.body)
    const data = req.body;

    if(data.email != "" && data.password != ""){

        const userLogin = {
            email: data.email,
            password: data.password
        }

        const verifyByModel = await loginModel(userLogin);
        
        if(verifyByModel.success){
            response.success = true;
            response.onSuccessEvent = "/home";
        }else{
            response.errors = verifyByModel.errors;
            response.messages = "Usuario y/o contraseña incorrectos";
        }
    }else{
        response.errors = "No se han llenado los campos correctamente";
    }

    res.setHeader("Content-Type", "application/json")
    res.send(response)
});

exports.post = router;

