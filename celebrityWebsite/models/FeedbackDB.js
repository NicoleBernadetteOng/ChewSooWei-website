"use strict";

var db = require('../db-connection'); //reference of db-connection.js

class FeedbackDB {

    getAllFeedback(callback) {
        var sql = "SELECT * FROM feedback";

        db.query(sql, callback);
    }


    searchFeedbackByTitle(title, callback) {
        var sql = "SELECT * FROM feedback WHERE title LIKE ?";

        db.query(sql, [ '%' + title + '%'], callback);
    }


    getFeedbackByEmail(email, callback) {
        var sql = "SELECT * FROM feedback WHERE email = ?";

        db.query(sql, [email], callback);
    }



    //Add feedback
    addFeedback(feedback, callback)
    {
        var sql = "INSERT INTO feedback (feedback_id, name, email, title, submission_date, feedback_details) VALUES (?, ?, ?, ?, ?, ?)";

        db.query(sql, [feedback.getFeedbackId(), feedback.getName(), feedback.getEmail(), feedback.getTitle(), feedback.getSubmissionDate(), feedback.getFeedbackDetails()], callback);
    }


    //Delete message 
    deleteFeedback(feedback_id, callback) {
        var sql = "DELETE FROM feedback WHERE feedback_id = ?";
        
        return db.query(sql, feedback_id, callback);
    }

}

module.exports = FeedbackDB;


