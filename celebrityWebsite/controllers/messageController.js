"use strict";

const Message = require('../models/Message');
const MessageDB = require('../models/MessageDB');

var messageDB = new MessageDB();

//Getting all messages
function getAllMessages(request, respond) {
    messageDB.getAllMessages(function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

//Getting the message by message_id
function getMessageById(request, respond) {
    messageDB.getMessageById(request.params.message_id, function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

//Getting the message by subject, like a search
function getMessageBySubject(request, respond) {
    classDB.getMessageBySubject(request.params.subject, function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

//Adding a message to the database 
function addMessage(request, respond) {

    //(message_id, name, email, subject, booked_date, submission_date, message_details) 
    var message = new Message(null, request.body.name, request.body.email, request.body.subject, request.body.booked_date, null, request.body.message_details);
    
    messageDB.addMessage(message, function(error,result) {         
        if (error) {
            respond.json(error);
        } else {              
          respond.json(result);
        }
    }); 
}
    
//Deleting the message in the database
function deleteMessage(request, respond) {
    messageDB.deleteMessage(request.params.message_id, function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

module.exports = { getAllMessages, getMessageById, getMessageBySubject, addMessage, deleteMessage };







