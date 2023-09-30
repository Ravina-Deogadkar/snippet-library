const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const SnippetSchema = new Schema({
    snippetId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    creationDate: {
        type: String,
        required: true
    },
    modifiedDate: {
        type: String,
        required: true
    },
    starCount: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('snippet', SnippetSchema);