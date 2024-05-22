# ListingsAPI
Overview
This project is a simple Web API built with Node.js, Express, and MongoDB. It is designed to interact with the "listingsAndReviews" collection in the "sample_airbnb" database provided by MongoDB Atlas.

Features
Connect to a MongoDB Atlas database.
Perform CRUD operations on the listings.
Simple API endpoints to interact with the data.
Middleware for CORS and JSON parsing.
Environment configuration using dotenv.
Setup Instructions
Prerequisites
Node.js
npm
MongoDB Atlas account
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/listingsAPI.git
cd listingsAPI
Install dependencies:

sh
Copy code
npm install
Create a .env file in the root directory and add your MongoDB connection string:

env
Copy code
MONGODB_CONN_STRING=your_mongodb_connection_string
Initialize a Git repository:

sh
Copy code
git init
Create a .gitignore file with the following contents:

plaintext
Copy code
node_modules
.env
Running the Server
Start the server:

sh
Copy code
npm start
The server will be running on http://localhost:3000.

API Endpoints
POST /api/listings: Add a new listing.
GET /api/listings: Get all listings with pagination and optional filtering by name.
GET /api/listings/:id: Get a specific listing by ID.
PUT /api/listings/:id: Update a specific listing by ID.
DELETE /api/listings/:id: Delete a specific listing by ID.
Example Usage
Adding a New Listing

sh
Copy code
curl -X POST http://localhost:3000/api/listings \
-H "Content-Type: application/json" \
-d '{"name": "New Listing", "description": "A beautiful place to stay.", "number_of_reviews": 10}'
Getting Listings

sh
Copy code
curl http://localhost:3000/api/listings?page=1&perPage=5
Getting a Listing by ID

sh
Copy code
curl http://localhost:3000/api/listings/your_listing_id
Updating a Listing

sh
Copy code
curl -X PUT http://localhost:3000/api/listings/your_listing_id \
-H "Content-Type: application/json" \
-d '{"name": "Updated Listing", "description": "An updated description.", "number_of_reviews": 15}'
Deleting a Listing

sh
Copy code
curl -X DELETE http://localhost:3000/api/listings/your_listing_id
Deployment
Deploy the application to Cyclic by following the instructions in the "Getting Started with Cyclic" guide from WEB322.

Set the MONGODB_CONN_STRING environment variable in Cyclic to match the one in your .env file.

License
This project is licensed under the MIT License.

Acknowledgments
This project was developed as part of the WEB422 course at Seneca Polytechnic.
Author
Your Name
Your Student ID
Date: YYYY-MM-DD
Published URL
Your Cyclic Deployment URL
