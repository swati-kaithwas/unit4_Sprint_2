// name
// location
const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");

const theratresSchema = new Schema(
  {
      name:{type: String,required: true},
    location: { type: String, required: true }
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);




module.exports = model("theatres", theatresSchema); 
