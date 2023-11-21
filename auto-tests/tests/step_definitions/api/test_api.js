const request = require('supertest');
const {Given, When, Then} = require('cucumber')
const {expect, assert} = require('chai')
const config = require('../../../config.json');
const petstoreBaseUrl = 'https://petstore.swagger.io/v2';

Given('that I am an API user of petstore',async function(){
    const user = config.userName;
})

When('I post the add pet with name', async function(dataTable){
    let addPetPrefix = '/pet'
    let testData = dataTable.rowsHash();
    const input = `{"id":1,"category":{"id":${testData.id},"name":"string"},"name":"${testData.name}","photoUrls":["string"],"tags":[{"id":0,"name":"string"}],"status":"available"}`
    this.response = request(petstoreBaseUrl)
        .post(addPetPrefix)
        .send(input)
        .set("Content-Type", "application/json")
        .expect(200);
});

Then('the pet is added', async function(dataTable){
    let testData = dataTable.rowsHash();
    let expectedName = testData.name;
    let respObj = JSON.parse(this.response._data);
    let actualName = respObj.name;
    expect(expectedName).to.be.equal(actualName);
    
})