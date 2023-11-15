Feature: Demo QA Site Forms Page has the correct menu items available

    Ensure that the demoQA website forms page has the correct items available 
    when initally loaded. Ticket MHT-25
    
    @ui-regression
    Scenario: The forms page has the correct Title displayed
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        Then the Forms title "Practice Form" is displayed

    @test-ui
    Scenario: The forms page has the correct Title displayed
        Given that I am at the DemoQA home page
        When the user goes to the practice form page
        And enters the <firstName>
        | firstName | David |
        And enters the <lastName>
        | lastName | Murphy |
        Then the name fields contains <name>
        | name | David Murphy |

    @ui-regression
    Scenario: The student Registration Form can accept the name
        Given I am at the Forms page of DemoQA
        When the user enters the <name>
        | name | David Murphy |
        And the user clicks away from the field
        Then the name entered is still present in the UI 

    @ui-regression
    Scenario: The student Registration Form can accept an email address
        Given I am at the Forms page of DemoQA
        When the user enters the email address <emailAddress>
        | email | tester@hotmail.co.uk |
        And the user clicks away from the field
        Then the email address entered is still present

    @ui-regression
    Scenario: The student Registration Form can select different genders
        Given I am at the Forms page of DemoQA
        When the user enters clicks the <gender>
        | genderRadioBtn | Male   |
        | genderRadioBtn | Female |
        | genderRadioBtn | Other  |
        Then the radioBtn is set to true

    @ui-regression
    Scenario: The student Registration Form can enter a valid phone number
        Given I am at the Forms page of DemoQA
        When the user enters the phone <number>
        | validNumber | 07466347747 |
        Then the field accepts the number

    @ui-regression
    Scenario: The student Registration Form does not accept a number of 11 digits
        Given I am at the Forms page of DemoQA
        When the user enters the phone <number>
        | validNumber | 074663477471 |
        Then the field does NOT accept the number

    @ui-regression
    Scenario: The student Reg Form displays a calendar for when DOB field is clicked
        Given I am at the Forms page of DemoQA
        When the user clicks the DOB field
        Then the DOB calender is displayed

    @ui-regression
    Scenario: The student Reg Form can accept a valid DOB
        Given I am at the Forms page of DemoQA
        When I enter a <dateOfBirth>
        | dateOfBirth | 14/02/1984 |
        Then the form accepts the entry

    @ui-regression
    Scenario: The student Reg Form does NOT accept aninvalid DOB
        Given I am at the Forms page of DemoQA
        When I enter a <dateOfBirth>
        | dateOfBirth | 14/02/ASDF |
        Then the form rejects the entry

    @ui-regression
    Scenario: The Subjects field of the Forms page displays the correct dropdown
        Given I am at the Forms page of DemoQA
        When I enter a <letter>
        | letter | a |
        Then the correct dropdowns are displayed