"use strict";

var db = require('../db-connection'); //reference of db-connection.js

class MessageDB {

    getAllMessages(callback) {
        var sql = "SELECT * FROM message";

        db.query(sql, callback);
    }


    searchMessageBySubject(subject, callback) {
        var sql = "SELECT * FROM message WHERE subject LIKE ?";

        db.query(sql, [ '%' + subject + '%'], callback);
    }


    getMessageByEmail(email, callback) {
        var sql = "SELECT * FROM message WHERE email = ?";

        db.query(sql, [email], callback);
    }


    //Add message
    addMessage(message, callback)
    {
        var sql = "INSERT INTO message (message_id, name, email, subject, booked_date, submission_date, message_details) VALUES (?, ?, ?, ?, ?, ?, ?)";

        db.query(sql, [message.getMessageId(), message.getName(), message.getEmail(), message.getSubject(), message.getBookedDate(), message.getSubmissionDate(), message.getMessageDetails()], callback);
    }

    //Delete message 
    deleteMessage(message_id, callback) {
        var sql = "DELETE FROM message WHERE message_id = ?";
        
        return db.query(sql, message_id, callback);
    }

}

module.exports = MessageDB;


