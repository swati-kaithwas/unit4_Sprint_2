// show ( references the shows collection )







const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");

const showSchema = new Schema(
  {
      
  show: [{ type: String, required: true }],
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



module.exports = model("show", showSchema); 