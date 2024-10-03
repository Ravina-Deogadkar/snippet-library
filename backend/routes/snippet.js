const express = require('express');
const router = express.Router();
const SnippetSchema = require('../models/Snippet');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


// Route 4: Getting all user specific notes: POST: http://localhost:8181/api/snippet/getallsnippets. Login Required
router.post('/getallsnippets', async (req, res) => {
    try {
        const allSnippets = await SnippetSchema.find({ authorId: req.body.authorId}).select({snippetId : 1, title : 1, code : 1, modifiedDate : 1, creationDate: 1 }).sort({ modifiedDate: -1 });
        res.status(200).json(allSnippets);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

// Route 1: Creating A New User: POST: http://localhost:8181/api/snippet/createsnippet. No Login Required
router.post('/createsnippet', [
    body('title', "Snippet title should be atleast 4 characters long").isLength({ min: 4 }),
    body('description'),
    body('authorId'),

], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const checkMultipleSnippets = await SnippetSchema.findOne({ title: req.body.title });
        if (checkMultipleSnippets) {
            return res.status(403).json({ error: "A Snippet with this title already exists" });
        }
        
        const newSnippet = await SnippetSchema.create({
            title: req.body.title,
            code: req.body.description,
            creationDate: Date.now(),
            modifiedDate: Date.now(),
            starCount: 0,
            authorId: req.body.authorId,
        });

        let payload = {
            snippet: {
                id: newSnippet.id
            }
        }

        //const authtoken = jwt.sign(payload, JWT_SECRET);
        res.json({payload});

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});



module.exports = router;
