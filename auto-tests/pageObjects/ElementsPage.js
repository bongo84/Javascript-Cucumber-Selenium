const BasePage = require("./BasePage");


class ElementsPage extends BasePage{

    pageUrl = 'https://demoqa.com/elements';
    pageUrlSubString = 'elements';

    constructor(driver){
        super();
        this.driver = driver
    }

}

module.exports = ElementsPage;