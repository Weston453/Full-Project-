const path = require('path');
const express = require('express');
const cors = require("cors");

const app = express();

const mtnCtrl = require('./controllers/mtnController')
const trailCtrl = require('./controllers/trailController')


const axios = require('axios');

app.use(cors());
app.use(express.json());
app.use(express.static("client"));

app.get('/api/mountain/', mtnCtrl.getMountainFact)

app.get('/api/trails/', trailCtrl.getTrails)
app.post('/api/trails/', trailCtrl.createTrail)

//Deployment Code----------------------------------------------------------------------------------
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../client/index.html"))
});

const port = process.env.PORT || 4000

app.listen(port, ()=>{
        console.log(`Listening on port: ${port}`)
})

