const request = require('supertest');
const {Given, When, Then} = require('cucumber')
const {expect, assert} = require('chai')
const config = require('../../../config.json');
const {registerUser} = require('../../actions/bookStoreUser.js')

Given('that I am an API user of the demoQA bookstore',async function(){
    const user = config.userName;
    console.log(`Test user : ${user} running test`);
})

When('I register as a new user', async function(){
    this.response = await registerUser();
    console.log(this.response.body);
    
});

Then('the user is created successfully', function(){
    
    expect(this.response.status).to.be.equal(201);
    
})