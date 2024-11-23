const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Work', 'Personal', 'Study', 'Shopping', 'Health',
      'Finance', 'Travel', 'Projects', 'Goals', 'Ideas',
      'Reminders', 'Meetings', 'Events', 'Books', 'Movies',
      'Music', 'Recipes', 'Quotes', 'Journal', 'Others'
    ],
    default: 'Others'
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
noteSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
  });
  
  module.exports = mongoose.model('Note', noteSchema);