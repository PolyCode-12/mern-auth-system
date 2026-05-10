const mongoose = require('mongoose')

const userChema = new mongoose.Schema(
    {
    user: {
        type: String , 
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pwd:{
        type: String,
        required: true
    }
}
)

module.exports = mongoose.model('User' , userChema)