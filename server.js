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
