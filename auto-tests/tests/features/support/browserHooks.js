/**
 * The hooks are to run before the step def steps
 * Here we will launch the Webdriver class wrapping all selenium functions -- Done
 * Here also need to new up all the pages that will be used throughout/PageManger to be used to do this,
 * Pages will need to be passed the driver object to be initiated ??
 */
const {Before, After, setDefaultTimeout,} = require('cucumber');
const config = require('../../../config.json');
const Webdriver = require('../../../webdriver/Webdriver');
const driver = new Webdriver();
const PageFactory = require('../../../pageObjects/PageFactory')

Before(async function(){
    
    /**
     * Dont really like how I am doing this here as in pageFact use and then 
     * one by one making a pageObj for world object needs
     */
    setDefaultTimeout(config.cucumberTimeout);
    driver.init();
    driver.launchHome();
    this.PageFactory = new PageFactory(driver)
    this.HomePage = this.PageFactory.HomePage;
    this.ElementsPage = this.PageFactory.ElementsPage;
    this.AlertsPage = this.PageFactory.AlertsPage;
    this.FormsPage = this.PageFactory.FormsPage;
    this.WidgetsPage = this.PageFactory.WidgetsPage;
    this.InteractionsPage = this.PageFactory.InteractionPage;
    this.BookStorePage = this.PageFactory.BookStorePage;
    this.TextBoxPage = this.PageFactory.TextBoxPage;
    this.CheckBoxMenuPage = this.PageFactory.CheckBoxMenuPage;

})

After(async function(){
    driver.quit();
})