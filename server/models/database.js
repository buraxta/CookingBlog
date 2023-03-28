const mongoose = require("mongoose");

// Connecting to the database by reading the MongoDB URI address from environment variables.
mongoose.connect(process.env.MONGODB_URI);

// Handling connection errors and printing error messages to the console.
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Defining the actions to be performed if the database connection is successful.
db.once('open', function(){
console.log('Connected');
});

//Models
require('./Category');