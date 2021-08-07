//remember to install these 
const express = require('express');
const path = require('path');
const PORT = 3000;
const cors = require('cors');
// Will be requring routers here
const userRouter = require('./router/router')
const app = express();



//express's built-in body parser function
app.use(express.json()); 
app.use(cors())



// app.use('/client', express.static(path.join(__dirname, '../client')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });


// app.use section - we will send incoming requests to our routes here
app.use('/user' , userRouter);


// global error handler -
app.use((err, req, res, next) => {
    const defultError = {
        message: "this is the defalut error", 
        status: 500, 
        log: "there was an error -defult"
    };
    const errorObj = Object.assign(defultError, err);
    return res.status(errorObj.status).json(errorObj.message);
});


// turn on oyr server - set listener
app.listen(PORT, () => {
console.log('yay', PORT);
});

