import env from 'dotenv';
import userModel from './../Model/UserModel.js'
env.config()
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
export default passport.use(
    new GoogleStrategy({
clientID: process.env.GOOGLE_CLIENT_ID,
clientSecret: process.env.GOOGLE_CLIENT_SECRET,
callbackURL: "/auth/google/redirect"
    },(accesToken,refreshToken,profileInformation,done) => {
     const exist = async (target,username) => {
const result = await userModel.findOne({googleid : target})
if(result) return console.log(`user is exist : ${result}`);
new userModel({
    username: username,
        googleid: target
 }).save().then(newUser => {
    console.log(`new user created : ${newUser}`)
 });
     }
     exist(profileInformation.id, profileInformation.displayName);    
    })
    );