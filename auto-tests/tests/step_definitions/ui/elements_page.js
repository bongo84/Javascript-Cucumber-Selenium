const {Given, When, Then} = require('cucumber')
const {expect} = require('chai')
const config = require('../../../config.json');


When('the user goes to the elements page' , async function(){
    await this.ElementsPage.navigateToPage(this.ElementsPage.pageUrl);
});