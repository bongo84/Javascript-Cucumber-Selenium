const BasePage = require("./BasePage");


class BookStorePage extends BasePage{

    pageUrl = 'https://demoqa.com/books';
    pageUrlSubString = 'books';

    constructor(driver){
        super();
        this.driver = driver
    }

}

module.exports = BookStorePage;