Feature: Demo QA Site has correct home page items

    Ensure that the demoQA website home page has the correct items available 
    when initally loaded.

    @ui-regression
    Scenario: The home page has the correct menu item available for elements
        Given that I am at the DemoQA home page
        When the user clicks the <string> menu item
        | pageName | elements |
        Then the <string> page is loaded
        | pageName | elements |

    @ui-regression
    Scenario: The home page has the correct menu item available for forms
        Given that I am at the DemoQA home page
        When the user clicks the <string> menu item
        | pageName | forms |
        Then the <string> page is loaded
        | pageName | forms |

    @test-ui
    Scenario: The home page has the correct menu item available for Alerts, Frames and Windows
        Given that I am at the DemoQA home page
        When the user clicks the <string> menu item
        | pageName | alerts |
        Then the <string> page is loaded
        | pageName | alerts |
        

