const {Given, When, Then} = require('cucumber')
const {expect, assert} = require('chai')
const config = require('../../../config.json');

Given('that I am at the Forms Practice page', async function(){
    await this.FormsPage.navigateToPage(config.homeUrl + this.FormsPage.practiceFormUrl);
});

When('the user goes to the practice form page', async function(){
    await this.FormsPage.navigateToPage(config.homeUrl + this.FormsPage.practiceFormUrl);
    await this.FormsPage.waitForPageToLoad(this.FormsPage.practiceFormUrl);
});

Then('the Forms title {string} is displayed', async function (string) {
    const title = await this.FormsPage.getPageTitleText();
    expect(title).to.be.equal(string);
});