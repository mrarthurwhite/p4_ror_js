class Category {
    static all = [];

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.save();
    }

    save() {
        Category.all.push(this);
    }

    render() {
        let categorySelect = getCategory();
        let o = document.createElement("option");
            o.text = this.name;
            o.value = this.id;
       categorySelect.options.add(o);
        //categorySelect.append(o);
    }

    static renderCategories() {
        Category.all.forEach(category => category.render())
    }

    static loadAllIntoSelect() {
        // fetch, sends a GET request by default
        API.get('/categories')
            .then(function (categories) { // data is an array of blogs
                categories.forEach(data => new Category(data));
                Category.renderCategories();
                initializeSelect();
            })
            .catch(errors => console.log(errors));
    }

}