## BD Food Flow Dashboard

-Welcome to the BD Food Flow Dashboard ! This dashboard is designed to help you Food Distribution and Supplies Management System
This repository contains the backend implementation for the Food Distribution and Supplies Management System. The backend is developed using Node.js with Express.js and interacts with a MongoDB database to handle user authentication, product management, volunteer registration, testimonials, and community data.

## Technologies Used

- Node.js
- Express
- MongoDB
- bcrypt
- jsonwebtoken
- cors

## Layout Design

## Project Structure

`index.js:` Entry point for the backend server.

`middleware:` Contains middleware functions for handling authentication and request parsing.

`routes:` Defines the API endpoints for user registration, login, product management, volunteer registration, testimonials, and community

- POST `/api/auth/login`

  - Description: Authenticates user and returns a JWT token.

- POST `/api/auth/register`

  - Description: User registration endpoint.

- POST `/api/auth/products`

  - Description: Add a new product.

- GET `/api/auth/products`

  - Description: Get all product

- GET `/api/v1/products/:id:`

  - Description: Get a single product by ID.

- PUT `/api/v1/products/:id:`

  - Description: Update a product by ID

- DELETE `/api/v1/products/:id`

  - Description: Delete a product by ID.

- POST `/api/auth/volunteer`

  - Description: Add a new volunteer..

- GET `/api/auth/volunteer`

  - Description: Get all volunteers.

- POST `/api/auth/testimonial`

  - Description: Add a new testimonial

- GET `/api/auth/testimonial`

  - Description: Get all testimonials.

- POST `/api/auth/community`

  - Description: Add a new community

- GET `/api/auth/community`

  - Description: Get all community.

## Getting Started

To run the Fresh Market Dashboard locally:

## Setup and Usage

- `Clone the Repository:`

```js
git clone https://github.com/alive1258/food-flow-server.git

```

- `Navigate to Project Directory:`

```js
cd food-flow-server
```

- `Install Dependencies::`

```js
npm install
```

- `Start Development Server:`

```js
npm run dev
```

# Additional Information:

- Ensure that you have Node.js and npm installed on your machine before proceeding with the setup.

## -Please explore the codebase

Fresh Market Dashboard - Detailed Project Overview
