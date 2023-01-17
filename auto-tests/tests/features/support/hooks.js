/**
 * The hooks are to run before the step def steps
 * Here we will launch the Webdriver class wrapping all selenium functions
 * Here also need to new up all the pages that will be used throughout/PageManger to be used to do this
 */
const {Before, After, setDefaultTimeout,} = require('cucumber');
const config = require('../../../config.json');
const Webdriver = require('../../../webdriver/Webdriver');
const driver = new Webdriver();

Before(async function(){
    
    setDefaultTimeout(config.cucumberTimeout);
    driver.launchHome();

    

})

After(async function(){
    driver.quit();
})