const express = require('express')
const port = 3500;
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' }));

const dealsRoutes = require('./routes/deals.routes')

app.use('/deals', dealsRoutes)

app.listen(port,()=>{
    console.log(`Servidor en ${port}`)
})