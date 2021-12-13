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

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    return next();
  });
});

userSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);

      return resolve(same);
    });
  });
};

module.exports = model("theatres", theatresSchema); 
