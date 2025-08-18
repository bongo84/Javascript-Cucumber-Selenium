const request = require('supertest');
const config = require('../../config.json');
const accountUserPrefix = 'Account/v1/User';
const basePrefix = config.homeUrl;

async function registerUser(userName, password){
    console.log(`UserName : ${userName} Password : ${password}`);
    try {
        return request(basePrefix)
        .post(accountUserPrefix)
        .send({"userName":`${userName}`,"password":`${password}`})
        .set("Content-Type", "application/json");
    } catch (error) {
     console.log(`Registering user has failed : ${error}`)   
    }
};

async function deleteUser(userID){
    try {
        return request(basePrefix)
        .delete(`${accountUserPrefix}/${userID}`)
        .set("Content-Type", "application/json");
    } catch (error) {
     console.log(`Deleting user has failed : ${error}`)   
    }
};



module.exports = {registerUser, deleteUser};