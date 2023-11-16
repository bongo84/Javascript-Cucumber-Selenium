/**
 * Wrapper for selenium functionality.
 * To Debug set headless false in config
 */
const chrome = require('selenium-webdriver/chrome')
const {Builder, By, Key, until} = require('selenium-webdriver')
const config = require('../config.json');
const { expect } = require('chai');
const { isUndefined } = require('lodash');

class Webdriver {

    async init(){
        const browser = config.browser

        switch (browser) {
            case "chrome":
                await this.initChrome();
                break;
            case "firefox":
                await this.initFireFox();
                break;
            default:
                break;
        }

        this.driver.manage().setTimeouts( { explicit: 10000 , pageLoad: 20000 , script: 15000} );
    }   
    

    async initChrome(){
        let builder = new Builder().forBrowser(config.browser);

        let options = new chrome.Options();
        if(config.headless){
            options = options.headless();
        }
        options.addArguments("--window-size=1920,1080");
        options.addArguments("--start-maximized");
        options.addArguments("--no-sandbox");
        options.addArguments("ignore-certificate-errors")

        this.driver = builder.setChromeOptions(options).build();

    }
    
        

    async initFireFox(){
        //to add Firefox launch and options
        let builder = new Builder().forBrowser(config.browser)
        this.driver = builder.build();
    }

    async launchHome(){
        
        await this.driver.get(config.homeUrl).wait(until.urlIs(config.homeUrl));
    }

    async navigateToPage(pageUrl){
        await this.driver.get(pageUrl);
    }

    async quit(){
        await this.driver.quit();
    }
    // Not used TODO
    async findElementById(id){

        await this.driver.findElement(By.id(id))
    }
    // Needs work TODo
    async findElementByCss(selector){
        let element;
        try {
            element = await this.driver.findElement(By.css(selector));
            expect(element !== undefined)
            return element;
        } catch (error) {
            console.log('Find element error in webdriver' + error)
        }
        
    }
    // This works returns web element
    async findElementByXpath(xpath){
        let element;
        try {
            element = await this.driver.findElement(By.xpath(xpath));
            if(isUndefined(element)){
                console.error()
            }else{
                return element;
            }
        } catch (error) {
            console.error(error + 'Error in xpath for findElementByXpath Webdriver')
        }
    }

    async scrollToPageElement(xpath){
        let element = this.findElementByXpath(xpath);
        let actions = this.driver.actions({async : true});

        await actions.move({ origin: element }).perform();
    }
    // Working Do i need the above (probably). Below needs error handaling
    async clickElementByXpath(xpath){
        await this.driver.findElement(By.xpath(xpath)).click();
    }

    async clickElementById(id){
        await this.driver.findElement(By.id(id)).click();
    }

    async getPageUrl(){
        this.driver.sleep(5000)
        return await this.driver.getCurrentUrl()
    }

    async waitForPageToLoad(urlSubstring){
        await this.driver.wait(until.urlContains(urlSubstring));
    }

    async getText(xpath){
        let element = await this.findElementByXpath(xpath);
        return element.getText();
    }

    async getElementText(nameOfClass){
        return await this.driver.findElement(By.className(nameOfClass)).getText();
    }

    async setElementText(selectorXpath, text){
        const element = await this.findElementByXpath(selectorXpath);
        element.sendKeys(text);
    }

    async getAttribute(selector, attribute){
        let element =  await this.findElementByXpath(selector);
        let returnAttributeValue = await element.getAttribute(attribute);
        return returnAttributeValue;
    }

    async isElementDisplayed(selector){
        let elementDisplayed = await this.findElementByXpath(selector);
        return elementDisplayed.isDisplayed();
    }

    

}

module.exports = Webdriver


