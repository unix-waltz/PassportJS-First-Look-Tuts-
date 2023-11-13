import express from 'express';
const route = express.Router();
import passport from 'passport';
import passportSetup from './../config/passport-setup.js';
    route.get('/login',(req,res) => {
        res.render('login')
        })
        route.get('/google',passport.authenticate('google',{
            scope: ['profile'] 
        }))
            route.get('/logout',(req,res) => {
                res.send('login out')
                })
                route.get('/google/redirect',passport.authenticate('google'),(req,res) => {
res.send('login succes')
                })
export default route;