class Message {
    //(message_id, name, email, subject, booked_date, submission_date, message_details)
    constructor(message_id, name, email, subject, booked_date, submission_date, message_details) {
        this.message_id = message_id;
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.booked_date = booked_date;
        this.submission_date = submission_date;
        this.message_details = message_details;
    }
    
    //GET
    getMessageId() {
        return this.message_id;
    }
    
    getName() {
        return this.name;
    }
    
    getEmail() {
        return this.email;
    }
    
    getSubject() {
        return this.subject;
    }
    
    getBookedDate() {
        return this.booked_date;
    }

    getSubmissionDate() {
        return this.submission_date;
    }

    getMessageDetails() {
        return this.message_details;
    }
    
    //SET
    setMessageId(message_id) {
        this.message_id = message_id;
    }  
        
    setName(name) {
        this.name = name;
    }
    
    setEmail(email) {
        this.email = email;
    }
    
    setSubject(subject) {
        this.subject = subject;
    }
    
    setBookedDate(booked_date) {
        this.booked_date = booked_date;
    }

    setSubmissionDate(submission_date) {
        this.submission_date = submission_date;
    }

    setMessageDetails(message_details) {
        this.message_details = message_details;
    }
  
}

module.exports = Message;