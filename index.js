//modulos
const express = require("express")
const morgan = require("morgan")
const path = require("path")
const config = require("./config")

//controllers
const main = require("./controllers/main")
const login = require("./controllers/login")
const servicios = require("./controllers/servicios")
const registro = require("./controllers/registro")
//aplicacion express
const server = express()

//settings
server.set("views", path.join(__dirname,"/views"))
server.set("view engine", "ejs")

//middlewares
server.use(express.json())
server.use(morgan("dev"))

//routers
server.get('/', main)
server.get("/login", login.get)
//router post para login, manejara el envio de datos
server.post("/login", login.post)
server.get("/registro", registro)
server.get("/servicios", servicios)

//carpeta por defecto para cuando no suceda match con ningun otro router
server.use(express.static("public"))
server.use(express.static("node_modules"))
//encendiendo el servidor
server.listen( config.port, () => {
    console.log(`Server created at port ${config.port}`)
})
