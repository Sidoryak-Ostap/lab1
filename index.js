

/*================= Підключення бібліотек============================ */

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());

/*====================== Підключення різних файлів і модулів ======================================= */



const setupBD = require('./setup/setupBD.js');

const {users} = require('./models/users.js')
const {Theater} = require('./models/theaters.js')
const {Session} = require('.//models/theaters.js')






/*======= Головна функція  ======= */


const start = async () =>{

    await setupBD.conectBd(process.env.MONGO_URL);               // Виклик функції на підключння до БД

    
app.get('/users', async (req,res) =>{                       //Get запит на /users
    const {name} = req.query;

    const queryDB ={};

    if(name)
    {
        queryDB.name = name;
    }
    console.log(name);

    const docs = await users.find().limit(3);

    res.status(200).json( docs);
    

})




app.listen(process.env.PORT, () =>{             //Запуск сервера на порті записаний в .env ('8080')
    console.log("Server started");
})

}

start();