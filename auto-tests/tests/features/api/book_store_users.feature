Feature: The Book Store Api allows the user to carry out the user actions.

    Can carry out user actions via the API to create a user and login
    
    @api-regression
    Scenario: The bookstore api can register a user with correct credentials
        Given that I am an API user of the demoQA bookstore
        When I register as a new user
        Then the user is created successfully

    @api-regression
    Scenario: The bookstore api does not register a user with a null value in password
        Given that I am an API user of the demoQA bookstore
        When I register as a user with a null password 
        Then the user is NOT created successfully

    @api-regression
    Scenario: The bookstore api does not register the same user once it is created
        Given that I am an API user of the demoQA bookstore
        When I register as a new user 
        Then the user is created successfully
        And I register with the same user
        Then I am unable to register the same user

    @api-regression
    Scenario: The bookstore api does not allow passwords without a numerical digit
        Given that I am an API user of the demoQA bookstore
        When I register as a user with incorrect password makeup
        | password | Tester@home | 
        Then the user is NOT created successfully

    @api-regression
    Scenario: The bookstore api does not allow passwords without an uppercase vale
        Given that I am an API user of the demoQA bookstore
        When I register as a user with incorrect password makeup
        | password | tester@2008 | 
        Then the user is NOT created successfully
        
    @api-regression
    Scenario: The bookstore api does not allow passwords without a lowercase value
        Given that I am an API user of the demoQA bookstore
        When I register as a user with incorrect password makeup
        | password | TESTER@2001 | 
        Then the user is NOT created successfully
    
    @api-regression
    Scenario: The bookstore api does not allow passwords without a special character
        Given that I am an API user of the demoQA bookstore
        When I register as a user with incorrect password makeup
        | password | Tester3004 | 
        Then the user is NOT created successfully