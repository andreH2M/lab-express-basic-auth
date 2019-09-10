'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

const User = require('./../models/user');
const bcrypt = require('bcryptjs');

router.post('/sign-up', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username,password);
  // res.redirect ('private');
  bcrypt.hash(password, 10)
  .then(hash => {
    return User.create ({
      username, 
      passwordHash: hash
    });

  })
  .then (user => {
    req.session.user = {
      _iD: user._id
    }
  .catch(error => {
    console.log("There was an error in the sign up process");
  });

  
  });


 

});

router.get('/private', (req, res, next) => {
  res.render ('private');
});

router.post('/sign-out',(req, res, next) =>{
  req.session.destroy();
  res.redirect('/');
})


module.exports = router;