const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image:{
        type:String,
    },
    position: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      reuired: true,
    },
  },
  { timestamps: true }
);

const testimonialModel = new mongoose.model("Testimonial", testimonialSchema);
module.exports = testimonialModel;
