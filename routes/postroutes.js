const express = require('express');
const routes = express.Router();

const postpages = require('../controlers/postpages');

routes.post('/levels/verifycode', postpages.postverifycode);


module.exports = routes;