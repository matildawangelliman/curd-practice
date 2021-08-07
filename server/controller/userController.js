// we need to access the data base to
const User = require('../model/userModel');


// we will put menthod on this object and process data from
const userController = {};


// createUser - includes their favorite flavor and algorithm
userController.createUser = async (req, res, next) => {
  try {
     // nned to use mongoose to create a userController 
     // data coming in on the req object
     const newUser = await User.create(req.body); // TODO: Make sure we are sending the data from the front end
     console.log(newUser); // test what we got back from mongoDB
     res.locals.newUser = newUser;
     return next()
    }
  catch (err) {
      console.log('error in creating user', err);
      return next(err); // will send to the global error handler
  }
};

userController.findUser = async (req, res, next) => {
    try {
    // to use findOne menthod
    const username = req.params.username;
    // line 28 is the same as const { username } = req.params; 
    const found = await User.findOne({username: username});
    res.locals.foundUser = found;
    return next(); 
    }
    catch (err) {
    return next(err);
    }
} 

// check, or get back everything/ or some data


// make sure that rest of the software can read this file
module.exports = userController;