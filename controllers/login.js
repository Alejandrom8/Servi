const express = require("express")
const router = express.Router()

router.get("/login", (req, res) => {
    res.render("login/index")
})

exports.get = router;

router.post("/login", (req, res) => {
    console.log(req.body)
    res.send({
        status: "Todo ok"
    })
});

exports.post = router;

