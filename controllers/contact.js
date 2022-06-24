// create a reference to the model
let ContactModel = require('../models/contact');

// Gets all contacts from the Database and renders the page to list them all.
module.exports.contactList = function(req, res, next) {  
    //outputs all the documents in the collection in an array
    //has two object - one for error(err) and the other for success(contactList)
    ContactModel.find((err, contactList) => {
        //console.log(contactList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(contactList);
            //send data from atlas db to the webpage
            //use "contactdb" because the
            //render goes into the route folder
            res.render('contact/list', {
                title: 'Business Contact List', 
                ContactList: contactList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}
// Gets a contact by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    ContactModel.findById(id, (err, contactToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/details', {
                title: 'Contact Details', 
                contact: contactToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    // ADD YOUR CODE HERE 
    let newContact = ContactModel();
    res.render('contact/add_edit', {
        title: "Add a new Contact",
        contact: newContact,
        // userName: req.user ? req.user.username : ''
    });       
}

// Processes the data submitted from the Add form to create a new contact
module.exports.processAddPage = (req, res, next) => {
    // ADD YOUR CODE HERE
    let newContact = ContactModel({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        contactEmail: req.body.contactEmail  

    });

    ContactModel.create(newContact, (err, contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(contact);
            res.redirect('/contact/list');
        }
    });

}

// Gets a contact by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    // ADD YOUR CODE HERE
    let id = req.params.id;

    ContactModel.findById(id, (err, contactToEdit) => {
        if (err){
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/add_edit', {
                title: 'Edit Contact',
                contact: contactToEdit,
                // userName: req.user ? req.user.username : ''
            })
        }
    });
}

// Processes the data submitted from the Edit form to update a contact
module.exports.processEditPage = (req, res, next) => {
    // ADD YOUR CODE HERE
    let id = req.params.id

    let updatedContact = ContactModel({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        contactEmail: req.body.contactEmail
    });

    ContactModel.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/contact/list');
        }
    });
}

// Deletes a contact based on its id.
module.exports.performDelete = (req, res, next) => {
    // ADD YOUR CODE HERE
    let id = req.params.id;
    ContactModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact/list');
        }
    });
}