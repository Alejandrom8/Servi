const express = require("express")
const router = express.Router()

exports.get = router.get("/login", (req, res) => {
    res.render("login/index")
})

exports.post =  router.post("/login", (req, res) => {
    res.render("login/index")
})


