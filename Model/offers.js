const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const offerSchema = new Schema({
  carousel: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("offers", offerSchema, "offers");
