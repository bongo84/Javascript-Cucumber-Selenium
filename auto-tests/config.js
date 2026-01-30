/**
 * Configuration module using environment variables
 * Loads values from .env file in development
 * Can be overridden by system environment variables in CI/CD
 */
require('dotenv').config();

module.exports = {
    userName: process.env.USER_NAME || 'Ben Waters',
    userEmail: process.env.USER_EMAIL || 'user_email@knownemail.com',
    homeUrl: process.env.BASE_URL || 'https://demoqa.com/',
    headless: process.env.HEADLESS === 'true',
    cucumberTimeout: parseInt(process.env.CUCUMBER_TIMEOUT || '60000', 10),
    browser: process.env.BROWSER || 'chrome'
};
