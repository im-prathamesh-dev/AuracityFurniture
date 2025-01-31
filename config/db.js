// MongoDB configuration file
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB URI (fallback to local if not defined in environment variables)
const mongoURI = process.env.MONGODB_URL || 'mongodb://localhost:27017/mydatabase';

// Making queries to DB strict (throw error when queries are invalid)
mongoose.set("strictQuery", true);

// Connecting to MongoDB
mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
})
.then(() => {
      console.log("MongoDB connected");
})
.catch((error) => {
      console.error("Failed to connect:", error.message);
});
