const mongoose = require('mongoose') 
const config = require('config')




const dbConnect = () => {

 mongoose.connect(config.get("DB_CONNECTION.URI"),
 (err)=>{
  if(err) throw err 
  console.log('DB connected..')
 })
}

module.exports = dbConnect