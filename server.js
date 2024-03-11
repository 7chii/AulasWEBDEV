const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use('/static', express.static('static'));
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'static/index.html'));
})
app.get('/static/styles.css',(req, res)=>
{
    res.set('content-type', 'text/css');
    res.sendFile(path.join(__dirname, 'static/styles.css'))
})
app.get('/aula02',(req, res)=>{
    res.sendFile(path.join(__dirname,'static/aula2.html'))
})
app.get('/aval',(req, res)=>{
    res.sendFile(path.join(__dirname,'static/aval.html'))
})
app.get('/aula04',(req, res)=>{
    res.sendFile(path.join(__dirname,'static/aula4.html'))
})
app.get('/ativ',(req, res)=>{
    res.sendFile(path.join(__dirname, 'static/ativ.html'))
})
app.get('/aula03',(req, res)=>{
    res.sendFile(path.join(__dirname, 'static/aula3.html'))
})
app.listen(port, ()=>{
    console.log(`api listening on port ${port}`)
})