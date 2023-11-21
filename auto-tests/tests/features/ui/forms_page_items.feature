Feature: Demo QA Site Forms Page has the correct menu items available

    Ensure that the demoQA website forms page has the correct items available 
    when initally loaded. Ticket MHT-25
    
    @test-ui
    Scenario: The forms page has the correct Title displayed
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        Then the Forms title "Practice Form" is displayed

    @ui-regression
    Scenario: The student Registration Form can accept the name fields
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        And enters the first name
        | firstName | David |
        And enters the last name
        | lastName | Murphy |
        Then I am still at the Forms Page
        | pageTitle | Practice Form | 

    @ui-regression
    Scenario: The student Registration Form can accept an email address
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        And the user enters the email address
        | email | tester@hotmail.co.uk |
        Then I am still at the Forms Page
        | pageTitle | Practice Form | 

    @ui-regression
    Scenario: The student Registration Form email field has a placeholder value
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        Then the relevant field has a placeholder value as default
        | value | name@example.com |
        | field | email            |

    @ui-regression
    Scenario: The student Registration Form can select different genders
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        Then user can click the radio buttons
        | button | value |
        | Male   | true  |
        | Female | true  |
        | Other  | true  |
        

    @ui-regression
    Scenario: The student Registration Form can enter a valid phone number
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        And the user enters the phone number
        | validNumber | 07466347747 |
        Then I am still at the Forms Page
        | pageTitle | Practice Form |

    @ui-regression
    Scenario: The student Registration Form phone number field has a placeholder value
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        Then the relevant field has a placeholder value as default
        | value | Mobile Number |
        | field | phone         |

    @ui-regression
    Scenario: The student Registration Form does not accept a number of 11 digits
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        And the user enters the phone number
        | validNumber | 074663477471 |
        Then the field has max length of
        | maxLength | 10 |

    @ui-regression
    Scenario: The student Reg Form displays a calendar for when DOB field is clicked
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        And the user clicks the DOB field
        Then the calendar is displayed

    @ui-regression
    Scenario: The student Reg Form can accept a valid DOB
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        And I enter a valid date of birth 
        | dateOfBirth | 14 Feb 2023|
        Then the value is correct
        | dateOfBirth | 14 Feb 2023|
