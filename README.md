# L2B2-Frontend-Path-Assignment-6-Server-Starter-Pack

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run dev`.

## Configuration:

- Environment Variables:
  - `PORT`: Port number the server listens on. Default: 3000
  - `MONGODB_URI`: URI for MongoDB database.
  - `JWT_SECRET`: Secret key for JWT token generation.
  - `EXPIRES_IN`: Token expiration time.

## Usage:

- API Endpoints:

  - POST `/api/auth/login`

    - Description: Authenticates user and returns a JWT token.
    - Request:
      ```json
      {
        "email": "example@email.com",
        "password": "password"
      }
      ```
    - Response:
      ```json
      {
        "success": true,
        "message": "User registered successfully"
      }
      ```

  - POST `/api/auth/register`
    - Description: Registers a new user.
    - Request:
      ```json
      {
        "name": "John",
        "email": "example@email.com",
        "password": "password"
      }
      ```
    - Response:
      ```json
      {
        "success": true,
        "message": "Login successful",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoMkBleGFtcGxlLmNvbSIsImlhdCI6MTcwNzg1MDYyMSwiZXhwIjoxNzA3OTM3MDIxfQ.7EahSgmPLPNuZ_T9ok-B6TayWCJVdxPzi_Nx4UfrhvY"
      }
      ```

## Dependencies:

- `bcrypt`: Library for hashing passwords.
- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from .env file.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JWT tokens.
- `mongodb`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.

Food Distribution and Supplies Management System - Backend
This repository contains the backend implementation for the Food Distribution and Supplies Management System. The backend is developed using Node.js with Express.js and interacts with a MongoDB database to handle user authentication, product management, volunteer registration, testimonials, and community data.

Technologies Used
Node.js
Express.js
MongoDB
bcrypt
jsonwebtoken
cors
Project Structure
index.js: Entry point for the backend server.
middleware: Contains middleware functions for handling authentication and request parsing.
routes: Defines the API endpoints for user registration, login, product management, volunteer registration, testimonials, and community data.
utils: Houses utility functions used across the project.
Setup Instructions
Clone the repository: git clone <repository-url>
Navigate to the project directory: cd food-distribution-backend
Install dependencies: npm install
Set up environment variables by creating a .env file and configuring the following variables:
PORT: Port number for the server (default is 5000).
MONGODB_URI: MongoDB connection URI.
JWT_SECRET: Secret key for JWT token generation.
EXPIRES_IN: Expiration time for JWT tokens.
Start the server: npm start
API Endpoints
POST /api/v1/register: User registration endpoint.
POST /api/v1/login: User login endpoint.
POST /api/v1/products: Add a new product.
GET /api/v1/products: Get all products.
GET /api/v1/products/:id: Get a single product by ID.
PUT /api/v1/products/:id: Update a product by ID.
DELETE /api/v1/products/:id: Delete a product by ID.
POST /api/v1/volunteer: Register as a volunteer.
GET /api/v1/volunteer: Get all volunteers.
POST /api/v1/testimonial: Add a new testimonial.
GET /api/v1/testimonial: Get all testimonials.
POST /api/v1/community: Add a new community entry.
GET /api/v1/community: Get all community entries.
