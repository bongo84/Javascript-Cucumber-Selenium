Feature: Demo QA Site has correct home page items

    Ensure that the demoQA website home page has the correct items available 
    when initally loaded.

    @test-ui
    Scenario: The home page has the correct menu item available for elements
        Given that I am at the DemoQA home page
        When the user clicks the elements item
        Then the elements page is loaded

    @test-ui2
    Scenario: The home page has the correct menu ite available for forms
        Given that I am at the DemoQA home page
        When the user clicks the forms menu item
        Then the forms page is loaded
        

