import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send('<h2>Hello Rishi</h2>')
})

export { app };
