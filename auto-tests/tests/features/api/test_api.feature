Feature: Proof of concept for the api tests to work

    Ensure that the api tests work this is running against the petstore swagger doc
    As the demoQA website is down at precent
    
    @api-regression
    Scenario: The petstore api can add a pet
        Given that I am an API user of petstore
        When I post the add pet with name
        | name | Murphy |
        | id   | 2      |
        Then the pet is added
        | name | Murphy |