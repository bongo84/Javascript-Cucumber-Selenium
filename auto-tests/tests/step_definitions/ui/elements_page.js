const {Given, When, Then} = require('cucumber')
const {expect, assert} = require('chai')
const config = require('../../../config.json');

Given('the user clicks the <string> elements page menu item', async function(table){
    let value = table.rowsHash();

    switch (value.menuItem) {
        case "textBox":
            //click elementsXpath shouldnt be here should have a function in ElementPage to click the textboxMenuItem
            await this.ElementsPage.clickByXpath(this.ElementsPage.textBoxMenuItemXpath);
            await this.TextBoxPage.waitForPageToLoad(this.TextBoxPage.pageUrlSubString);
            break;
        case "Check Box":
            await this.ElementsPage.clickById(this.ElementsPage.checkBoxMenuItemId);
            await this.CheckBoxMenuPage.waitForPageToLoad(this.CheckBoxMenuPage.pageUrlSubString);
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
    
    switch (value.menuItem) {
        case "textBox":
            let textBoxTitle = await this.TextBoxPage.getTextBoxPageTitle();
            expect(textBoxTitle).to.be.equal(this.TextBoxPage.textBoxPageTitleString);
            break;
        case "Check Box":
            let checkBoxTitle = await this.CheckBoxMenuPage.getCheckBoxPageTitle();
            expect(checkBoxTitle).to.be.equal(this.CheckBoxMenuPage.checkBoxPageTitle);
            break;
        default:
            break;
    }

});