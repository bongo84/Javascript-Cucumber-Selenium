const BasePage = require("./BasePage");


class HomePage extends BasePage{

    elementsMenuXpath = '/html/body/div[2]/div/div/div[2]/div/div[1]/div/div[3]';
    formsMenu = '/html/body/div[2]/div/div/div[2]/div/div[2]/div/div[3]';
    alertsFrameMenu = '/html/body/div[2]/div/div/div[2]/div/div[3]/div/div[3]';
    widgetMenu = '/html/body/div[2]/div/div/div[2]/div/div[4]/div/div[3]';
    interactionsMenu = '/html/body/div[2]/div/div/div[2]/div/div[5]/div/div[3]';
    bookStoreAppMenu = '/html/body/div[2]/div/div/div[2]/div/div[6]';
    footerBanner = '/html/body/div[1]';

    constructor(driver){
        super();
        this.driver = driver;
    }

    async clickMenuItem(menuItemSelector){
        await this.driver.clickElement(menuItemSelector);
    }

}

module.exports = HomePage;