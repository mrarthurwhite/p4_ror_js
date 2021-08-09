class Word {
    static all = [];

    constructor(data) {
        this.id = data.id;
        this.word = data.word;
        this.definition = data.definition;
        this.sentence = data.sentence;
        this.category=data.category.name;
        this.category_id=data.category_id;
        this.save();
    }

    save() {
        Word.all.push(this);
    }

    renderWord() {
        getWord().innerHTML = `<i>${this.word}</i>`;
        getDefinition().innerHTML = `<i>${this.definition}</i>`;
        getSentence().innerHTML = `<i>${this.sentence}</i>`;
    }


    fetchAWord(e){
        let id = e.target.id;
        Word.getAword(id);
    }

    renderWordInIndex() {
        let divWordList = getWordList();
            let btn = document.createElement('button');
                btn.setAttribute('id', this.id);
                btn.innerText = `${this.word}`;
                btn.setAttribute("class", "wave-effect blue lighten-3 btn-small");
                btn.addEventListener( 'click', (e)=>{this.fetchAWord(e);});
        let p = document.createElement('p');
        divWordList.append(p,btn);
    }

    static renderWords() {
        Word.all.forEach(word => word.renderWordInIndex())
    }

    static createFromForm(e) {
        e.preventDefault();

        const word = getWord().value;
        const definition = getDefinition().value;
        const sentence = getSentence().value;
        const category_id = getCategory().value;

        let strongParams = {
            word: {
                word: word,
                definition: definition,
                sentence: sentence,
                category_id: category_id
            }
        };

        API.post('/words', strongParams)
            .then(data => {
                let word = new Word(data);
                word.renderWordInIndex();
                resetInput();
            })
    }

    static getAword(id) {
        // fetch, sends a GET request by default
        API.get("/words/"+id)
            .then(function (data) { // data is an array of blogs
                let w  = new Word(data);
                w.renderWord();
            })
            .catch(errors => console.log(errors));
    }

    static loadAllWords() {
        // fetch, sends a GET request by default
        API.get('/words')
            .then(function (words) { // data is an array of blogs
                words.forEach(data => new Word(data));
                Word.renderWords();
            })
            .catch(errors => console.log(errors));
    }

}