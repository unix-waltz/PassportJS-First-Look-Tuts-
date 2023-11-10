import express from 'express';
const app = express();
import AuthRoutes from "./routes/auth-routes.js"
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('home')
    })

app.use('/auth',AuthRoutes)
app.listen(3001);