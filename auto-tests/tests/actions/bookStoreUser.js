const request = require('supertest');
const config = require('../../config.json');
const registerUserPrefix = 'Account/v1/User';
const basePrefix = config.homeUrl;
const personaHelper = require('../../helpers/personaHelper')

async function registerUser(userName, password){
    console.log(`UserName : ${userName} Password : ${password}`);
    try {
        return request(basePrefix)
        .post(registerUserPrefix)
        .send({"userName":`${userName}`,"password":`${password}`})
        .set("Content-Type", "application/json");
    } catch (error) {
     console.log(`Registering user has failed : ${error}`)   
    }
};



module.exports = {registerUser};