const BasePage = require("./BasePage");


class HomePage extends BasePage{

    elementsMenuXpath = '/html/body/div[2]/div/div/div[2]/div/div[1]/div/div[3]';
    formsMenu = ''
    alertsFrameMenu = ''
    widgetMenu = ''
    interactionsMenu = ''

    constructor(driver){
        super();
        this.driver = driver;
    }

    async clickMenuItem(menuItemSelector){
        await this.driver.clickElement(menuItemSelector);
    }

}

module.exports = HomePage;