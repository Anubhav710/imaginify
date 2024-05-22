import { Schema, model, models } from "mongoose";

interface User {
  clerkId?: {
    type: String;
    required: true;
    unique: true;
  }; // Optional property using a question mark (?)
  email: {
    type: String;
    required: true;
    unique: true;
  };
  username?: {
    type: String;
    required: true;
    unique: true;
  }; // Optional property using a question mark (?)
  photo?: {
    type: String;
    required: true;
    unique: true;
  }; // Optional property using a question mark (?)
  firstName?: {
    type: String;
  }; // Optional property using a question mark (?)
  lastName?: {
    type: String;
  }; // Optional property using a question mark (?)
  planId?: {
    type: String;
    default: Number;
  }; // Optional property using a question mark (?)
  creditBalance?: {
    type: String;
    default: Number;
  }; // Optional property using a question mark (?)
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: Number, default: 1 },
  craditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
