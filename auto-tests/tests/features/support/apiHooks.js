/**
 * The hooks are to run before the step def steps
 * Here we will initaite setup for all tests and complete teardown as well
 */
const {Before, After, setDefaultTimeout,} = require('cucumber');
const config = require('../../../config.json');
const personaHelper = require('../../../helpers/personaHelper');

Before(async function(){
    
    
    setDefaultTimeout(config.cucumberTimeout);
    this.persona = personaHelper.createPersona();
})

After(async function(){
    //nothing to run here as of yet
})