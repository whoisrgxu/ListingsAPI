/********************************************************************************
*  WEB422 – Assignment 1
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Rong Gang Xu Student ID: 129160230 Date: May 15th, 2024
*
*  Published URL: ___________________________________________________________
*
********************************************************************************/

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
require('dotenv').config();
const HTTP_PORT = process.env.PORT || 8080;
const ListingsDB = require("./modules/listingsDB.js");
const db = new ListingsDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

    res.json({message: "API listening"});
});

// Add new
// This route expects a JSON object in the body, e.g. { "firstName": "Peter", "lastName": "McIntyre" }
app.post('/api/listings', (req, res) => {
    
    db.addNewListing(req.body)
        .then(newListing => res.status(201).json(newListing))
        .catch(err => res.status(500).json({error: "Failed to create new listing", details: err.message}));
});

app.get('/api/listings', (req, res) => {

    const {page, perPage, name} = req.query;
    db.getAllListings(parseInt(page), parseInt(perPage), name)
        .then(listings => {
            res.json(listings);
        })
        .catch(err => {
            res.status(500).json({Error: 'Failed to fetch listings', details: err.message});
        })
})

app.get('/api/listings/:id', (req, res) => {

    const listingId = req.params.id;
    db.getListingById(listingId)
        .then(listing => {
            if(listing)
                res.json(listing);
            else
                res.status(404).json({Error: 'Listing not found'});
        })
        .catch(err => {
            res.status(500).json({Error: 'Failed to fetch the desired listing', details: err.message});
        })
})

app.put('/api/listings/:id', (req, res) => {

    const listingId = req.params.id;
    db.updateListingById(req.body, listingId)
        .then((result) => {
            console.log(result);
            if (result.modifiedCount > 0)
                res.json({message: `Update success on ${listingId}`});
            else
                res.status(404).json({Error: 'No changes made or listing not found'});
        })
        .catch((err) => {
            res.status(500).json({Error: 'Failed to updated the selected listing', details: err.message});
        })
})

app.delete('/api/listings/:id', (req, res) => {

    const listingId = req.params.id;
    db.deleteListingById(listingId)
        .then(result => {
            if (result.deletedCount > 0) {
                res.json({message: `Successfully deleted the listing: ${listingId}`});
            }
            else res.status(404).json({Error: 'Listing not found'});
        })
        .catch(err => {
            res.status(500).json({Error: 'Failed to delete listing', details: err.message});
        })
})
db.initialize(process.env.MONGODB_CONN_STRING).then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});


