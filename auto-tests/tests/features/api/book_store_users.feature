Feature: The Book Store Api allows the user to carry out the user actions.

    Can carry out user actions via the API to create a user and login
    
    @test-api
    Scenario: The bookstore api can register a user with correct credentials
        Given that I am an API user of the demoQA bookstore
        When I register as a new user
        Then the user is created successfully

    @test-api-TOD0
    Scenario: The bookstore api can does not register a user with incorrect credentials
        Given that I am an API user of the demoQA bookstore
        When I register as a new user
        | name     | Bill    |
        | surname  | Tester  |
        | userName | billy   |
        | password | tester  | 
        Then the user is NOT created successfully
        