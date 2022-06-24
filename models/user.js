let mongoosetwo = require('mongoose');

// Create a model class
let UserSchema = mongoosetwo.Schema(
    {
        email: String, 
        password: Number,
        username: String        
    },
    {
        collection: "user"
    }
);

//export modules to allow other modules to use it.
module.exports = mongoosetwo.model('User', UserSchema);