/**
 * This will be the page object manager class. Responsible for helping create the pageObjects.
 * Class automatically discovers and loads all page objects from the pageObjects directory
 */
const fs = require('fs');
const path = require('path');

class PageFactory {

    constructor(driver){
        this.driver = driver;

        // discover and load all page objects
        const pageObjectsDir = __dirname;
        const files = fs.readdirSync(pageObjectsDir);

        files.forEach(file => {
            // Only process .js files, excluding PageFactory.js and BasePage.js
            if (file.endsWith('.js') && file !== 'PageFactory.js' && file !== 'BasePage.js') {
                const PageObjectClass = require(path.join(pageObjectsDir, file));
                const pageObjectName = file.replace('.js', '');

                // Instantiate the page object and add it to this instance
                this[pageObjectName] = new PageObjectClass(this.driver);
            }
        });
    }
}

module.exports = PageFactory;