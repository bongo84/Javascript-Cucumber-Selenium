/**
 * Wrapper for selenium functionality. Commented line for debugging with headless off
 */
const chrome = require('selenium-webdriver/chrome')
const {Builder, By, Key, until} = require('selenium-webdriver')
const config = require('../config.json')

class Webdriver {

    constructor(){
        const screen = {
            width: 1920,
            height: 1080
        };
         this.driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless().windowSize(screen))
        //.setChromeOptions(new chrome.Options().windowSize(screen))
        .build();
        
        this.driver.manage().setTimeouts( { implicit: 10000 } );
    }

    async launchHome(){
        await this.driver.get(config.homeUrl);
    }

    async quit(){
        await this.driver.quit();
    }

    async findElement(){

    }
}

module.exports = Webdriver


