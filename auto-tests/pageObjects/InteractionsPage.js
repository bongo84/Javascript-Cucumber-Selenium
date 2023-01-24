const BasePage = require("./BasePage");


class InteractionsPage extends BasePage{

    pageUrl = 'https://demoqa.com/interaction';
    pageUrlSubString = 'interaction';

    constructor(driver){
        super();
        this.driver = driver
    }

}

module.exports = InteractionsPage;