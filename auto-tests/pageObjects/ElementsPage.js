const BasePage = require("./BasePage");


class ElementsPage extends BasePage{

    pageUrl = 'https://demoqa.com/elements';
    pageUrlSubString = 'elements';
    textBoxUrlSubString = 'text-box';
    textBoxMenuItemXpath = '//*[@id="item-0"]/span';
    textBoxPageTitleXpath = '//*[@id="app"]/div/div/div[1]/div';
    checkBoxMenuItemId = 'item-1';
    radioButtonItemId = 'item-2';
    webTabletsItemId = 'item-3';
    buttonsItemId = 'item-4';
    linksItemId = 'item-5';
    brokenLinksItemId = 'item-6';
    uploadDownLoadItemId = 'item-7';
    dynamicPropItemId = 'item-8';
    elementsPageText = '/html/body/div[2]/div/div/div[1]/div';

    constructor(driver){
        super();
        this.driver = driver
    }

    async getPageTitleText(){
        return await this.driver.getElementText("main-header");
    }

}

module.exports = ElementsPage;