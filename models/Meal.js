const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  name: {
    type: String
  },
  calories: {
    type: String
  },
  protein: {
    type: String
  },
  carbohydrate: {
    type: String
  },
  fat: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Meal = mongoose.model('meal', MealSchema);
