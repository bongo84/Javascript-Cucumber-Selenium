const BasePage = require("./BasePage");
const config = require("../config.json");


class FormsPage extends BasePage{

    pageFormsUrl = 'forms';
    practiceFormUrl = 'automation-practice-form';

    constructor(driver){
        super();
        this.driver = driver
    }

    async getPageTitleText(){
        return await this.driver.getElementText("main-header");
    }

    async loadFormsPage(){
        await this.driver.navigateToPage(config.homeUrl + this.pageFormsUrl);
    }

    async loadPracticeForm(){
        await this.driver.navigateToPage(config.homeUrl + this.practiceFormUrl);
    }

}

module.exports = FormsPage;