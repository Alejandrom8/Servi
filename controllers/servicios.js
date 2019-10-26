const express = require("express")
const router = express.Router()

router.get("/servicios", (req, res) => {
    //todo lo que pasa cuando entra a /servicios
    res.render("services/index")
})

module.exports = router