const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String
}, {
    timestamps: true
});
const photoSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    description: String,
    date: Date,
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Photo', photoSchema);