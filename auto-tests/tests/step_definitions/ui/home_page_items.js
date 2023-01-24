const {Given, When, Then} = require('cucumber')
const {expect} = require('chai')
const config = require('../../../config.json');
const { async } = require('q');

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
    
        default:
            break;
    }

});

Then('the elements page is loaded', async function(){
    const url = await this.ElementsPage.getPageUrl();
    expect(url).to.be.equal(this.ElementsPage.pageUrl);
});

Then('the forms page is loaded', async function(){
    const url = await this.FormsPage.getPageUrl();
    expect(url).to.be.equal(this.FormsPage.pageUrl);
});