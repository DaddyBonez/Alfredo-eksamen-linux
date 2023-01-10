const mongoose = require('mongoose')

const Schema = mongoose.Schema
//enkel schema for Eiere
const FlockSchema = new Schema({
    Name: {
        type:String,
        required:true
    },
    identitetsnummer: {
        type:String,
        unique: true,
        required:true
    },
    klan: {
        type: String,
        required: true
    }
}, {timestamps: true });

const Flock = mongoose.model('Flock', FlockSchema);
module.exports = Flock
