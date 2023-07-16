Feature: Demo QA Site Elements Page has the correct menu items available

    Ensure that the demoQA website elements page has the correct items available 
    when initally loaded.
    
    @test-ui
    Scenario: The elements page has the correct Title displayed
        Given that I am at the DemoQA home page
        When the user goes to the elements page
        Then the title "Elements" is displayed
        

    @ui-regression
    Scenario: The elements page has the correct menu items available
        Given that I am at the DemoQA home page
        When the user goes to the elements page
        And the user clicks the <string> elements page menu item
        | menuItem | textBox   |
        Then the menu item <string> is displayed
        | menuItem | textBox   |
        
    @ui-regression
    Scenario: The elements page has the correct menu items available
        Given that I am at the DemoQA home page
        When the user goes to the elements page
        And the user clicks the <string> elements page menu item
        | menuItem | Check Box |
        Then the menu item <string> is displayed
        | menuItem | Check Box |


         