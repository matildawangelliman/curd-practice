const express = require('express');
const router = express.Router();
// we will be requring in our controllers here - that is where the data is actually processed.
const userController = require('../controller/userController');


router.get('/:username', userController.findUser, (req, res) => {
   res.status(200).json(res.locals.foundUser); // send back the data we found
});

// to create a new user, need a post route
router.post('/new', userController.createUser, (req, res) => {
    // in our controllers, we put the new user in the res.locals.newUser
    return res.status(200).json(res.locals.newUser) // can also switch this to a scucess message
})




module.exports = router;