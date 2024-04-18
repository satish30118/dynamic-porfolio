const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema(
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
    message: {
      type: String,
      reuired: true,
    },
  },
  { timestamps: true }
);

const contactFormModel = new mongoose.model("ContactForm", contactFormSchema);


const contactLinksSchema = new mongoose.Schema(
    {
      links:[{
        title:{
            type:"String",
            required:true,
        },
        link:{
            type:"String",
            required:true,
        }
      }]
    },
    { timestamps: true }
  );
  const contactLinksModel = new mongoose.model("ContactLinks", contactLinksSchema);

module.exports = {contactFormModel, contactLinksModel};
