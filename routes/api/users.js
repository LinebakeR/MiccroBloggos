const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

// User Model
const User = require('../../models/User');

// @route   POST api/users @desc    Register new user @access  Public
router.post('/', (req, res) => {
    const {username, email, password, role} = req.body;
    // Simple validation
    if (!username || !email || !password) {
        return res
            .status(400)
            .json({msg: 'Please enter all fields'});
    }

    // Check for existing user
    User
        .findOne({email})
        .then(user => {
            if (user) 
                return res.status(400).json({msg: 'User already exists'});
            
            const newUser = new User({username, email, password, role});

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) 
                        throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            res.send('User registered') 
                        })
                    });
            })
        })
});

router.get('/', (req, res) => {
    User.find({})
    .then(users => {
        console.log(users);
        res.send(users);
    })
});

router.put('/edit', auth, (req, res) => {
    //console.log(req)
    let userId = { _id: req.user.id }
    let update = {username: req.body.username, email: req.body.email}
    let option = {returnNewDocument: true}
    User.findOneAndUpdate(userId, { $set: update }, option, function(
    err,
    user
    ) {
      if (err) {
          console.log(err)
        res.status(400);
        res.send(err);
        return;
      }
      res.send({ message: "User Udpated successfully!", user });
    },
    )
});

router.delete('/delete', auth, (req, res) =>{
     let userId = {id: req.user.id}
     console.log(req)
        User.findByIdAndRemove(userId, function(err, res) {
            if(err){
                res.status(400);
                res.send(err);
                return;
            }
            res.send({message: ' User deleted'})
        })
});
        


module.exports = router;