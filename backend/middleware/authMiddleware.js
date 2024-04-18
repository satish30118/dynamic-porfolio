const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const adminVerification = async (req, res, next) => {
  const KEY = process.env.JWT_SECRET_KEY;
  try {
    const decode = jwt.verify(req.headers.authorization, KEY);
    // req.user = decode;
    if(!decode) {
      res.status(400).json({
        success:false,
        message:"You are not admin"
      })
    }
    next();
  } catch (error) {
    console.log(`ERROR IN AUTHMIDDLEWARE:- ${error}`);
  }
};



module.exports = {adminVerification};
