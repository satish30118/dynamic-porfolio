const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      reuired: true,
    },
    image:{
      type:String,
    },
    occupation:{
      type:String,
      trim :true,
    },
    description:{
      type:String,
      trim :true,
    },
    resumeLink:{
      type:String,
    },
    bio:{
      type:String,
    }
  },
  { timestamps: true }
);

const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;
