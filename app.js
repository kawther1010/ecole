const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


const app = express();

app.set('view engine', 'ejs' );
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//import Routes
const getRoutes = require('./routes/getroutes');
const postRoutes = require('./routes/postroutes');

//Route middlewars
app.use('/', getRoutes);
app.use('/', postRoutes);

app.listen(8080, () => {
    console.log('running!');
});
