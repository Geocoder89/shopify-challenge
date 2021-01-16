const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },

  cloudinary_id: {
    type: String,
  },

  multiple_image: {
    type: [],
  },
});

module.exports = mongoose.model("User", userSchema);
