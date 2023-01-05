const express = require('express');

const gethome = (req, res) => {
    try{
        res.status(200).render('home');
    } catch(err){
        res.status(404).send('Error 404: Page not found.');
    }
}

const getlevels = (req, res) => {
    try{
        res.status(200).render('levels');
    } catch(err){
        res.status(404).send('Error 404: Page not found.');
    }
}

const getverifycode = (req, res) => {
    try{
        res.status(200).render('levels/level1/verifycode');
    } catch(err){
        res.status(404).send('Error 404: Page not found.');
    }
}


module.exports= {
    gethome,
    getlevels,
    getverifycode,
}