const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Remove the dateOfBirth field as per your earlier request
  userType: {
    type: String,
    required: true,
    enum: ['student', 'teacher'] // Only allow these two user types
  }
}, { timestamps: true }); // Add timestamps to record createdAt and updatedAt

// Create the model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
