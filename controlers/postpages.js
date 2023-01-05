const express= require("express");

const postverifycode = (req, res)=> {
    try{
        const passcodeReq= req.body.passcode;
        const passcode= "Level1";
        if(passcode== passcodeReq){
            res.status(200).render("levels/level1/modules")
        } else {
            res.status(200).send("wrong passcode");
        }
    } catch(err){
        console.log(err);
        res.status(404).send('Error 404: Page not found.');
    }

}

module.exports= {
    postverifycode,
}