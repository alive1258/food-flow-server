const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors({ origin: 'http://localhost:5173',credentials:true }))
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// MongoDB Connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // users collection
    const db = client.db("assignment");
    const collection = db.collection("users");

    // productsCollection

    const productsCollection = client.db("assignment").collection("products");

    // volunteerCollection
    const volunteerCollection = client
      .db("assignment")
      .collection("volunteers");

    // testimonialCollection
    const testimonialCollection = client
      .db("assignment")
      .collection("testimonials");

    // communityCollection
    const communityCollection = client
      .db("assignment")
      .collection("communities");

    // User Registration
    app.post("/api/v1/register", async (req, res) => {
      const { name, email, password } = req.body;

      // Check if email already exists
      const existingUser = await collection.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists",
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into the database
      await collection.insertOne({ name, email, password: hashedPassword });

      res.status(201).json({
        success: true,
        message: "User registered successfully",
      });
    });

    // User Login
    app.post("/api/v1/login", async (req, res) => {
      const { email, password } = req.body;

      // Find user by email
      const user = await collection.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Compare hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Generate JWT token
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPIRES_IN,
      });

      res.json({
        success: true,
        message: "Login successful",
        email: user.email,
        token,
      });
    });

    // ==============================================================
    // WRITE YOUR CODE HERE
    // ==============================================================

    // users

    // addProduct

    app.post("/api/v1/products", async (req, res) => {
      const addProduct = req.body;
      const result = await productsCollection.insertOne(addProduct);
      res.send(result);
    });
    // get product
    app.get("/api/v1/products", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });
    // singleProducts
    app.get("/api/v1/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.findOne(query);
      res.send(result);
    });

    // update
    app.put("/api/v1/products/:id", async (req, res) => {
      const id = req.params.id;
      const updatedProduct = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const coffee = {
        $set: {
          title: updatedProduct.title,
          quantity: updatedProduct.quantity,
          category: updatedProduct.category,
        },
      };
      const result = await productsCollection.updateOne(
        filter,
        coffee,
        options
      );

      res.send(result);
    });
    //delete

    app.delete("/api/v1/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });

    // post volunteer
    app.post("/api/v1/volunteer", async (req, res) => {
      const addVolunteer = req.body;
      const result = await volunteerCollection.insertOne(addVolunteer);
      res.send(result);
    });
    // get volunteer
    app.get("/api/v1/volunteer", async (req, res) => {
      const result = await volunteerCollection.find().toArray();
      res.send(result);
    });

    // testimonial
    app.post("/api/v1/testimonial", async (req, res) => {
      const addTestimonial = req.body;
      const result = await testimonialCollection.insertOne(addTestimonial);
      res.send(result);
    });
    // get community
    app.get("/api/v1/community", async (req, res) => {
      const result = await communityCollection.find().toArray();
      res.send(result);
    });
    // testimonial
    app.post("/api/v1/community", async (req, res) => {
      const addCommunity = req.body;
      const result = await communityCollection.insertOne(addCommunity);
      res.send(result);
    });
    // get testimonial
    app.get("/api/v1/testimonial", async (req, res) => {
      const result = await testimonialCollection.find().toArray();
      res.send(result);
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } finally {
  }
}

run().catch(console.dir);

// Test route
app.get("/", (req, res) => {
  const serverStatus = {
    message: "Server is running smoothly",
    timestamp: new Date(),
  };
  res.json(serverStatus);
});
