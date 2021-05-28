const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse application in urlencoded form
app.use(bodyParser.urlencoded({extended:true}))
//parse application in json format
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/databaseConfig.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Successfully connected to the database");
}).catch(err=>{
    console.log('Could not connect to the database');
    process.exit();
})

//define a simple route
app.get('/',(req,res)=>{
    res.json({'message':'Welcome'})
})

require('./app/routes/empRoutes.js')(app);

app.listen(9000,()=>{
    console.log("Server is listening on port 9000")
})