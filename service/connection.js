const config = require("../config")
const { Client } = require("pg")

const Client = new Client(config.databaseConfig)

module.exports = Client
