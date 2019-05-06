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
    const {username, email, password} = req.body;
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
            
            const newUser = new User({username, email, password});

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) 
                        throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            jwt.sign({
                                id: user.id,
                                username: user.username,
                                email: user.email

                            }, config.get('jwtSecret'), {
                                expiresIn: 3600
                            }, (err, token) => {
                                if (err) 
                                    throw err;
                                res.json({
                                    token,
                                    
                                });
                                console.log(token);
                            })
                        });
                })
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
    let userId = { _id: req.user.id }
    let update = {username: req.body.username, email: req.body.email}
    let option = {returnNewDocument: true}
    console.log('coucou1', req.user);
    User.findOneAndUpdate(userId, { $set: update }, option, function(
    err,
    user
    ) {
        console.log('coucou2');
      if (err) {
          console.log("[", err, "]")
        res.status(400);
        res.send(err);
        return;
      }
      res.send({ message: "User Udpated successfully!", user });
    },
    )
});


module.exports = router;