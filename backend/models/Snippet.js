const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const SnippetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    attachment: {
        data: {
            type: Buffer,
            required: true
        },
        filename: {
            type: String,
            required: true
        }
    },
    creationDate: {
        type: String,
        required: true
    },
    modifiedDate: {
        type: String,
        required: false
    },
    starCount: {
        type: Number,
        required: false
    },
    authorId: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('snippet', SnippetSchema);