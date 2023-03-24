const BasePage = require("./BasePage");


class CheckBoxMenuPage extends BasePage{

    pageUrl = 'https://demoqa.com/checkbox';
    pageUrlSubString = 'checkbox';
    checkBoxPageTitle = 'Check Box';
    pageTitleXpath = '//*[@id="app"]/div/div/div[1]/div';

    constructor(driver){
        super();
        this.driver = driver;
    }

    async getCheckBoxPageTitle(){
        return await this.driver.getText(this.pageTitleXpath);
    }

}

module.exports = CheckBoxMenuPage;