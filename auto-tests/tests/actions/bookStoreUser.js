const request = require('supertest');
const config = require('../../config.json');
const registerUserPrefix = 'Account/v1/User';
const basePrefix = config.homeUrl;
const personaHelper = require('../../helpers/personaHelper')

async function registerUser(){
    const persona = personaHelper.createPersona();
    let userName = persona.userName;
    let password = persona.password;
    console.log(userName)
    console.log(password)
    try {
        return request(basePrefix)
        .post(registerUserPrefix)
        .send({"userName":`${userName}`,"password":`${password}`})
        .set("Content-Type", "application/json")
        .expect(201);
    } catch (error) {
     console.log(`Registering user has failed : ${error}`)   
    }
};


module.exports = {registerUser};