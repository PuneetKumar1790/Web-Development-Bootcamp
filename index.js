require('dotenv').config()
console.log("Chai aur code")
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('Puneetdotcom')
})
app.get('/login',(req,res)=>{
  res.send('<h1>Please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h2>Dhruv rathee roast MODI JI </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 