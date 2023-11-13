import env from 'dotenv';
import mongoose from 'mongoose';
import MongoCn from './Database/Mongoose.js'
env.config()
import express from 'express';
const app = express();
import AuthRoutes from "./routes/auth-routes.js"
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('home')
    })

app.use('/auth',AuthRoutes)
app.listen(process.env.LOCAL_APP_PORT,() => {
    console.log(`listening on ${process.env.LOCAL_APP_PORT}`)
});