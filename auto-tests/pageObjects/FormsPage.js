const BasePage = require("./BasePage");


class FormsPage extends BasePage{

    pageUrl = 'https://demoqa.com/forms';
    pageUrlSubString = 'forms';

    constructor(driver){
        super();
        this.driver = driver
    }

}

module.exports = FormsPage;