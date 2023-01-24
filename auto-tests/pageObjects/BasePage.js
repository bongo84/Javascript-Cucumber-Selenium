/**
 * Base Page, Abstract Class for all common page actions.
 * Error when using this need to review understanding of inheritance and super construcor use
 */

class BasePage {
    
    constructor(driver){
        this.driver = driver;
    }

    async getPageUrl(){
        return await this.driver.getPageUrl();
    }

    async waitForPageToLoad(substring){
        await this.driver.waitForPageToLoad(substring)
    }

    async scrollToPageElement(xpath){
        await this.driver.scrollToPageElement(xpath);
    }



}

module.exports = BasePage;