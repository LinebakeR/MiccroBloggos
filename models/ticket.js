const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Posts schema
const TicketSchema = new Schema ({
    content: {
        type: String,
    },
    userId: {
        type: String
    }
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);