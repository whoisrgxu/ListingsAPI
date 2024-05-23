# ListingsAPI

## Overview
This project is a simple Web API built with Node.js, Express, and MongoDB. It is designed to interact with the "listingsAndReviews" collection in the "sample_airbnb" database provided by MongoDB Atlas.

## Features
- Connect to a MongoDB Atlas database.
- Perform CRUD operations on the listings.
- Simple API endpoints to interact with the data.
- Middleware for CORS and JSON parsing.
- Environment configuration using dotenv.

## Setup Instructions

### Prerequisites
- Node.js
- npm
- MongoDB Atlas account

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/whoisrgxu/ListingsAPI
    cd listingsAPI
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```env
    MONGODB_CONN_STRING=your_mongodb_connection_string
    ```

4. Initialize a Git repository:
    ```sh
    git init
    ```

5. Create a `.gitignore` file with the following contents:
    ```plaintext
    node_modules
    .env
    ```

### Running the Server

1. Start the server:
    ```sh
    npm server
    ```

2. The server will be running on `http://localhost:8080`.

## API Endpoints

- **POST /api/listings**: Add a new listing.
- **GET /api/listings**: Get all listings with pagination and optional filtering by name.
- **GET /api/listings/:id**: Get a specific listing by ID.
- **PUT /api/listings/:id**: Update a specific listing by ID.
- **DELETE /api/listings/:id**: Delete a specific listing by ID.

### Example Usage

**Adding a New Listing**
```sh
curl -X POST http://localhost:8080/api/listings \
-H "Content-Type: application/json" 
-d '{"name": "New Listing", "description": "A beautiful place to stay.", "number_of_reviews": 10}
'
```
**Getting Listings** 
```sh
curl http://localhost:8080/api/listings?page=1&perPage=5
``` 
**Getting a Listing by ID**
```sh
curl http://localhost:8080/api/listings/your_listing_id 
```
**Updating a listing** 
```sh
curl -X PUT http://localhost:8080/api/listings/your_listing_id \
-H "Content-Type: application/json" \
-d '{"name": "New Listing", "description": "A beautiful place to stay.", "number_of_reviews": 10}'
=========
-d '{"name": "Updated Listing", "description": "An updated description.", "number_of_reviews": 15}'
```
**Deleting a listing** 
```sh
curl -X DELETE http://localhost:3000/api/listings/your_listing_id
```

