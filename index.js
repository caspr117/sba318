import express from "express"
import {addUser, getPosts} from "./public/js/data.js"
import path from "path"
const app = express()

const port = 5000

app.use(express.static('public'))
app.use(express.json())

app.post("/posts",(req,res)=>{
    addUser(req.body)
    res.json("User Added")
})
app.get("/posts", (req,res)=>{
    res.json(getPosts())
})
app.get("/", (req,res)=>{
res.send("hey")
})
app.listen(port)