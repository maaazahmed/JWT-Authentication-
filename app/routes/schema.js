var mongoose = require("mongoose")

var schema = mongoose.Schema({
    username: { type: String, required: true },
    Email: { type: String, required: true },
    password: { type: String, required: true },
})


var Model = mongoose.model("user", schema)


module.exports = Model
