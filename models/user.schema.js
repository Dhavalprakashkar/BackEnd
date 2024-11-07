import { Schema, model } from "mongoose";

const UserModel = new Schema({
    name: String,
    email : String,
    password: String,
    age: Number,
});

const User = model("User", UserModel);

export default User;