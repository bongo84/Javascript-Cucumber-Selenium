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
            await this.HomePage.clickMenuItem(this.HomePage.elementsMenuXpath);
            await this.ElementsPage.waitForPageToLoad(this.ElementsPage.pageUrlSubString);
            break;
        case "forms":
            await this.HomePage.clickMenuItem(this.HomePage.formsMenu);
            await this.FormsPage.waitForPageToLoad(this.FormsPage.pageUrlSubString)
            break;
        case "alerts":
            await this.HomePage.clickMenuItem(this.HomePage.alertsFrameMenu);
            await this.AlertsPage.waitForPageToLoad(this.AlertsPage.pageUrlSubString);
    
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
    
        default:
            break;
    }
});
