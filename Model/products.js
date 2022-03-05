const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
  isOffer: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("products", productSchema, "products");
