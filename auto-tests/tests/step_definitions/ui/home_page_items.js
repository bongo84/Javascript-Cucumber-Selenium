const {Given, When, Then} = require('cucumber')
const {expect} = require('chai')
const config = require('../../../config.json');

Given('that I am at the DemoQA home page' , async function(){
    const url = await this.HomePage.getPageUrl();
    expect(url).to.be.equal(config.homeUrl)
});

When('the user clicks the <string> menu item' , async function(table){
    let value = table.rowsHash();
    
    switch (value.pageName) {
        case "elements":
            await this.HomePage.ClickByXpath(this.HomePage.elementsMenuXpath);
            await this.ElementsPage.waitForPageToLoad(this.ElementsPage.pageUrlSubString);
            break;
        case "forms":
            await this.HomePage.ClickByXpath(this.HomePage.formsMenu);
            await this.FormsPage.waitForPageToLoad(this.FormsPage.pageUrlSubString)
            break;
        case "alerts":
            await this.HomePage.ClickByXpath(this.HomePage.alertsFrameMenu);
            await this.AlertsPage.waitForPageToLoad(this.AlertsPage.pageUrlSubString);
            break;
        case "widgets":
            await this.HomePage.ClickByXpath(this.HomePage.widgetMenu);
            await this.AlertsPage.waitForPageToLoad(this.WidgetsPage.pageUrlSubString);
            break;
        case "interactions":
            await this.HomePage.ClickByXpath(this.HomePage.interactionsMenu);
            await this.AlertsPage.waitForPageToLoad(this.InteractionsPage.pageUrlSubString);
            break;
        case "books":
            await this.HomePage.scrollToPageElement(this.HomePage.bookStoreAppMenu);
            await this.HomePage.ClickByXpath(this.HomePage.bookStoreAppMenu);
            await this.AlertsPage.waitForPageToLoad(this.BookStorePage.pageUrlSubString);
            break;
    
        default:
            break;
    }

});

Then('the <string> page is loaded', async function(table){

    let value = table.rowsHash();
    switch (value.pageName) {
        case "elements":
            const eleUrl = await this.ElementsPage.getPageUrl();
            expect(eleUrl).to.be.equal(this.ElementsPage.pageUrl);
            break;
        case "forms":
            const formUrl = await this.FormsPage.getPageUrl();
            expect(formUrl).to.be.equal(this.FormsPage.pageUrl);
            break;
        case "alerts":
            const alertUrl = await this.AlertsPage.getPageUrl();
            expect(alertUrl).to.be.equal(this.AlertsPage.pageUrl)
            break;
        case "widgets":
            const widgetUrl = await this.WidgetsPage.getPageUrl();
            expect(widgetUrl).to.be.equal(this.WidgetsPage.pageUrl)
            break;
        case "interactions":
            const interUrl = await this.InteractionsPage.getPageUrl();
            expect(interUrl).to.be.equal(this.InteractionsPage.pageUrl)
            break;
        case "books":
            const booksUrl = await this.BookStorePage.getPageUrl();
            expect(booksUrl).to.be.equal(this.BookStorePage.pageUrl)
            break;
    
        default:
            break;
    }
});
