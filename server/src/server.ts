//let us create a sample server
import express from "express"
import mongoose from "mongoose";
import "dotenv/config"

const app = express()
const port = 5000;

app.get("/", (req, res, next) => {
    res.status(200).send("Hello")
})

app.listen(port, ()=>{
    console.log("The server is listening on the port "+port)
})