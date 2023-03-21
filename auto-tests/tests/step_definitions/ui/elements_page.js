const {Given, When, Then} = require('cucumber')
const {expect, assert} = require('chai')
const config = require('../../../config.json');


When('the user goes to the elements page' , async function(){
    await this.ElementsPage.navigateToPage(this.ElementsPage.pageUrl);
});

Given('the user clicks the <string> elements page menu item', async function(table){
    let value = table.rowsHash();
    //THIS IS FAILING AS CANT CLICK BY USING THE ID AT THE MOMENT
    switch (value.menuItem) {
        case "textBox":
            await this.ElementsPage.clickElementId(this.ElementsPage.textBoxMenuItemId);
            await this.ElementsPage.waitForpageToLoad(this.ElementsPage.textBoxUrlSubString)
            break;
        case "forms":
            await this.HomePage.clickElementXpath(this.HomePage.formsMenu);
            await this.FormsPage.waitForPageToLoad(this.FormsPage.pageUrlSubString)
            break;
        case "alerts":
            await this.HomePage.clickElementXpath(this.HomePage.alertsFrameMenu);
            await this.AlertsPage.waitForPageToLoad(this.AlertsPage.pageUrlSubString);
            break;
        case "widgets":
            await this.HomePage.clickElementXpath(this.HomePage.widgetMenu);
            await this.AlertsPage.waitForPageToLoad(this.WidgetsPage.pageUrlSubString);
            break;
        case "interactions":
            await this.HomePage.clickElementXpath(this.HomePage.interactionsMenu);
            await this.AlertsPage.waitForPageToLoad(this.InteractionsPage.pageUrlSubString);
            break;
        case "books":
            await this.HomePage.scrollToPageElement(this.HomePage.bookStoreAppMenu);
            await this.HomePage.clickElementXpath(this.HomePage.bookStoreAppMenu);
            await this.AlertsPage.waitForPageToLoad(this.BookStorePage.pageUrlSubString);
            break;
    
        default:
            break;
    }

});