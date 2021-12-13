// timing
// movie ( references the movies collection )
// total_seats
// screen ( references the screens collection )






const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");

const screenSchema = new Schema(
  {
      timing:{type: String,required: true},
    threatre: [{ type: String, required: true }],
   
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

module.exports = model("screen", screenSchema); 