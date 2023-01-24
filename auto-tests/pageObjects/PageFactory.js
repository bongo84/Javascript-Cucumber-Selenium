/**
 * This will be the page object manager class. Responsible for helping create the pageObjects. 
 * We want to avoid creating numerous page objects in each of the step definition files
 */
const HomePage = require('./HomePage');
const ElementsPage = require('./ElementsPage');
const FormsPage = require('./FormsPage');
const AlertsPage = require('./AlertsPage');
const WidgetsPage = require('./Widgets');
const InteractionsPage = require('./InteractionsPage');
const BookStorePage = require('./BookStorePage');

class PageFactory {
    
    constructor(driver){
        this.driver = driver;
        this.HomePage = new HomePage(this.driver);
        this.ElementsPage = new ElementsPage(this.driver);
        this.FormsPage = new FormsPage(this.driver);
        this.AlertsPage = new AlertsPage(this.driver);
        this.WidgetsPage = new WidgetsPage(this.driver);
        this.InteractionPage = new InteractionsPage(this.driver);
        this.BookStorePage = new BookStorePage(this.driver);
    }

    
}

module.exports = PageFactory;