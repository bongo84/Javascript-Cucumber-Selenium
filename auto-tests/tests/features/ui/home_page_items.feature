Feature: Demo QA Site has correct home page items

    Ensure that the demoQA website home page has the correct items available 
    when initally loaded.

    @test-ui
    Scenario: The home page has the correct elements item available
        Given that I am at the DemoQA home page
        When the user clicks the elements item
        Then the items page is loaded
        

