const express = require('express')
require('dotenv').config()
const app = express()
const port = 3589

app.get('/', (req, res)=>{
  res.send('Hello World')
})

app.get('/twitter', (req, res)=>{
  res.send("rohitbhatt3241")
})


app.get('/login', (req, res)=>{
  res.send(<h1>Please login at instagram</h1>)
})

app.get('/youtube', (req, res)=>{
  res.send("from chai aur code")
})

app.listen(process.env.PORT, ()=>{
  console.log(`Listening on port ${port}`);
})

