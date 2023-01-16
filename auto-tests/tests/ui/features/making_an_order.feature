Feature: Customer displays Order

    Part of the making an order epic
    As a customer 
    I want to display the order
    in order to review the contents of my order and its price easily
    @test-ui
    Scenario: Order is Empty
        Given that the order is empty
        When the customer displays the order
        Then no order items will be shown
        And "0" will be shown as total price
        And there will only be possible to add a beverage

