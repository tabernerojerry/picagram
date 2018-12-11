import mongoose from "mongoose";
import argon2 from "argon2";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email is required!"]
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, "Firstname is required!"]
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Lastname is required!"]
  },
  password: {
    type: String,
    min: 6,
    required: [true, "Password is required!"]
  }
});

UserSchema.pre("save", async function() {
  if (this.isModified("password")) {
    this.password = await argon2.hash(this.password, { type: argon2.argon2id });
  }
});

export default mongoose.model("User", UserSchema);
