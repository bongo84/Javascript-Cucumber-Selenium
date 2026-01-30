const BasePage = require("./BasePage");


class WidgetsPage extends BasePage{

    pageUrl = 'https://demoqa.com/widgets';
    pageUrlSubString = 'widgets';

    constructor(driver){
        super();
        this.driver = driver
    }

}

module.exports = WidgetsPage;