const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
id:{ type: Number, required:true},
name: {type:String, required:true},
username: {type: String, required:true},
email: {type: String, required:true}
}, {
    collection: 'users'
});

const User = mongoose.model('User', schema);

module.exports = User;