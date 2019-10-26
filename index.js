const express = require("expresss")
const morgan = require("morgan")
const path = require("path")
const config = require("./config")

const server = express()

server.use(express.json())
server.set("views", path.join(__dirname, "/views"))
server.set("view engine", "ejs")

server.get("/", main)

server.use(express.static("public"))

server.listen( config.port, () => {
    console.log(`Server created at port ${config.port}`)
})
