import express from 'express';

const server = express();

server.get('/', (req, res)=>{
    res.send('Hello world');
});

server.listen(3000, ()=> {
    console.log('http://localhost:3000/');
});