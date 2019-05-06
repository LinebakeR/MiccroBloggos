const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require("cors");


const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(cors());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/tickets', require('./routes/api/tickets'));


const port = process.env.PORT || 4242;

app.listen(port, () => console.log(`Server started on port ${port}`));