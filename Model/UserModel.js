import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    username : String,
    googleid: String,
})
const user = mongoose.model('User', Schema)
export default user