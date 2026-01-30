const { faker } = require('@faker-js/faker');

function createPersona(){
    let persona = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        gender: faker.person.gender(),
        userName: `${faker.person.zodiacSign()}${Math.floor(1000 + Math.random()* 9000)}`,
        password: "Tester@1984"

    }
    return persona;
}

module.exports = {createPersona}