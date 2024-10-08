/**
 * Base Page, Abstract Class for all common page actions.
 * Error when using this need to review understanding of inheritance and super construcor use
 */

const { Key } = require("selenium-webdriver");

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

    async getAttribute(selector,attribute){
        return await this.driver.getAttribute(selector,attribute);
    }

    async isElementDisplayed(selector){
        return await this.driver.isElementDisplayed(selector)
    }

    async selectAllDate(selector){
        let element = await this.driver.findElementByXpath(selector);
        //await element.sendKeys(Key.chord(Keys.CONTROL, "a"));
        await element.sendKeys(Key.chord(Key.COMMAND, "a"));
    }



}

module.exports = BasePage;