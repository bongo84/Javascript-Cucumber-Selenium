Feature: Demo QA Site has correct home page items

    Ensure that the demoQA website home page has the correct items available 
    when initally loaded.

    @ui-regression
    Scenario: The home page has the correct menu item available for elements
        Given that I am at the DemoQA home page
        When the user clicks the <string> menu item
        | pageName | elements |
        Then the elements page is loaded

    @ui-regression
    Scenario: The home page has the correct menu item available for forms
        Given that I am at the DemoQA home page
        When the user clicks the <string> menu item
        | pageName | forms |
        Then the forms page is loaded

    @ui-regression
    Scenario: The home page has the correct menu item available for Alerts, Frames and Windows
        Given that I am at the DemoQA home page
        When the user clicks the <string> menu item
        | pageName | alerts |
        Then the alerts page is loaded
        

