const BasePage = require("./BasePage");


class AlertsPage extends BasePage{

    pageUrl = 'https://demoqa.com/alertsWindows';
    pageUrlSubString = 'alertsWindows';

    constructor(driver){
        super();
        this.driver = driver
    }

}

module.exports = AlertsPage;