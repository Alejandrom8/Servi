const config = require("../config")
const { Client } = require("pg")

const client = new Client(config.databaseConfig)

exports.client = client;

exports.connect = async function(){
    try{
        await client.connect();
    }catch(e){
        console.log("Fallo la conexion a la base de datos", e)
    }
}

