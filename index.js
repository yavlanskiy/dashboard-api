import express from "express";
import {log} from "util";

const port = 8000;
const app = express();

app.all('/hello', (req, res,next)=>{
    console.log('ALL - я должен быть первым.');
    next();
})
const addCallback = (req,res,next)=> {
    console.log('addCallback')
    next();
}
app.get('/hello', addCallback, (req, res)=>{
    res.send('Hello')
})

app.listen(port, ()=>{
    console.log(`Сервер запущен на http://localhost:${port}`)
})



