const BasePage = require("./BasePage");

//There is an argument here that we have the textBox page as a helper class instead i.e TextBoxMenuHelper
class TextBoxPage extends BasePage{

    pageUrl = 'https://demoqa.com/text-box';
    pageUrlSubString = 'text-box';
    textBoxPageTitleXpath = '//*[@id="app"]/div/div/div[1]/div';
    textBoxPageTitleString = 'Text Box';
    

    constructor(driver){
        super();
        this.driver = driver
    }

    async getTextBoxPageTitle(){
        return await this.getText(this.textBoxPageTitleXpath)
    }

}

module.exports = TextBoxPage;