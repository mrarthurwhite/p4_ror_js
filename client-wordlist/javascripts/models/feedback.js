class Feedback {
    static all = [];

    constructor(data) {
        this.id = data.id;
        this.word = data.word;
        this.save();
    }

    save() {
        Feedback.all.push(this);
    }



    static createFromForm(e) {
        e.preventDefault();

        const feedback = getFeedback().value;
        const feedbackEmail = getFeedbackEmail().value;


        let strongParams = {
            feedback: {
                description: feedback,
                email: feedbackEmail
            }
        };

        API.post('/feedbacks', strongParams)
            .then(data => {
                let feedback = new Feedback(data);
                resetFeedbackInput();
                hideFeedbackForm();
            })
    }




}