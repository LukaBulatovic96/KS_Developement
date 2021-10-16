const express = require('express');
const router = express.Router();
const bcrypt= require('bcryptjs');
const jwt = require ('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../models/User');

/*
* @route POST api/users/register
* @desc Register the User
* @ access Public
*/


router.post('/register',(req,res)=>{
  let {
     name,
     username,
     email,
     password,
     confirm_password,
     type
    } = req.body
    if(password !== confirm_password){
      return res.status(400).json({
          msg: `Passwords do not match. ${password} __ ${confirm_password}`
      });
    }
    //Check for the unique email
    User.findOne({
      username: username
    }).then(user =>{
      if(user){
        return res.status(400).json({
            msg:"Username is already taken."
        });
      }
    })
    //check for the unique email
    User.findOne({
      email: email
    }).then(user =>{
      if(user){
        return res.status(400).json({
            msg:"Email is already registered."
        });
      }
    });
    // The data is valid and now register the users
    let newUser = new User({
      name,
      username,
      password,
      email,
      type
    });
    //Hash the Password

    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(newUser.password, salt, (err,hash)=>{
        if(err) throw err;
        newUser.password= hash;
        newUser.save().then(user=>{
          return res.status(201).json({
            success:true,
            msg:"User is now registered"
          });
        });
      });
    });
});

/*
* @route POST api/users/login
* @desc Login  User
* @ access Public
*/

router.post('/login',(req,res)=>{
  User.findOne({username: req.body.username}).then(user=>{
    if(!user){
      return res.status(404).json({
        msg:"Username is not found",
        success:false
      });
    }
    // username exists
    bcrypt.compare(req.body.password, user.password).then(isMatch =>{
      if(isMatch){
        //User password is correct
        const payload = {
          _id: user._id,
          username:user.username,
          name: user.name,
          email: user.email
        }

        jwt.sign(payload, key, {
          expiresIn:  604800
        },(err,token)=>{
          res.status(200).json({
            success:true,
            user: user,
            token:`Bearer ${token}`,
            msg:"U are logged in"
          });
        });

      }else{
        return res.status(404).json({
          msg:"Incorrect password",
          success:false
        });
      }
    })
  });
});

/*
* @route POST api/users/profile
* @desc user data
* @ access Private
*/

//GetAll Users
router.get('/getAll',async (req,res)=>{
  User.find({}).then(users=>{
     return  res.status(200).json(users);
  });
});

//put VQ
router.put('/putVQ/:id', async(req, res) => {

    let vqData= {
      result:req.body.result,
      finished:req.body.finished,
      date: req.body.date
    }
    // Check for the existing name
    await User.findOne({
        _id: req.params.id
    }).then(async user => {
        if (user) {

          user.vqTest = vqData;
          user.save().then(user=>{
            return res.status(201).json({
                success: true,
                msg: "user saved."
            });
          })

        }else{
          return res.status(400).json({
              msg: "User doesn't exists."
          });
        }
    });
    // The data is valid and new we can register the user
});

router.get('/profile', passport.authenticate('jwt',{
  session:false
}), (req,res) => {
  return res.json({
    user:req.user
  });
});

// put test licnosti
router.put('/putTestLicnosti/:id', async(req, res) => {

  let {
      N1,
      N2,
      N3,
      N4,
      N5,
      N6,

      E1,
      E2,
      E3,
      E4,
      E5,
      E6,

      O1,
      O2,
      O3,
      O4,
      O5,
      O6,

      U1,
      U2,
      U3,
      U4,
      U5,
      U6,

      S1,
      S2,
      S3,
      S4,
      S5,
      S6,
      pol,
      date,
      userId,
      finished
   } = req.body;



    let testData= {
      N1,
      N2,
      N3,
      N4,
      N5,
      N6,

      E1,
      E2,
      E3,
      E4,
      E5,
      E6,

      O1,
      O2,
      O3,
      O4,
      O5,
      O6,

      U1,
      U2,
      U3,
      U4,
      U5,
      U6,

      S1,
      S2,
      S3,
      S4,
      S5,
      S6,
      pol,
      date,
      finished
    }
    // Check for the existing name
    await User.findOne({
        _id: req.params.id
    }).then(async user => {
        if (user) {

          user.testLicnosti = testData;
          user.save().then(user=>{
            return res.status(201).json({
                success: true,
                msg: "user saved."
            });
          })

        }else{
          return res.status(400).json({
              msg: "User doesn't exists."
          });
        }
    });
    // The data is valid and new we can register the user
});









module.exports = router;
