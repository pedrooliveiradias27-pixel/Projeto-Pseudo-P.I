const express = require("express")
const api = express()
const {mongoClient, MongoClient} = require("mongodb")
const dotenv = require("dotenv")
dotenv.config()
const url = process.env.DATABASE_URL
const ObjectId = require("mongodb").ObjectId
const client = new MongoClient(url)
let collection

api.set("view engine","ejs")
api.use(express.urlencoded({extend:true}))
api.get("index",(req,res)=>{
    res.render(index.ejs)
})

//criar um novo cadastro

api.post("/show",async (req,res)=>{
    awai collection.insertOne({
        nomeCompleto: req.body.nomeCompleto,
        endereço: req.body.endereço
        cpf: req.body.cpf,
        telefone:req.body.telefone,
        email: req.body.email
    })
    res.redirect("/show")
})
api.get("/show",async (res,req)=>{
    await collection.find().toArray()
    res.render("/show.ejs",{crud})
})
api.post("/edit/:id", async (req,res)=> {
    await collection.udateOne(
        {_id: new ObjectId(req.params.id)},
        {
            $set:{
                nomeCompleto: req.body.nomeCompleto,
        endereço: req.body.endereço
        cpf: req.body.cpf,
        telefone:req.body.telefone,
        email: req.body.email
            }
        }
    )
    res.redirect("/show")
})