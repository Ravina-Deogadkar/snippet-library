const express = require('express');
const router = express.Router();
const SnippetSchema = require('../models/Snippet');
const { body, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

router.post('/createsnippet', [
    body('title').exists().withMessage("title is required"),
    body('code').exists().withMessage("code is required"),
    //body('starCount').exists().withMessage("starCount is required"),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, code, starCount } = req.body;
        const duplicateSnippet = await SnippetSchema.findOne({ code: code }); //can be title, starCount etc. instead of code
        if (duplicateSnippet) {
            return res.status(403).json({ error: "A Snippet with this id already exists" });
        }
        const newSnippet = await SnippetSchema.create({
            snippetId: uuidv4(),
            title,
            code,
            creationDate: new Date().toISOString(),  
            modifiedDate: '',
            starCount,
            timestamps: []
        });

        return res.status(200).json(newSnippet);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = router;