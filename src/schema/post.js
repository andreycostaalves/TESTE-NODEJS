const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  posts = new Schema({
    id: {type: Number, required: true},
    title: {type: String, required:true},
    body: {type: String}

})

module.exports = mongoose.model('Post', posts)  