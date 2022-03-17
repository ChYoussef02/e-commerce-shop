const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
name :{ 
 type :String, 
 required : true, 
} ,
email : {
 type : String , 
 required:true ,
},
password : {
 type : String , 
 required:true ,
}
})

module.exports = mongoose.model('user' , userSchema)