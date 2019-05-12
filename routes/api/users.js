const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// User Model
const User = require('../../models/User');

// @route   POST api/users @desc    Register new user @access  Public
router.post('/', (req, res) => {
  const { username, email, password, role } = req.body;
  // Simple validation
  if (!username || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: 'User already exists' });

    const newUser = new User({ username, email, password, role });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          res.send('User registered');
        });
      });
    });
  });
});

router.get('/', (req, res) => {
  User.find({}).then(users => {
    res.send(users);
  });
});

router.put('/edit', auth, (req, res) => {
  let userId = { _id: req.user.id };
  let update = { username: req.body.username, email: req.body.email };
  let option = { returnNewDocument: true };
  User.findOneAndUpdate(userId, { $set: update }, option, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400);
      res.send(err);
      return;
    }
    res.send({ message: 'User Udpated successfully!', user });
  });
});

router.delete('/delete', auth, async (req, res) => {
  try{
    await User.findOneAndRemove({_id: req.user.id})
    res.json({message: 'User deleted'})
  } catch(err){
    console.log(err)
    return res.status(500);
  }
})

//Route PUT api/follow/:id
//follow a user
//Acces privé
router.put('/follow/:id', auth, (req, res) => {

  try {
    let user =  User.findById(req.params.id);
    let isFollow =  User.findById(req.user.id);
if(user.followers){
  console.log('dans le if USER')
    if (
      user.followers.filter(follow => follow.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: 'User already followed' });
    }
    user.followers.unshift({ user: req.user.id });
  } else{
    console.log('dans le else USER')

    user.followers = [{ user: req.user.id }];
  } 
  if(isFollow.following){
    console.log('dans le if FOLLOW')

    isFollow.following.unshift({ user: req.params.id });
  } else{
    console.log('dans le else FOLLOW')

    isFollow.following = [{ user: req.params.id }];
  }
     User.findByIdAndUpdate(user, {$set: user }, function(err, user) {
      if (err) {
        console.log(err);
        return;
      }
    });
     
     User.findByIdAndUpdate(isFollow, {$set: isFollow}, function(err, user) {
      if (err) {
        console.log(err);
        return;
      }
    });


    res
      .status(200)
      .json({ user: user.followers, following: isFollow.following });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Route PUT api/unfollow/:id
//unfollow a user
//Acces privé
router.put('/unfollow/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const isUnfollow = await User.findById(req.user.id);

    if (
      user.followers.filter(follow => follow.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'User is not followed' });
    }
    const removeFollow = user.followers
      .map(follow => follow.user.toString())
      .indexOf(req.user.id);

    const removeFollowing = isUnfollow.following
      .map(follower => follower.isUnfollow)
      .indexOf(req.params.id);
    user.followers.splice(removeFollow, 1);
    isUnfollow.following.splice(removeFollowing, 1);

    await user.save();
    await isUnfollow.save();

    res
      .status(200)
      .json({ user: user.followers, isUnfollow: isUnfollow.following });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
