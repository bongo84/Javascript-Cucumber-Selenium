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

    async navigateToPage(pageUrl){
        await this.driver.navigateToPage(pageUrl);
    }

    async clickByXpath(xpath){
        await this.driver.clickElementByXpath(xpath);
    }

    async clickById(id){
        await this.driver.clickElementById(id);
    }

    async getText(selector){
        return await this.driver.getText(selector);
    }

    async setElementText(selector, textInput){
        await this.driver.setElementText(selector, textInput);
    }

    async clickRadioButton(selector){
        await this.driver.clickElementByXpath(selector);
    }

    async getRadioButtonValue(selector){
        const radioBttn = await this.driver.findElementByXpath(selector);
        return radioBttn.getAttribute("checked");
    }



}

module.exports = BasePage;