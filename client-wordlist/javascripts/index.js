
document.addEventListener('DOMContentLoaded', function () {

    Category.loadAllIntoSelect();

    Word.loadAllWords(); // send an ajax call to rails to fetch all of the words
    getWordForm().addEventListener('submit', Word.createFromForm);
    getFeedbackForm().addEventListener('submit', Feedback.createFromForm);
    getFeedbackIcon().addEventListener('click', showFeedbackForm);
    getFeedbackCancel().addEventListener('click',hideFeedbackForm )
    hideFeedbackForm();
    getWordForm().style.display='none';
    //getWordDisplay().style.visibility='hidden';
});

function initializeSelect(){
        $('select').formSelect();
}


const getWordForm = () => document.getElementById("word-form");
    const getWord = () => document.getElementById('word_d');
    const getDefinition = () => document.getElementById('definition_d');
    const getSentence = () => document.getElementById('sentence_d');
    const getCategory = () => document.getElementById('category');
    const getWordDisplay=() => document.getElementById('word-display');
    const getFeedbackForm=() => document.getElementById('feedback-form');
    const getFeedback = () => document.getElementById('feedback');
    const getFeedbackEmail = () => document.getElementById('feedback-email');
    const getFeedbackFormPanel= () => document.getElementById('feedback-panel');
    const getFeedbackCancel= () => document.getElementById('feedback_cancel');
    const getFeedbackIcon = () => document.getElementById('feedback_icon');
    const getFeedbackIconPanel= () => document.getElementById('feedback_icon_panel');

    // display area
const getWordList = () => document.querySelector('div.word-list');

function resetInput() {
    getWord().value = '';
    getDefinition().value = '';
    getSentence().value = '';
    getCategory().value= '';
    getWordDisplay().innerHTML="";
    //
    getFeedback().value = '';
    getFeedbackEmail().value = '';
}

function  showFeedbackForm(e){
    getFeedbackFormPanel().style.display='block';// <use this method for form div
    console.log(" hiding feedback icon")
    getFeedbackIconPanel().style.visibility='hidden';  // if youd still like the element to occupy the space
}


function hideFeedbackForm(){
    getFeedbackFormPanel().style.display='none'; 
    getFeedbackIconPanel().style.visibility = 'visible';     // Show;  
}

function resetFeedbackInput(){
      //
      getFeedback().value = '';
      getFeedbackEmail().value = '';
      hideFeedbackForm();
}