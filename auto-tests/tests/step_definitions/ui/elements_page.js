const {Given, When, Then} = require('cucumber')
const {expect, assert} = require('chai')
const config = require('../../../config.json');

Given('the user clicks the <string> elements page menu item', async function(table){
    let value = table.rowsHash();

    switch (value.menuItem) {
        case "textBox":
            await this.ElementsPage.clickElementXpath(this.ElementsPage.textBoxMenuItemXpath);
            await this.ElementsPage.waitForPageToLoad(this.ElementsPage.textBoxUrlSubString)
            break;

    
        default:
            break;
    }

});

When('the user goes to the elements page' , async function(){
    await this.ElementsPage.navigateToPage(this.ElementsPage.pageUrl);
    await this.ElementsPage.waitForPageToLoad(this.ElementsPage.pageUrlSubString);
});

Then('the menu item <string> is displayed', async function(table){

    let value = table.rowsHash();
    //Even though this works need to consider textBox as its own PAge object
    switch (value.menuItem) {
        case "textBox":
            let titleString = await this.ElementsPage.getTextBoxTitle();
            expect(titleString).to.be.equal(this.ElementsPage.textBoxPageTitleString);
            break;
        default:
            break;
    }

});