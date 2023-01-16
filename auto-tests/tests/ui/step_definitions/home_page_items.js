const {Given, When, Then, setDefaultTimeout} = require('cucumber')
const {expect} = require('chai')
const {Builder, By, Capabilites, Key} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const config = require('../../../config.json')
//driver setup

const driver = new Builder().forBrowser('chrome').build();
setDefaultTimeout(config.cucumberTimeout);
driver.manage().setTimeouts( { implicit: 10000 } );

Given('that I am at the DemoQA home page' , async function(){
    await driver.get(config.homeUrl);
})