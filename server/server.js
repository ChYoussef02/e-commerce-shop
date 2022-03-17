const express = require('express') 
const dbConnect = require ('./helpers/dbConnect')
const config = require('config')
const PORT = config.get("SERVER_CONFIG.PORT") 
const app=express() 

const cors = require('cors')
dbConnect()
//middlewares 
app.use(cors())
app.use(express.json())

app.use('/api/user', require('./routes/userRoutes'))

app.get('/', (req , res)=> {
 res.send(ok)
})







app.listen(PORT ,()=>{
 console.log(`server is running on https://localhost:${PORT}`)
})