const {Given, When, Then} = require('cucumber')
const {expect, assert} = require('chai')
const config = require('../../../config.json');

Given('that I am at the Forms Practice page', async function(){
    await this.FormsPage.navigateToPage(config.homeUrl + this.FormsPage.practiceFormUrl);
});

When('enters the first name', async function (table){
    let value = table.rowsHash();
    const firstName = value.firstName;
    await this.FormsPage.setElementText(this.FormsPage.firstNameTextBox, firstName);
});

When('enters the last name', async function (table){
    let value = table.rowsHash();
    const lastName = value.lastName;
    await this.FormsPage.setElementText(this.FormsPage.lastNameTextBox, lastName);
});

When('the user goes to the practice form page', async function(){
    await this.FormsPage.navigateToPage(config.homeUrl + this.FormsPage.practiceFormUrl);
    await this.FormsPage.waitForPageToLoad(this.FormsPage.practiceFormUrl);
});

Then('the Forms title {string} is displayed', async function (string) {
    const title = await this.FormsPage.getPageTitleText();
    expect(title).to.be.equal(string);
});

Then('I am still at the Forms Page', async function (table) {

    let value = table.rowsHash();
    let title = value.pageTitle;
    const pageTitle =  await this.FormsPage.getPageTitleText();
    expect(title).to.be.equal(pageTitle);

});

When('the user enters the email address', async function(table){
    let value = table.rowsHash();
    let email = value.email;
    await this.FormsPage.setElementText(this.FormsPage.emailTextBox, email);

});

Then('user can click the radio buttons',async function(table){
    let buttons = table.hashes();
    let genders = [buttons[0].button,buttons[1].button,buttons[2].button ];
    genders.forEach(element => async function(){
        if(element == "Male"){
            await this.FormsPage.clickRadioButton(this.FormsPage.maleRadioButton);
            console.log(element)
        }
        if(element == "Female"){
            await this.FormsPage.clickRadioButton(this.FormsPage.femaleRadioButton);
            console.log(element)
        }
        if(element == "Other"){
            await this.FormsPage.clickRadioButton(this.FormsPage.otherRadioButton);
            //TODO could have a webdriver IsSelected method around here to see if this works
            console.log(element)
        }
    });        

});

When('the user enters the phone number', async function(dataTable){
    let phoneNumber = dataTable.rowsHash().validNumber;
    await this.FormsPage.setElementText(this.FormsPage.phoneNumberTextBox, phoneNumber);

});

Then('the relevant field has a placeholder value as default', async function(dataTable){
    let testParams = dataTable.rowsHash();

    switch (testParams.field) {
        case "email":
            let emailPlaceHolder = await this.FormsPage.getAttribute(this.FormsPage.emailTextBox, 'placeholder')
            expect(emailPlaceHolder).to.be.equal(testParams.value);
            break;
        case "phone":
            let phonePlaceholder = await this.FormsPage.getAttribute(this.FormsPage.phoneNumberTextBox, 'placeholder')
            expect(phonePlaceholder).to.be.equal(testParams.value);
            break;
        default:
            console.error("menu item not found");
            break;
    }
});
