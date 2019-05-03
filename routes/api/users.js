const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User Model
const User = require('../../models/User');

// @route   POST api/users @desc    Register new user @access  Public
router.post('/', (req, res) => {
<<<<<<< HEAD
    const {username, email, password} = req.body;

    // Simple validation
    if (!username || !email || !password) {
        return res
            .status(400)
            .json({msg: 'Please enter all fields'});
=======
    const { username, email, password } = req.body;

    // Simple validation
    if(!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
>>>>>>> 959fe8f1fe0a86b8957ac31f33ad8c7a4c2e9089
    }

    // Check for existing user
    User
        .findOne({email})
        .then(user => {
<<<<<<< HEAD
            if (user) 
                return res.status(400).json({msg: 'User already exists'});
            
            const newUser = new User({username, email, password});
=======
            if(user) return res.status(400).json({ msg: 'User already exists' });

            const newUser = new User({
                username,
                email,
                password
            });
>>>>>>> 959fe8f1fe0a86b8957ac31f33ad8c7a4c2e9089

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) 
                        throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
<<<<<<< HEAD
                            jwt.sign({
                                id: user.id
                            }, config.get('jwtSecret'), {
                                expiresIn: 3600
                            }, (err, token) => {
                                if (err) 
                                    throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        username: user.username,
                                        email: user.email
                                    }
                                });
                            })
=======
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            username: user.username,
                                            email: user.email
                                        }
                                    });
                                }
                            )
>>>>>>> 959fe8f1fe0a86b8957ac31f33ad8c7a4c2e9089
                        });
                })
            })
        })
});

module.exports = router;