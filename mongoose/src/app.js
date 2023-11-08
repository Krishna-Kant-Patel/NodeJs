const mongoose = require('mongoose');

// Replace 'mydatabase' with your actual MongoDB database name
const dbName = 'krishna';

// Define the MongoDB connection URL
const mongoURI = `mongodb://localhost:27017/${dbName}`;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event handlers for MongoDB connection
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');

  // Perform database operations here

  // Close the connection when you're done
  // mongoose.connection.close();
});
