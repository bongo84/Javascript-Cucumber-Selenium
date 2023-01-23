const {Given, When, Then} = require('cucumber')
const {expect} = require('chai')
const config = require('../../../config.json')

Given('that I am at the DemoQA home page' , async function(){
    const url = await this.HomePage.getPageUrl();
    expect(url).to.be.equal(config.homeUrl)

})

When('the user clicks the elements item' , async function(){

    await this.HomePage.clickMenuItem(this.HomePage.elementsMenuXpath);
    await this.HomePage.waitForPageToLoad(this.ElementsPage.pageUrlSubString);
})

Then('the elements page is loaded', async function(){
    const url = await this.ElementsPage.getPageUrl();
    expect(url).to.be.equal(this.ElementsPage.pageUrl);
})