const express = require('express')
const mongoose = require('mongoose')
const server = express()
const port = 8082
server.use(express.json()); // built-in middleware for express

server.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials'
  )
  next()
})
server.get("/getProdacts", (req, res, next) => {
  console.log("arrive to getProdacts");
  res.status(200).send([
    {
      id:0,
       nameprodact: 'sas',
     price: 4,
    img: 'https://slack-imgs.com/?c=1&amp;o1=gu&amp;url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-small%2F1f5d3-fe0f%402x.png'},
    {
      id:1,
      nameprodact: 'sas',
      price: 2,
      img:
        'https://files.codes/uploads/mam/img/1622481950639__%D7%A7%D7%9C%D7%A0%D7%93%D7%A8.png'
    }
  ])
})
server.post("/addProdact", (req, res, next) => {
  console.log("arrive to addProdact",req.body);
  res.status(200).send(req.body)
})
server.post("/editProdact", (req, res, next) => {
  console.log("arrive to editProdact",req.body);
  res.status(200).send(req.body)
})
server.post("/payServer",(req, res, next) => {
  console.log("payServer");
  res.status(200)
})
server.listen(port, () => {
  console.log(`Server runnings att http://${port}/`);
});


