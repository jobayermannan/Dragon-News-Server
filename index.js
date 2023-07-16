const express = require('express')
const app = express()
var cors = require('cors')
const port =process.env.PORT || 5000;

const catagories = require('./data/Categories.json')

app.use(cors());
app.get('/', (req, res) =>{
    res.send("Dragon New is Running")
});
app.get('/categories', (req, res) =>{
    res.send(catagories)
})
app.listen(port,()=>{
    console.log(`Dragon Api is Running on port ${port}`)
})