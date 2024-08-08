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
    
    this.response = await registerUser(this.persona.userName, this.persona.password);
    console.log(this.response.body);
    expect(this.response.body.username).to.be.equal(this.persona.userName);
});

When('I register as a user with a null password', async function(){
    let badPass;
    this.response = await registerUser(this.persona.userName, badPass);
    console.log(this.response.body);
    expect(this.response.body.code).to.be.equal("1300");
});

Then('the user is created successfully', function(){
    
    expect(this.response.status).to.be.equal(201);
});

Then('the user is NOT created successfully', function(){
    
    expect(this.response.status).to.be.equal(400);
});

Given('I register with the same user', async function(){
    
    this.response = await registerUser(this.persona.userName, this.persona.password);
    console.log(this.response.body);
    expect(this.response.body.code).to.be.equal("1204");
    expect(this.response.body.message).to.be.equal("User exists!");
});

Then('I am unable to register the same user', function(){
    
    expect(this.response.status).to.be.equal(406);
});

When('I register as a user with incorrect password makeup', async function(table){

    let value = table.rowsHash();
    this.response = await registerUser(this.persona.userName, value.password);
    console.log(this.response.body);
    expect(this.response.body.code).to.be.equal("1300");
    
});