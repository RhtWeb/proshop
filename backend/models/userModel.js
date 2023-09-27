import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    next();
  }
  this.password = await bcrypt.hash(this.password, process.env.BCRYPT_SALT);
  next();
});

userSchema.methods.matchPassword = (password) => {
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;