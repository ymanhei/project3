const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

userSchema.methods.validPassword = function( pwd ) {
 
    return ( this.password === pwd );
};

const User = mongoose.model("User", userSchema);


module.exports = User;