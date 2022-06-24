// Import
let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema(
    {
        contactName: String,
        contactNumber: Number,
        contactEmail: String        
    },
    {
        collection: "contactList"
    }
);

//export modules to allow other modules to use it.
module.exports = mongoose.model("Contact", contactModel);