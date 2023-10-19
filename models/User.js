import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
     username: {type: String, require: true, unique: true},
     email: {type: String, require: true, unique: true},
     password: {type: String, require: true}
   });


   userSchema.pre('save', async function (next) {
     if (!this.isModified('password')) {
       return next();
     }
     const saltRounds = 10;
     this.password = await bcrypt.hash(this.password, saltRounds);
     next();
   });

const User = mongoose.model('User', userSchema)
export default User;   