import express from 'express';
const route = express.Router();


    route.get('/login',(req,res) => {
        res.render('login')
        })
        route.get('/google',(req,res) => {
            res.send('login with google')
            })
            route.get('/logout',(req,res) => {
                res.send('login out')
                })
export default route;