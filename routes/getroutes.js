const express = require('express');
const routes = express.Router();

const getpages = require('../controlers/getpages');

routes.get('/', getpages.gethome);
routes.get('/levels', getpages.getlevels);
routes.get('/levels/verifycode', getpages.getverifycode);



module.exports = routes;