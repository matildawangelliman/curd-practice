const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect to our mongoose server
const MONGO_URI = 'mongodb+srv://damien:Codesmith@cluster0.prul2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, {
    //mongoose boilerplate? Not sure what this is doing..
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'crud_practice',
})
.then(() => {
    console.log('Connected to Mongo DB.');
  })
  .catch((err) => {
    console.log(err);
  });


// need to define our schema
const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    favorite_icecream: {type: String, required: true},
    favorite_algo: {type: String, required: true}
})

module.exports = mongoose.model('User', userSchema)