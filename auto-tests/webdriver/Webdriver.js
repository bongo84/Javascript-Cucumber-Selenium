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

    constructor(){
        const screen = {
            width: 1920,
            height: 1080
        };
        if(config.headless){
            this.driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().headless().windowSize(screen))
            .build();
        }else{
            this.driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().windowSize(screen))
            .build();
        }
        this.driver.manage().setTimeouts( { explicit: 10000 , pageLoad: 20000 , script: 15000} );
    }

    async launchHome(){
        
        await this.driver.get(config.homeUrl).wait(until.urlIs(config.homeUrl));
    }

    async quit(){
        await this.driver.quit();
    }
    // Not used TODO
    async findElementById(id){

        await this.driver.findElement(By.id(id))
    }
    // Needs work not working as thought
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

    async clickElement(xpath){
        this.driver.findElement(By.xpath(xpath)).click();
    }

    async getPageUrl(){
        this.driver.sleep(5000)
        return await this.driver.getCurrentUrl()
    }

    async waitForPageToLoad(urlSubstring){
        await this.driver.wait(until.urlContains(urlSubstring));
    }

    
}

module.exports = Webdriver


