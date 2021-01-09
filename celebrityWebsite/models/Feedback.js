class Feedback {
    //(feedback_id, name, email, title, submission_date, feedback_details)
    constructor(feedback_id, name, email, title, submission_date, feedback_details) {
        this.feedback_id = feedback_id;
        this.name = name;
        this.email = email;
        this.title = title;
        this.submission_date = submission_date;
        this.feedback_details = feedback_details;
    }
    
    //GET
    getFeedbackId() {
        return this.feedback_id;
    }
    
    getName() {
        return this.name;
    }
    
    getEmail() {
        return this.email;
    }
    
    getTitle() {
        return this.title;
    }

    getSubmissionDate() {
        return this.submission_date;
    }

    getFeedbackDetails() {
        return this.feedback_details;
    }
    
    //SET
    setFeedbackId(feedback_id) {
        this.feedback_id = feedback_id;
    }  
        
    setName(name) {
        this.name = name;
    }
    
    setEmail(email) {
        this.email = email;
    }
    
    setTitle(title) {
        this.title = title;
    }
    
    setSubmissionDate(submission_date) {
        this.submission_date = submission_date;
    }

    setFeedbackDetails(feedback_details) {
        this.feedback_details = feedback_details;
    }
  
}

module.exports = Feedback;