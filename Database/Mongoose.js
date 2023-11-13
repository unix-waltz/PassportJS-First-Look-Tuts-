import mongoose from "mongoose";
const LINK = "mongodb://localhost:27017/passportJS_Oauth20" 
mongoose.connect(LINK)
export default mongoose;