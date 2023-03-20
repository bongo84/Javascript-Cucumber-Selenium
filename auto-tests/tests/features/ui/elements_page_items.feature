Feature: Demo QA Site Elements Page has the correct menu items available

    Ensure that the demoQA website elements page has the correct items available 
    when initally loaded.

    @test-ui
    Scenario: The elements page has the correct menu items available
        Given that I am at the DemoQA home page
        When the user goes to the elements page 
        Then the menu item <string> is displayed

    @test-ui
    Scenario: The elements page title is correct
        Given that I am at the DemoQA home page
        When the user goes to the elements page
        Then the <string> page title is <string>
        | elements | elements |
         