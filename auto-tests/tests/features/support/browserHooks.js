/**
 * The hooks are to run before the step def steps
 * Here we will launch the Webdriver class wrapping all selenium functions -- Done
 * Here also need to new up all the pages that will be used throughout/PageManger to be used to do this,
 * Pages will need to be passed the driver object to be initiated ??
 */
const {Before, After, setDefaultTimeout,} = require('cucumber');
const config = require('../../../config.js');
const Webdriver = require('../../../webdriver/Webdriver');
const driver = new Webdriver();
const PageFactory = require('../../../pageObjects/PageFactory')

// Set timeout before hooks run
setDefaultTimeout(config.cucumberTimeout);

Before(async function(){

    await driver.init();
    await driver.launchHome();

    // Create PageFactory instance with auto-discovered page objects
    const pageFactory = new PageFactory(driver);

    // Automatically spread all page objects to the world object
    Object.assign(this, pageFactory);

})

After(async function(){
    driver.quit();
})