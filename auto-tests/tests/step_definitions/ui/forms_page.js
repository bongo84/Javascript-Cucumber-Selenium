const {Given, When, Then} = require('cucumber')
const {expect, assert} = require('chai')
const config = require('../../../config.json');

Given('the user clicks the <string> forms page menu item', async function(table){
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