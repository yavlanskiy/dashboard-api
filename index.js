import express from "express";

const port = 8000;
const app = express();

app.get('/hello', (req, res)=>{
    res.send('Hello')
})

app.listen(port, ()=>{
    console.log(`Сервер запущен на http://localhost:${port}`)
})

//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'test/plain')
//     res.end('Hello!!!');
// });
//
// server.listen(port, host, ()=>{
//     console.log(`Сервер запущен на ${host}:${port}`)
// });


