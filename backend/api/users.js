const express = require('express');
const router = express.Router()

const user = require('../models/user');

router.get('/', (req, res) => {
    user.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})
router.post('/', (req, res) => {
    const { name, email } = req.body;
    const newUser = new user({
        name: name, email: email
    })
    newUser.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})

module.exports = router 
