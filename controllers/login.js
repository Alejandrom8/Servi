const express = require("express")
const router = express.Router()

router.get("/login", (req, res) => {
    res.render("login/index")
})

module.exports = router