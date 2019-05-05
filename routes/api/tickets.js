const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//Ticket Model
const Ticket = require('../../models/ticket');

//@route GET api/ticket/:id
//@desc get a post
//@access public
router.get("/:id", (req, res) => {
    const id = req.params.id;
    Ticket.findById(id, function (err, docs) {
        res.json(docs)
    })
});


//@route GET api/tickets
//@desc get all posts
//@access public
router.get('/', (req, res) => {
    Ticket.find()
        .then(tickets => res.json(tickets))
});

router.get('/user/:userId', (req, res) => {
    Ticket.find({userId: req.params.userId})
        .then(tickets => res.json(tickets));
});

//@route POST api/tickets
//@desc Creat a post
//@access private
router.post('/:userId', (req, res) => {
    let ticket = new Ticket({
        title: req.body.title,
        content: req.body.content,
        userId: req.params.userId
    });
    ticket.save()
        .then(ticket => {
            res.status(200).json({'ticket': 'ticket added successfully'});
        })
        .catch(err => {
            console.log(err);
            res.status(400).send('adding new ticket failed');
        });
});

//@route DELETE api/tickets/:id
//@desc Delete a post
//@access private
router.delete('/:id', (req, res) => {
    Ticket.findById(req.params.id)
        .then(ticket => ticket.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
