const BasePage = require("./BasePage");
const config = require("../config.json");


class FormsPage extends BasePage{

    pageFormsUrl = 'forms';
    practiceFormUrl = 'automation-practice-form';
    firstNameTextBox = '/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[1]/div[2]/input';
    lastNameTextBox = '/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[1]/div[4]/input';
    emailTextBox = '/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[2]/div[2]/input';
    maleRadioButton = '/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[3]/div[2]/div[1]';
    femaleRadioButton = '/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[3]/div[2]/div[2]/label';
    otherRadioButton = '/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[3]/div[2]/div[3]/label';

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