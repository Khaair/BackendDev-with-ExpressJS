const express = require("express");
const router = express.Router();


router.get("/show",(req, res) => {

    res.send({"Name": "lll","Age" : 24})
  
});



router.post("/save",(req, res) => {

    console.log(req.body);

    res.send({"Name": "lll","Age" : 24,"Class": "Ten"})
  
});




module.exports = router;