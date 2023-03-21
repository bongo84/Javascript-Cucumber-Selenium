const BasePage = require("./BasePage");


class ElementsPage extends BasePage{

    pageUrl = 'https://demoqa.com/elements';
    pageUrlSubString = 'elements';
    textBoxUrlSubString = 'text-box';
    textBoxMenuItemId = 'item-0';
    checkBoxMenuItemId = 'item-1';
    radioButtonItemId = 'item-2';
    webTabletsItemId = 'item-3';
    buttonsItemId = 'item-4';
    linksItemId = 'item-5';
    brokenLinksItemId = 'item-6';
    uploadDownLoadItemId = 'item-7';
    dynamicPropItemId = 'item-8';

    constructor(driver){
        super();
        this.driver = driver
    }

}

module.exports = ElementsPage;