const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    description: String,
    date: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Photo', photoSchema);