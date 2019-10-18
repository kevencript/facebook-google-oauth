const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String },
  first_name: { type: String },
  family_name: { type: String },
  email: { type: String },
  picture: { type: String }
});

mongoose.model("users", userSchema);
