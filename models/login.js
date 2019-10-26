const database = require("../service/connection");
const serviceResponse = require("../controllers/responseModel") 

async function loginModel(data){
    const res = new serviceResponse();
    try{
        const client = database.client;
        database.connect();

        const results = await client.query("SELECT email,password FROM usuarios WHERE email = $1 LIMIT 1", [data.email]);
        
        if(results.rows.length){
            res.success = true;
            res.data = results.rows[0].email;
        }

        await client.end();
    }catch(e){
        res.errors = e;
        console.log(e);
    }finally{
        return res;
    }
}

module.exports = loginModel;