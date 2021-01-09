"use strict";

const feedbackController = require('../controllers/feedbackController');

function routeFeedback(app) {

    app.route('/feedback')
        .get(feedbackController.getAllFeedback)
        .post(feedbackController.addFeedback);
        
    //Colon means custom value, can edit, request.params.id
    app.route('/feedback/:feedback_id')
        .get(feedbackController.getFeedbackById)
        //.delete(messageController.deleteMessage);
    
    app.route('/feedbackByTitle/:feedback')
        .get(feedbackController.getFeedbackByTitle);
    
}

module.exports = { routeFeedback };
