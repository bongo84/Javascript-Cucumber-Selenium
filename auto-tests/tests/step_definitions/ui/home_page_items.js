const {Given, When, Then, setDefaultTimeout} = require('cucumber')
const {expect} = require('chai')
const {Builder, By, Capabilites, Key} = require('selenium-webdriver')
const config = require('../../../config.json')

Given('that I am at the DemoQA home page' , async function(){
    console.log('working PASS')
})