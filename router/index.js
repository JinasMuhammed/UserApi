const express = require('express');
const userRoute = express.Router();

const UserLogin = require('../model/userlogin.model');
const UserInfo = require('../model/userinfo.model');
const UserStatus = require('../model/userstatus.model');

userRoute.route('/signup').post((req, res) => {
  let userData = new UserLogin(req.body);
  console.log(userData);
  if (userData) {
    UserLogin.find({ user_email: userData.user_email }, (err, data) => {
      if (Object.keys(data).length == 0) {
        userData
          .save()
          .then(obj => {
            res.status(200).json({ message: 'User registered Successfully' });
          })
          .catch(err => {
            res.status(200).json({ message: 'Error registering user' });
          });
      } else {
        res.status(200).json({ message: 'user alerady exists' });
      }
    });
  }
});

userRoute.route('/login').post((req, res) => {
  let user = req.body.user_email;
  let pass = req.body.user_password;

  UserLogin.find({ user_email: user }, (err, data) => {
    if (Object.keys(data).length == 0) {
      res.status(200).json({ message: 'No User found' });
    } else {
      let userinfo = data;

      if (
        user === userinfo[0].user_email &&
        pass === userinfo[0].user_password
      ) {
        //res.cookie('username', user, {expire: 360000 + Date.now() });
        res
          .status(200)
          .json({ login_status: true, message: 'Successfully login' });
      } else {
        res.status(200).json({
          login_status: false,
          message: 'Check username and password'
        });
      }
    }
  });
});

userRoute.route('/userlogin').get(function(req, res) {
  UserLogin.find(function(err, data) {
    if (data) {
      res.json(data);
    } else {
      res.status(200).json({ message: 'no user data found' });
    }
  });
});

userRoute.route('/deleteuser/:id').delete(function(req, res) {
  let id = req.params.id;

  UserLogin.findByIdAndDelete({ _id: id }, function(err, data) {
    if (data) {
      res.status(200).json({ message: 'User successfully deleted' });
    } else {
      res.status(200).json({ message: 'cont delete the user ' });
    }
  });
});

module.exports = userRoute;
