const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Posts schema
const TicketSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    }
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);