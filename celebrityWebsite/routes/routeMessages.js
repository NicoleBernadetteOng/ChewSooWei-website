"use strict";

const messageController = require('../controllers/messageController');

function routeMessages(app) {

    app.route('/message')
        .get(messageController.getAllMessages)
        .post(messageController.addMessage);
        
    //Colon means custom value, can edit, request.params.id
    app.route('/message/:message_id')
        .get(messageController.getMessageById)
        //.delete(messageController.deleteMessage);
    
    app.route('/messageBySubject/:subject')
        .get(messageController.getMessageBySubject);
    
}

module.exports = { routeMessages };
