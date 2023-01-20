const express = require('express'); 
const user = require('../models/User');
const router = express.Router();


//Create a user using : post "/api/auth/". dosent require auth

router.get('/', (req, res)=>{
  console.log(req.body);
  const user= user (req.body);
  user.save()
  res.send(req.body);
})

module.exports = router