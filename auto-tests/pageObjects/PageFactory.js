/**
 * This will be the page object manager class. Responsible for helping create the pageObjects. 
 * We want to avoid creating numerous page objects in each of the step definition files
 */
const HomePage = require('./HomePage');
const ElementsPage = require('./ElementsPage')
const FormsPage = require('./FormsPage')

class PageFactory {
    
    constructor(driver){
        this.driver = driver;
        this.HomePage = new HomePage(this.driver);
        this.ElementsPage = new ElementsPage(this.driver);
        this.FormsPage = new FormsPage(this.driver)
    }

    
}

module.exports = PageFactory;