const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    if(!req.body.name || !req.body.email) {
        return res.status(400).json( {message: 'Please enter both a name and an email'})
    }
    const newUser = {};
    newUser.id = uuid();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    users.push(newUser);
    console.log(newUser)
    return res.json(req.body);
})

module.exports = router;