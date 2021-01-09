"use strict";

const Feedback = require('../models/Feedback');
const FeedbackDB = require('../models/FeedbackDB');

var feedbackDB = new FeedbackDB();

//Getting all feedback
function getAllFeedback(request, respond) {
    feedbackDB.getAllFeedback(function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

//Getting the feedback by feedback_id
function getFeedbackById(request, respond) {
    messageDB.getFeedbackById(request.params.feedback_id, function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

//Getting the feedback by title, like a search
function getFeedbackByTitle(request, respond) {
    feedbackDB.getFeedbackByTitle(request.params.title, function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

//Adding a message to the database 
function addFeedback(request, respond) {

    //(feedback_id, name, email, title, submission_date, feedback_details)
    var feedback = new Feedback(null, request.body.name, request.body.email, request.body.title, null, request.body.feedback_details);
    
    feedbackDB.addFeedback(feedback, function(error,result) {         
        if (error) {
            respond.json(error);
        } else {              
          respond.json(result);
        }
    }); 
}
    
//Deleting the message in the database
function deleteFeedback(request, respond) {
    feedbackDB.deleteFeedback(request.params.feedback_id, function(error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

module.exports = { getAllFeedback, getFeedbackById, getFeedbackByTitle, addFeedback, deleteFeedback };







